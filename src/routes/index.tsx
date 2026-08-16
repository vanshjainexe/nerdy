import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Github, Play, X, RotateCcw, Check, Trophy, ArrowLeft, LogOut } from "lucide-react";
import { type Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { passages, type Passage, type Difficulty } from "@/data/passages";
import { generatePassage } from "../lib/generate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nerdy — reading speed & retention test" },
      {
        name: "description",
        content:
          "A minimal reading test. Read an auto-scrolling passage, answer five timed questions, and get your WPM adjusted by real retention.",
      },
      { property: "og:title", content: "nerdy — reading speed & retention test" },
      {
        property: "og:description",
        content:
          "Read an auto-scrolling passage, answer five timed questions, and get WPM adjusted by real retention.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Phase = "idle" | "generating" | "reading" | "quiz" | "result" | "profile" | "leaderboard";
type Flag = "left-page" | "too-fast" | "timeout";

const DIFFICULTIES: (Difficulty | "random")[] = ["random", "easy", "hard", "elite"];
const QUESTION_SECONDS = 18;
const MAX_HUMAN_WPM = 700;
const SCROLL_WPM = 60;

function wordCount(text: string) {
  return text.trim().split(/\s+/).length;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function Index() {
  const [difficulty, setDifficulty] = useState<Difficulty | "random">("random");
  const [phase, setPhase] = useState<Phase>("idle");
  const [passage, setPassage] = useState<Passage>(passages[0]!);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [order, setOrder] = useState<number[][]>([]);
  const [start, setStart] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [now, setNow] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [qStart, setQStart] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flags, setFlags] = useState<Flag[]>([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [paused, setPaused] = useState(false);
  const [pausedTotal, setPausedTotal] = useState(0);
  const [session, setSession] = useState<Session | null>(null);
  const [profileStats, setProfileStats] = useState<{wpm: number, retention: number, total: number, rank: number} | null>(null);
  const [leaderboard, setLeaderboard] = useState<{user_id: string, user_name: string, wpm: number, retention: number}[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const pauseStart = useRef(0);
  const scroller = useRef<HTMLDivElement | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  const words = useMemo(() => wordCount(passage.text), [passage]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const openLeaderboard = useCallback(async () => {
    setPhase("leaderboard");
    setLoadingLeaderboard(true);
    const { data, error } = await supabase
      .from("progress")
      .select("user_id, user_name, wpm, retention")
      .order("wpm", { ascending: false });
      
    if (!error && data) {
      const uniqueUsers = new Map();
      data.forEach(row => {
        if (!uniqueUsers.has(row.user_id)) {
          uniqueUsers.set(row.user_id, row);
        }
      });
      setLeaderboard(Array.from(uniqueUsers.values()).slice(0, 10));
    }
    setLoadingLeaderboard(false);
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  useEffect(() => {
    if (phase === "idle") {
      const pool = difficulty === "random" ? passages : passages.filter((p) => p.difficulty === difficulty);
      const unread = pool.filter((p) => !seen.has(p.id));
      if (unread.length > 0) {
        setPassage(unread[0]!);
      }
    }
  }, [difficulty, phase, seen]);

  const addFlag = useCallback((f: Flag) => {
    setFlags((prev) => (prev.includes(f) ? prev : [...prev, f]));
  }, []);

  useEffect(() => {
    if (phase !== "reading" && phase !== "quiz") return;
    const id = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reading" || !autoScroll || paused) return;
    const el = scroller.current;
    if (!el) return;
    const totalSeconds = (words / SCROLL_WPM) * 60;
    let raf = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    timeoutId = setTimeout(() => {
      let last = performance.now();
      let exactPosition = el.scrollTop;
      const step = (t: number) => {
        const dt = (t - last) / 1000;
        last = t;
        const distance = Math.max(0, el.scrollHeight - el.clientHeight);
        exactPosition += (distance / totalSeconds) * dt;
        el.scrollTop = exactPosition;
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
    };
  }, [phase, autoScroll, paused, words]);

  useEffect(() => {
    const onHide = () => {
      const p = phaseRef.current;
      if ((p === "reading" || p === "quiz") && document.hidden) addFlag("left-page");
    };
    const onBlur = () => {
      const p = phaseRef.current;
      if (p === "reading" || p === "quiz") addFlag("left-page");
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("blur", onBlur);
    };
  }, [addFlag]);

  const openProfile = useCallback(async () => {
    setPhase("profile");
    if (!session) return;
    setLoadingProfile(true);
    
    const { data, error } = await supabase.from("progress").select("wpm, retention").eq("user_id", session.user.id);

    if (error) {
      console.error(error);
    } else if (data && data.length > 0) {
      const avgWpm = Math.round(data.reduce((sum, row) => sum + row.wpm, 0) / data.length);
      const avgRetention = Math.round(data.reduce((sum, row) => sum + row.retention, 0) / data.length);
      
      const { count } = await supabase.from('progress').select('*', { count: 'exact', head: true }).gt('wpm', avgWpm);
      const rank = count !== null ? count + 1 : 0;

      setProfileStats({ wpm: avgWpm, retention: avgRetention, total: data.length, rank });
    } else {
      setProfileStats({ wpm: 0, retention: 0, total: 0, rank: 0 });
    }

    setLoadingProfile(false);
  }, [session]);

  const begin = useCallback(async () => {
    const pool = difficulty === "random" ? passages : passages.filter(p => p.difficulty === difficulty);
    const unread = pool.filter(p => !seen.has(p.id));
    
    let nextPassage: Passage;
    
    if (unread.length > 0) {
      nextPassage = unread[0]!;
    } else {
      setPhase("generating");
      try {
        nextPassage = await generatePassage({ data: { difficulty } });
      } catch (err) {
        console.error(err);
        setApiError("Rate limit exceeded. Please try again later.");
        setTimeout(() => setApiError(null), 3000);
        
        const safePool = pool.filter(p => p.id !== passage.id);
        nextPassage = safePool[Math.floor(Math.random() * safePool.length)] || passages[0]!;
      }
    }

    setSeen(prev => new Set(prev).add(nextPassage.id));
    setPassage(nextPassage);
    setOrder(nextPassage.questions.map((q) => shuffle(q.options.map((_, i) => i))));
    setAnswers([]);
    setFlags([]);
    setQIndex(0);
    setElapsed(0);
    setPaused(false);
    setPausedTotal(0);
    setStart(Date.now());
    setPhase("reading");
    requestAnimationFrame(() => {
      if (scroller.current) scroller.current.scrollTop = 0;
    });
  }, [difficulty, seen]);

  const finishReading = useCallback(() => {
    const secs = (Date.now() - start - pausedTotal) / 1000;
    setElapsed(secs);
    if ((words / secs) * 60 > MAX_HUMAN_WPM) addFlag("too-fast");
    setQStart(Date.now());
    setPaused(false);
    setPhase("quiz");
  }, [start, words, addFlag, pausedTotal]);

  const togglePause = useCallback(() => {
    setPaused((p) => {
      if (p) {
        setPausedTotal((t) => t + (Date.now() - pauseStart.current));
      } else {
        pauseStart.current = Date.now();
      }
      return !p;
    });
  }, []);

  const submit = useCallback(
    (choice: number | null) => {
      setAnswers((prev) => {
        const next = [...prev, choice];
        if (next.length >= passage.questions.length) {
          setPhase("result");
          
          const isInvalid = flags.includes("left-page") || flags.includes("too-fast");
          if (!isInvalid && session) {
            const correct = next.filter((a, i) => a !== null && a === passage.questions[i]?.answer).length;
            const accuracy = next.length ? Math.round((correct / passage.questions.length) * 100) : 0;
            const rawWpm = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;
            const wpm = Math.round(rawWpm * (accuracy / 100));

            supabase.from("progress").insert({
              user_id: session.user.id,
              user_name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || "anonymous",
              wpm,
              retention: accuracy,
              raw_wpm: rawWpm,
              passage_id: passage.id,
              difficulty: passage.difficulty
            }).then(({ error }) => {
              if (error) console.error("Supabase sync error:", error);
            });
          }
        } else {
          setQIndex(next.length);
          setQStart(Date.now());
        }
        return next;
      });
    },
    [passage.questions.length, passage.id, passage.difficulty, elapsed, words, flags, session],
  );

  const qLeft =
    phase === "quiz" ? Math.max(0, QUESTION_SECONDS - (now - qStart) / 1000) : 0;
  useEffect(() => {
    if (phase !== "quiz") return;
    if (qLeft > 0) return;
    addFlag("timeout");
    submit(null);
  }, [phase, qLeft, submit, addFlag]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (phase === "idle" || phase === "result")) {
        e.preventDefault();
        begin();
      } else if (e.key === "Enter" && phase === "reading") {
        e.preventDefault();
        finishReading();
      } else if (e.key === " " && phase === "reading") {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, begin, finishReading, togglePause]);

  const readSeconds =
    phase === "reading"
      ? (now - start - pausedTotal - (paused ? Date.now() - pauseStart.current : 0)) / 1000
      : elapsed;
  const rawWpm = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;
  const correct = answers.filter((a, i) => a !== null && a === passage.questions[i]?.answer)
    .length;
  const accuracy = answers.length
    ? Math.round((correct / passage.questions.length) * 100)
    : 0;
  const retention = accuracy;
  const wpm = Math.round(rawWpm * (accuracy / 100));
  const invalid = flags.includes("left-page") || flags.includes("too-fast");

  const q = passage.questions[qIndex];
  const qOrder = order[qIndex] ?? [];

  const metrics = { 
    reading: 0, 
    comprehension: 0, 
    understanding: 0,
    memorization: 0 
  };
  
  if (phase === "result") {
    const overallPct = accuracy;

    const specificStats = {
      reading: { total: 0, correct: 0 },
      comprehension: { total: 0, correct: 0 },
      understanding: { total: 0, correct: 0 },
      memorization: { total: 0, correct: 0 }
    };
    
    passage.questions.forEach((question, i) => {
      const m = (question.metric || "reading") as keyof typeof specificStats;
      if (!specificStats[m]) return;
      specificStats[m].total++;
      if (answers[i] === question.answer) {
        specificStats[m].correct++;
      }
    });

    (Object.keys(metrics) as Array<keyof typeof metrics>).forEach((m) => {
      const stat = specificStats[m];
      let specificPct = overallPct;
      
      if (stat.total > 0) {
        specificPct = (stat.correct / stat.total) * 100;
      } else {
        const jitter = (m.length % 5) * (overallPct > 50 ? -2 : 2);
        specificPct = overallPct + jitter;
      }
      
      const blended = Math.round((overallPct * 0.4) + (specificPct * 0.6));
      metrics[m] = invalid ? 0 : Math.max(0, Math.min(100, blended));
    });
  }

  return (
    <>
      <div className="flex min-h-screen flex-col selection:bg-foreground selection:text-background relative">
        {apiError && (
          <div className="absolute top-0 left-0 w-full bg-destructive text-destructive-foreground text-center py-2 font-mono text-sm z-50">
            {apiError}
          </div>
        )}
      <header className="flex items-center justify-between p-6 w-full max-w-4xl mx-auto">
        <button 
          onClick={() => setPhase("idle")}
          className="font-mono text-xl lowercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
        >
          ner<span className="text-primary">dy</span>
        </button>
        <div className="flex items-center gap-6">
          {(phase === "reading" || phase === "quiz") && (
            <span className="font-mono text-sm tabular-nums text-primary">
              {phase === "reading" ? `${readSeconds.toFixed(1)}s` : `${qLeft.toFixed(1)}s`}
            </span>
          )}
          
          {session ? (
            <button 
              onClick={openProfile} 
              title="View Profile"
              className="group relative h-8 w-8 overflow-hidden rounded-full focus:outline-none"
            >
               <img 
                 src={session.user.user_metadata.avatar_url} 
                 alt="Profile" 
                 className="h-full w-full object-cover transition-opacity group-hover:opacity-70" 
               />
            </button>
          ) : (
            <button 
              onClick={signIn} 
              aria-label="Sign in with Google" 
              className="rounded-full p-1.5 transition-colors hover:bg-muted"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={openLeaderboard}
              title="Global Leaderboard"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Trophy className="h-4 w-4" />
            </button>
            <a
              href="https://github.com/aidenybai/read-recall-race"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col py-10 justify-start mt-8 w-full max-w-4xl mx-auto px-6">
        {phase === "idle" && (
          <section className="fade-up flex flex-col items-center text-center w-full">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 w-fit mx-auto rounded-lg bg-card px-4 py-3 font-mono text-sm">
              <button
                onClick={begin}
                aria-label="start reading test"
                className="rounded px-2 py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                <Play className="w-[18px] h-[18px] fill-current" />
              </button>
              <span className="mx-2 h-5 w-px bg-border" />
              {DIFFICULTIES.map((t) => (
                <button
                  key={t}
                  onClick={() => setDifficulty(t)}
                  className={`rounded px-4 py-1 transition-colors ${
                    difficulty === t
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="mx-2 h-5 w-px bg-border" />
              <button
                onClick={() => setAutoScroll(!autoScroll)}
                className="px-3 text-primary transition-colors hover:text-primary/80 focus:outline-none"
              >
                {autoScroll ? "auto scroll" : "manual scroll"}
              </button>
            </div>

            <div
              style={{ height: "6em", fontSize: "2rem" }}
              className="w-full overflow-hidden px-2 opacity-50 blur-[1px]"
            >
              <article className="reading-prose select-none text-justify">
                <p>{passage.text.replace(/\n+/g, " ")}</p>
              </article>
            </div>

            <p className="mt-6 font-mono text-xs text-muted-foreground">
              enter to start · space to pause · enter again when you finish reading
            </p>
            <p className="mt-2 font-mono text-[0.7rem] text-muted-foreground/70">
              {QUESTION_SECONDS}s per question · options shuffled · wpm scaled by retention
            </p>
          </section>
        )}

        {phase === "generating" && (
          <section className="fade-up flex flex-col items-center justify-center w-full py-32">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-muted border-t-primary"></div>
          </section>
        )}

        {phase === "reading" && (
          <section className="fade-up flex flex-col items-center text-center w-full">
            <div className="mb-6 flex w-fit mx-auto items-center justify-center gap-2 rounded-lg bg-card px-4 py-3 font-mono text-sm transition-all duration-300">
              <span className="px-3 text-muted-foreground lowercase tracking-[0.2em]">
                {passage.difficulty}
              </span>
              <span className="mx-2 h-5 w-px bg-border" />
              <span className="px-3 text-muted-foreground/70">{words} words</span>
              <span className="mx-2 h-5 w-px bg-border" />
              <button
                onClick={togglePause}
                aria-label={paused ? "resume" : "pause"}
                className="rounded px-4 py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                {paused ? "resume" : "pause"}
              </button>
              <button
                onClick={() => setAutoScroll((v) => !v)}
                aria-label="toggle auto scroll"
                className={`rounded px-4 py-1 transition-colors ${
                  autoScroll ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {autoScroll ? "auto scroll" : "manual scroll"}
              </button>
            </div>

            <div
              ref={scroller}
              style={{ height: "6em", fontSize: "2rem" }}
              className={`[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto px-2 transition-[filter] duration-300 w-full ${
                paused ? "pointer-events-none blur-md" : ""
              }`}
            >
              <article className="reading-prose select-none text-justify">
                <p>{passage.text.replace(/\n+/g, " ")}</p>
              </article>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                onClick={() => setPhase("idle")}
                aria-label="quit"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                onClick={begin}
                aria-label="restart"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
              <button
                onClick={finishReading}
                aria-label="finished reading"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Check className="w-9 h-9" />
              </button>
            </div>
          </section>
        )}

        {phase === "quiz" && q && (
          <section className="fade-up flex flex-col items-center justify-center w-full mt-2" key={qIndex}>
            <div className="w-full max-w-xl">
              <div className="mb-4 h-[4px] w-full bg-secondary overflow-hidden rounded-full">
                <div
                  className="h-full bg-primary transition-[width] duration-100 ease-linear rounded-full"
                  style={{ width: `${(qLeft / QUESTION_SECONDS) * 100}%` }}
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground text-center">
                {qIndex + 1} / {passage.questions.length}
              </p>
              <h2 className="mt-6 font-mono text-xl md:text-2xl leading-snug text-center">{q.q}</h2>
              <div className="mt-8 space-y-3">
                {qOrder.map((optIdx, i) => (
                  <button
                    key={optIdx}
                    onClick={() => submit(optIdx)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-center font-mono text-[0.95rem] transition-colors hover:border-primary hover:bg-secondary"
                  >
                    {q.options[optIdx]}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {phase === "result" && (
          <section className="fade-up">
            <div className="grid gap-10 md:grid-cols-[180px_1fr] items-end">
              <div className="space-y-6">
                <Stat label="wpm" value={invalid ? "—" : String(wpm)} accent />
                <Stat label="retention" value={invalid ? "—" : `${retention}%`} />
                <Stat label="raw" value={invalid ? "—" : String(rawWpm)} small />
                <p className="font-mono text-[0.7rem] leading-relaxed text-muted-foreground">
                  {words} words · {elapsed.toFixed(1)}s
                  <br />
                  {correct}/{passage.questions.length} correct
                </p>
              </div>

              <div className="flex flex-col justify-end h-full">
                <div className="flex items-end justify-around px-4 border-b border-border pb-2 h-64">
                  {(Object.keys(metrics) as Array<keyof typeof metrics>).map((m) => {
                    const pct = metrics[m];
                    
                    return (
                      <div key={m} className="flex h-full flex-col items-center justify-end group">
                        <div className="font-mono text-[0.7rem] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mb-2">
                          {pct}%
                        </div>
                        <div 
                          className="w-12 bg-primary transition-all duration-1000 ease-out sm:w-16 rounded-t-sm" 
                          style={{ height: `${Math.max(8, pct)}%` }} 
                        />
                        <span className="mt-3 text-center font-mono text-[0.65rem] lowercase tracking-wider text-muted-foreground w-16 sm:w-auto">
                          {m}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {flags.length > 0 && (
                  <p className="mt-8 font-mono text-xs text-destructive text-center">
                    {flags.includes("left-page") && "run voided — you left the page. "}
                    {flags.includes("too-fast") && `run voided — above ${MAX_HUMAN_WPM} wpm is skimming. `}
                    {flags.includes("timeout") && !invalid && "a question timed out."}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={begin}
                aria-label="next passage"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <RotateCcw className="w-9 h-9" />
              </button>
            </div>
          </section>
        )}

        {phase === "profile" && (
          <section className="fade-up flex flex-col items-center justify-center w-full max-w-3xl mx-auto -mt-10">
            {loadingProfile ? (
              <div className="w-full flex flex-col items-center animate-pulse">
                <div className="w-24 h-24 rounded-full bg-muted/50 mb-6"></div>
                <div className="h-8 w-48 bg-muted/50 rounded mb-12"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-4 w-24 bg-muted/50 rounded mb-3"></div>
                      <div className="h-12 w-16 bg-muted/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full flex justify-center mb-6">
                    <button
                      onClick={() => setPhase("idle")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                      title="Go Back"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <img src={session?.user.user_metadata.avatar_url} className="w-24 h-24 rounded-full" />
                  </div>
                  <div className="font-mono text-4xl text-foreground mb-12">
                    {session?.user.user_metadata.full_name || "user"}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full">
                    <div>
                      <div className="font-mono text-sm text-muted-foreground lowercase">tests taken</div>
                      <div className="font-mono text-5xl mt-2">{profileStats?.total || 0}</div>
                    </div>
                    <div>
                      <div className="font-mono text-sm text-muted-foreground lowercase">avg wpm</div>
                      <div className="font-mono text-5xl text-primary mt-2">{profileStats?.wpm || 0}</div>
                    </div>
                    <div>
                      <div className="font-mono text-sm text-muted-foreground lowercase">avg retention</div>
                      <div className="font-mono text-5xl mt-2">{profileStats?.retention || 0}%</div>
                    </div>
                    <div>
                      <div className="font-mono text-sm text-muted-foreground lowercase">global rank</div>
                      <div className="font-mono text-5xl text-primary mt-2">{profileStats?.rank ? `#${profileStats.rank}` : "—"}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12 mt-24">
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setPhase("idle");
                    }}
                    className="text-muted-foreground transition-colors hover:text-destructive"
                    title="Sign Out"
                  >
                    <LogOut className="w-6 h-6" />
                  </button>
                </div>
              </>
            )}
          </section>
        )}
        {phase === "leaderboard" && (
          <section className="fade-up flex flex-col items-center justify-center w-full max-w-2xl mx-auto -mt-10">
            <div className="relative w-full flex justify-center mb-12">
              <button
                onClick={() => setPhase("idle")}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                title="Go Back"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h2 className="font-mono text-2xl lowercase tracking-widest text-foreground m-0">leaderboard</h2>
            </div>
            
            {loadingLeaderboard ? (
              <div className="w-full bg-card/50 rounded-lg border border-border overflow-hidden animate-pulse">
                <div className="h-12 bg-muted/50 border-b border-border/50"></div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 border-b border-border/50 flex items-center px-6 gap-4">
                    <div className="h-4 w-4 bg-muted/30 rounded"></div>
                    <div className="h-4 w-32 bg-muted/30 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="w-full bg-card/50 rounded-lg border border-border overflow-hidden">
                  <table className="w-full text-left font-mono text-sm">
                    <thead className="bg-muted/50 text-muted-foreground">
                      <tr>
                        <th className="py-3 px-6 font-normal w-16 text-center">#</th>
                        <th className="py-3 px-6 font-normal">name</th>
                        <th className="py-3 px-6 font-normal text-right">wpm</th>
                        <th className="py-3 px-6 font-normal text-right">acc</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.length === 0 ? (
                        <tr><td colSpan={4} className="py-8 text-center text-muted-foreground">no data yet</td></tr>
                      ) : leaderboard.map((row, i) => (
                        <tr key={i} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-6 text-center text-muted-foreground">{i + 1}</td>
                          <td className="py-3 px-6 font-semibold">{row.user_name}</td>
                          <td className="py-3 px-6 text-right text-primary text-lg">{row.wpm}</td>
                          <td className="py-3 px-6 text-right">{row.retention}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </div>
    </>
  );
}

function Stat({
  label,
  value,
  accent,
  small,
}: {
  label: string;
  value: string;
  accent?: boolean;
  small?: boolean;
}) {
  return (
    <div>
      <div
        className={`font-mono tabular-nums ${small ? "text-3xl" : "text-5xl sm:text-6xl"}`}
        style={accent ? { color: "var(--primary)" } : undefined}
      >
        {value}
      </div>
      <div className="mt-1 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground lowercase">
        {label}
      </div>
    </div>
  );
}
