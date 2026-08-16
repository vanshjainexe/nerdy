import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-Dt2le7VG2.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
import { a as LogOut, c as ArrowLeft, i as Play, n as Trophy, o as Github, r as RotateCcw, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DSFm7GSv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = createClient("https://ddfeepusxroonhlalgpl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZmVlcHVzeHJvb25obGFsZ3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NjAxMzksImV4cCI6MjEwMjQzNjEzOX0.UAiqTLXzeSImq5huugBlZ7LAOrOh1Hb0Q8mxbCz_AOE");
var passages = [
	{
		id: "easy-1",
		difficulty: "easy",
		title: "The Blue Sky",
		text: `Have you ever looked up and wondered why the sky is blue? The answer has to do with how sunlight interacts with the air around our planet. Sunlight looks white, but it is actually made up of all the colors of the rainbow. When sunlight reaches Earth, it hits gases and particles in the air. 

These tiny particles act like tiny mirrors. They scatter the light in all directions. Light travels in waves. Some waves are long, and some are short. Blue light travels as very short waves. Because the blue waves are so short, they hit the particles in the air and scatter much more than the red or yellow waves. 

Our eyes are also very sensitive to blue light. When we look up, we see all that scattered blue light coming from every part of the sky. This scattering effect was first explained in 1859 by a scientist named John Tyndall. He used a tank of water and some milk to show how light scatters. 

At sunset, the sun is lower in the sky. The light has to travel through a lot more air to reach our eyes. By the time the light gets to us, most of the blue light has been scattered away. That leaves the red, orange, and yellow light to color the evening sky.`,
		questions: [
			{
				q: "What color does sunlight appear to be before it hits the air?",
				options: [
					"Blue",
					"Yellow",
					"White",
					"Clear"
				],
				answer: 2,
				metric: "reading"
			},
			{
				q: "Why does blue light scatter more than other colors?",
				options: [
					"It travels in short waves.",
					"It travels in long waves.",
					"It is heavier than red light.",
					"Our eyes pull it in."
				],
				answer: 0,
				metric: "comprehension"
			},
			{
				q: "In what year did John Tyndall first explain this scattering effect?",
				options: [
					"1850",
					"1859",
					"1895",
					"1905"
				],
				answer: 1,
				metric: "memorization"
			},
			{
				q: "What materials did Tyndall use to show how light scatters?",
				options: [
					"Glass and mirrors",
					"Water and milk",
					"Dust and air",
					"Prisms and sunlight"
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "Based on the text, why do sunsets appear red and orange?",
				options: [
					"The sun gets hotter at night.",
					"Red light scatters more than blue light.",
					"The blue light has already been scattered away.",
					"The earth blocks the blue light."
				],
				answer: 2,
				metric: "understanding"
			}
		]
	},
	{
		id: "easy-2",
		difficulty: "easy",
		title: "How Bees Make Honey",
		text: `Honey bees are amazing insects. They work very hard to make the sweet honey we love to eat. The process begins when a bee visits a flower to collect a sugary juice called nectar. The bee uses its long tongue like a straw to suck up the nectar. It stores the nectar in a special extra stomach called a honey stomach. 

A single bee might visit between 50 and 100 flowers during one trip. Once its honey stomach is full, the bee flies back to the hive. Inside the hive, the bee passes the nectar to another worker bee. This worker bee chews the nectar for about 30 minutes. This chewing mixes special enzymes into the nectar. These enzymes help turn the nectar into honey and stop it from going bad. 

Next, the bees spit the mixture into the little hexagonal cells made of wax. The honey is still very watery at this point. To fix this, the bees fan their wings really fast over the cells. The wind from their wings dries out the honey and makes it thick and sticky. Finally, the bees seal the cell with a wax lid to keep it safe for winter.`,
		questions: [
			{
				q: "What does the bee use to suck up the nectar?",
				options: [
					"Its front legs",
					"A long tongue",
					"Its wings",
					"A small straw"
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "How many flowers might a bee visit on one trip?",
				options: [
					"10 to 20",
					"50 to 100",
					"100 to 200",
					"500 to 1000"
				],
				answer: 1,
				metric: "memorization"
			},
			{
				q: "Why does the worker bee chew the nectar?",
				options: [
					"To eat it for energy",
					"To mix in special enzymes",
					"To make it smell better",
					"To warm it up"
				],
				answer: 1,
				metric: "comprehension"
			},
			{
				q: "What causes the watery honey to become thick and sticky?",
				options: [
					"The sun heating the hive",
					"The wax lid sealing it",
					"Bees fanning their wings over it",
					"Enzymes soaking up the water"
				],
				answer: 2,
				metric: "understanding"
			},
			{
				q: "Where do the bees put the honey after chewing it?",
				options: [
					"On the flowers",
					"In hexagonal wax cells",
					"Outside the hive",
					"In their honey stomachs"
				],
				answer: 1,
				metric: "reading"
			}
		]
	},
	{
		id: "hard-1",
		difficulty: "hard",
		title: "The Architecture of Sleep",
		text: `For decades, sleep was conceptualized as a monolithic state of passive rest, a simple powering down of the biological machine. Modern polysomnography has entirely dismantled this view, revealing sleep as a highly active, structurally complex process defined by distinct architectural stages. These stages—broadly categorized into Rapid Eye Movement (REM) and non-REM sleep—cycle repeatedly throughout a typical night.

Non-REM sleep dominates the early night and is subdivided into three stages. Stage N3, often called slow-wave sleep, is the deepest phase. During N3, the brain produces high-amplitude, low-frequency delta waves, typically ranging from 0.5 to 2.0 Hertz. This stage is critical for physical restoration; the body repairs tissues, synthesizes bone and muscle, and bolsters the immune system. Conversely, REM sleep, which becomes progressively longer in the latter half of the night, is characterized by intense brain activity that mirrors waking consciousness. 

The evolutionary purpose of this complex cycle remains a subject of intense scientific debate. The synaptic homeostasis hypothesis suggests that sleep serves to downscale synaptic connections that were strengthened during waking hours, essentially clearing physiological noise to allow for new learning. Meanwhile, during REM sleep, the brain selectively consolidates emotional and procedural memories. Thus, sleep is not merely an absence of wakefulness, but a highly orchestrated metabolic and cognitive maintenance protocol.`,
		questions: [
			{
				q: "How was sleep historically conceptualized?",
				options: [
					"As a highly active process",
					"As a monolithic state of passive rest",
					"As an emotional consolidation phase",
					"As a cycle of REM and non-REM"
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "What is the typical frequency range of delta waves during N3 sleep?",
				options: [
					"0.5 to 2.0 Hertz",
					"2.0 to 4.5 Hertz",
					"10 to 12 Hertz",
					"0.1 to 0.5 Hertz"
				],
				answer: 0,
				metric: "memorization"
			},
			{
				q: "What does the synaptic homeostasis hypothesis propose?",
				options: [
					"Sleep strengthens all waking memories.",
					"Sleep physically repairs bone and muscle.",
					"Sleep downscales waking synaptic connections.",
					"Sleep increases physiological noise."
				],
				answer: 2,
				metric: "comprehension"
			},
			{
				q: "According to the passage, how do N3 and REM sleep differ in their primary restorative functions?",
				options: [
					"N3 consolidates memories, while REM restores the immune system.",
					"N3 is for physical restoration, while REM focuses on memory consolidation.",
					"N3 involves rapid eye movement, while REM involves delta waves.",
					"Both serve identical physical restorative purposes."
				],
				answer: 1,
				metric: "understanding"
			},
			{
				q: "When does REM sleep typically dominate the sleep cycle?",
				options: [
					"During the early night",
					"During the latter half of the night",
					"Equally throughout the night",
					"Only during daytime naps"
				],
				answer: 1,
				metric: "reading"
			}
		]
	},
	{
		id: "hard-2",
		difficulty: "hard",
		title: "The Silicon Bottleneck",
		text: `Since the 1960s, the semiconductor industry has been driven by Moore's Law, an empirical observation predicting that the number of transistors on a microchip doubles approximately every two years. This relentless miniaturization has fueled the modern digital revolution, enabling everything from smartphones to artificial intelligence. However, as transistor gates shrink below the 3-nanometer threshold, manufacturers are encountering profound physical and economic bottlenecks.

At these atomic scales, quantum tunneling becomes a significant hurdle. When a silicon barrier is only a few atoms thick, electrons can spontaneously pass through it regardless of the gate's state, resulting in severe current leakage and excessive heat generation. To mitigate this, engineers have transitioned from flat, planar transistors to three-dimensional architectures like FinFETs and, more recently, Gate-All-Around (GAA) designs. These structures provide better electrostatic control over the channel, suppressing leakage.

Economically, the cost of manufacturing these bleeding-edge chips is skyrocketing. A single Extreme Ultraviolet (EUV) lithography machine, required to etch patterns at these microscopic resolutions, costs upwards of 150 million dollars. Consequently, the industry is consolidating; only a handful of foundries globally possess the capital to fabricate state-of-the-art logic chips. This consolidation raises critical concerns about supply chain resilience in a world increasingly dependent on advanced computational power.`,
		questions: [
			{
				q: "What does Moore's Law predict?",
				options: [
					"Chip costs double every two years.",
					"Transistor counts double every two years.",
					"Quantum tunneling stops below 3nm.",
					"Heat generation halves every two years."
				],
				answer: 1,
				metric: "memorization"
			},
			{
				q: "What physical problem occurs when silicon barriers become only a few atoms thick?",
				options: [
					"Electrons stop moving entirely.",
					"EUV machines fail to etch them.",
					"Electrons pass through the barrier spontaneously.",
					"The silicon shatters under heat."
				],
				answer: 2,
				metric: "reading"
			},
			{
				q: "Why did engineers transition to three-dimensional architectures like FinFETs?",
				options: [
					"To reduce the cost of manufacturing",
					"To increase the size of the microchips",
					"To provide better electrostatic control and suppress leakage",
					"To accelerate quantum tunneling"
				],
				answer: 2,
				metric: "comprehension"
			},
			{
				q: "What is the approximate cost of a single Extreme Ultraviolet (EUV) lithography machine?",
				options: [
					"15 million dollars",
					"50 million dollars",
					"150 million dollars",
					"1.5 billion dollars"
				],
				answer: 2,
				metric: "memorization"
			},
			{
				q: "Based on the text, what is a direct consequence of the skyrocketing manufacturing costs?",
				options: [
					"Moore's Law is accelerating.",
					"The industry is consolidating to a handful of foundries.",
					"Silicon is being replaced by other materials.",
					"Quantum tunneling is being entirely eliminated."
				],
				answer: 1,
				metric: "understanding"
			}
		]
	},
	{
		id: "elite-1",
		difficulty: "elite",
		title: "Epistemological Limits of Empiricism",
		text: `The ascendancy of logical positivism in the early twentieth century predicated itself upon a strict adherence to empirical verificationism. Proponents argued that any declarative statement possessing cognitive meaning must be reducible, in principle, to sensory experience. Consequently, metaphysical postulates—ranging from ontological debates about the nature of being to ethical prescriptions—were summarily discarded as meaningless emotive expressions. 

However, this strict empiricist framework harbors an inherent, self-referential paradox, most acutely articulated by Willard Van Orman Quine in his seminal 1951 paper, "Two Dogmas of Empiricism." Quine systematically dismantled the analytic-synthetic distinction, arguing that the boundary between truths founded purely on linguistic definitions (analytic) and those grounded in factual observation (synthetic) is hopelessly porous. He posited a holistic model of knowledge, a "web of belief," wherein peripheral experiential anomalies do not merely falsify isolated hypotheses but reverberate through the entire conceptual apparatus.

If one accepts Quine's holism, the rigid verificationist criterion collapses under its own weight. It reveals that our sensory data are inextricably theory-laden; observation cannot serve as a perfectly neutral arbiter of truth because the very act of observation is structured by pre-existing theoretical commitments. Thus, radical empiricism ironically requires a metaphysical leap of faith: the unprovable assumption that reality is perfectly isomorphic to human sensory constraints.`,
		questions: [
			{
				q: "What did logical positivists argue regarding declarative statements?",
				options: [
					"They must be inherently metaphysical.",
					"They must be reducible to sensory experience.",
					"They are entirely meaningless emotive expressions.",
					"They exist solely as analytic truths."
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "In what year did Quine publish 'Two Dogmas of Empiricism'?",
				options: [
					"1920",
					"1951",
					"1965",
					"1972"
				],
				answer: 1,
				metric: "memorization"
			},
			{
				q: "How does Quine characterize the analytic-synthetic distinction?",
				options: [
					"As a rigid and necessary boundary",
					"As hopelessly porous",
					"As the foundation of logical positivism",
					"As purely linguistic"
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "What is a primary implication of Quine's 'web of belief' model?",
				options: [
					"Metaphysical postulates are strictly meaningless.",
					"Observation serves as a neutral arbiter of truth.",
					"Experiential anomalies reverberate through the entire conceptual apparatus.",
					"Analytic truths are entirely immune to revision."
				],
				answer: 2,
				metric: "comprehension"
			},
			{
				q: "Why does the text claim that radical empiricism requires a 'metaphysical leap of faith'?",
				options: [
					"Because it relies on the unprovable assumption that reality matches human sensory limits.",
					"Because it necessitates a belief in an objective deity.",
					"Because it rejects all forms of sensory data.",
					"Because Quine proved that empiricism is factually incorrect."
				],
				answer: 0,
				metric: "understanding"
			}
		]
	},
	{
		id: "elite-2",
		difficulty: "elite",
		title: "The Thermodynamics of Information",
		text: `The synthesis of information theory and statistical mechanics represents one of the most profound paradigm shifts in modern physics, fundamentally initiated by Rolf Landauer in 1961. Landauer's principle posits a strictly defined physical limit for computation, asserting that the erasure of one bit of information fundamentally dissipates a minimum amount of energy equal to kT ln 2, where k is the Boltzmann constant and T is the absolute temperature. 

This principle elegantly resolved Maxwell's demon, a longstanding paradox that seemingly violated the Second Law of Thermodynamics. The demon, a hypothetical entity controlling a massless door between two gas chambers, could ostensibly decrease the system's entropy without expending work by selectively allowing fast molecules to pass. However, as Charles Bennett demonstrated, the demon must inevitably measure and store information regarding molecular velocities to function. Because its memory capacity is finite, it must eventually erase this data to continue operating. 

It is the act of erasure—not the measurement itself—that constitutes a logically irreversible operation, thus generating thermodynamic entropy that offsets any negative entropy created by sorting the molecules. This implies a startling ontological equivalence: information is not merely an abstract mathematical construct, but a physical entity inherently bound by the thermodynamic arrow of time. Erasing a digital zero fundamentally alters the thermal state of the universe.`,
		questions: [
			{
				q: "Who fundamentally initiated the synthesis of information theory and statistical mechanics?",
				options: [
					"James Clerk Maxwell",
					"Charles Bennett",
					"Rolf Landauer",
					"Ludwig Boltzmann"
				],
				answer: 2,
				metric: "reading"
			},
			{
				q: "In what year was Landauer's principle introduced?",
				options: [
					"1861",
					"1961",
					"1985",
					"1992"
				],
				answer: 1,
				metric: "memorization"
			},
			{
				q: "What does Landauer's principle assert regarding the erasure of one bit of information?",
				options: [
					"It requires zero physical energy.",
					"It generates a minimum energy dissipation of kT ln 2.",
					"It reverses the thermodynamic arrow of time.",
					"It violates the Second Law of Thermodynamics."
				],
				answer: 1,
				metric: "reading"
			},
			{
				q: "According to Bennett, why does Maxwell's demon fail to violate the Second Law of Thermodynamics?",
				options: [
					"The demon's door requires too much friction to operate.",
					"The act of measuring the molecules generates massive heat.",
					"The demon must eventually erase stored information, generating entropy.",
					"Fast molecules spontaneously return to their original chamber."
				],
				answer: 2,
				metric: "comprehension"
			},
			{
				q: "What is the broader ontological implication discussed in the final paragraph?",
				options: [
					"Information is purely an abstract mathematical construct.",
					"Thermodynamics only applies to macroscopic systems, not data.",
					"Information is a physical entity bound by thermodynamics.",
					"The universe has infinite memory capacity."
				],
				answer: 2,
				metric: "understanding"
			}
		]
	}
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var generatePassage = createServerFn({ method: "POST" }).validator(objectType({ difficulty: enumType([
	"easy",
	"hard",
	"elite",
	"random"
]) })).handler(createSsrRpc("002e360b6fa05e5e1b036289b579bdd3e5e70802214f33ddeee65ba452c396e9"));
var DIFFICULTIES = [
	"random",
	"easy",
	"hard",
	"elite"
];
var QUESTION_SECONDS = 18;
var MAX_HUMAN_WPM = 700;
var SCROLL_WPM = 60;
function wordCount(text) {
	return text.trim().split(/\s+/).length;
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function Index() {
	const [difficulty, setDifficulty] = (0, import_react.useState)("random");
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [passage, setPassage] = (0, import_react.useState)(passages[0]);
	const [seen, setSeen] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [order, setOrder] = (0, import_react.useState)([]);
	const [start, setStart] = (0, import_react.useState)(0);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [now, setNow] = (0, import_react.useState)(0);
	const [qIndex, setQIndex] = (0, import_react.useState)(0);
	const [qStart, setQStart] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [flags, setFlags] = (0, import_react.useState)([]);
	const [autoScroll, setAutoScroll] = (0, import_react.useState)(true);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [pausedTotal, setPausedTotal] = (0, import_react.useState)(0);
	const [session, setSession] = (0, import_react.useState)(null);
	const [profileStats, setProfileStats] = (0, import_react.useState)(null);
	const [leaderboard, setLeaderboard] = (0, import_react.useState)([]);
	const [loadingLeaderboard, setLoadingLeaderboard] = (0, import_react.useState)(false);
	const [loadingProfile, setLoadingProfile] = (0, import_react.useState)(false);
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const pauseStart = (0, import_react.useRef)(0);
	const scroller = (0, import_react.useRef)(null);
	const phaseRef = (0, import_react.useRef)(phase);
	phaseRef.current = phase;
	const words = (0, import_react.useMemo)(() => wordCount(passage.text), [passage]);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
		return () => subscription.unsubscribe();
	}, []);
	const openLeaderboard = (0, import_react.useCallback)(async () => {
		setPhase("leaderboard");
		setLoadingLeaderboard(true);
		const { data, error } = await supabase.from("progress").select("user_id, user_name, wpm, retention").order("wpm", { ascending: false });
		if (!error && data) {
			const uniqueUsers = /* @__PURE__ */ new Map();
			data.forEach((row) => {
				if (!uniqueUsers.has(row.user_id)) uniqueUsers.set(row.user_id, row);
			});
			setLeaderboard(Array.from(uniqueUsers.values()).slice(0, 10));
		}
		setLoadingLeaderboard(false);
	}, []);
	const signIn = async () => {
		await supabase.auth.signInWithOAuth({ provider: "google" });
	};
	(0, import_react.useEffect)(() => {
		if (phase === "idle") {
			const unread = (difficulty === "random" ? passages : passages.filter((p) => p.difficulty === difficulty)).filter((p) => !seen.has(p.id));
			if (unread.length > 0) setPassage(unread[0]);
		}
	}, [
		difficulty,
		phase,
		seen
	]);
	const addFlag = (0, import_react.useCallback)((f) => {
		setFlags((prev) => prev.includes(f) ? prev : [...prev, f]);
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase !== "reading" && phase !== "quiz") return;
		const id = setInterval(() => setNow(Date.now()), 100);
		return () => clearInterval(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "reading" || !autoScroll || paused) return;
		const el = scroller.current;
		if (!el) return;
		const totalSeconds = words / SCROLL_WPM * 60;
		let raf = 0;
		let timeoutId;
		timeoutId = setTimeout(() => {
			let last = performance.now();
			let exactPosition = el.scrollTop;
			const step = (t) => {
				const dt = (t - last) / 1e3;
				last = t;
				const distance = Math.max(0, el.scrollHeight - el.clientHeight);
				exactPosition += distance / totalSeconds * dt;
				el.scrollTop = exactPosition;
				raf = requestAnimationFrame(step);
			};
			raf = requestAnimationFrame(step);
		}, 1500);
		return () => {
			clearTimeout(timeoutId);
			cancelAnimationFrame(raf);
		};
	}, [
		phase,
		autoScroll,
		paused,
		words
	]);
	(0, import_react.useEffect)(() => {
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
	const openProfile = (0, import_react.useCallback)(async () => {
		setPhase("profile");
		if (!session) return;
		setLoadingProfile(true);
		const { data, error } = await supabase.from("progress").select("wpm, retention").eq("user_id", session.user.id);
		if (error) console.error(error);
		else if (data && data.length > 0) {
			const avgWpm = Math.round(data.reduce((sum, row) => sum + row.wpm, 0) / data.length);
			const avgRetention = Math.round(data.reduce((sum, row) => sum + row.retention, 0) / data.length);
			const { count } = await supabase.from("progress").select("*", {
				count: "exact",
				head: true
			}).gt("wpm", avgWpm);
			const rank = count !== null ? count + 1 : 0;
			setProfileStats({
				wpm: avgWpm,
				retention: avgRetention,
				total: data.length,
				rank
			});
		} else setProfileStats({
			wpm: 0,
			retention: 0,
			total: 0,
			rank: 0
		});
		setLoadingProfile(false);
	}, [session]);
	const begin = (0, import_react.useCallback)(async () => {
		const pool = difficulty === "random" ? passages : passages.filter((p) => p.difficulty === difficulty);
		const unread = pool.filter((p) => !seen.has(p.id));
		let nextPassage;
		if (unread.length > 0) nextPassage = unread[0];
		else {
			setPhase("generating");
			try {
				nextPassage = await generatePassage({ data: { difficulty } });
			} catch (err) {
				console.error(err);
				setApiError("Rate limit exceeded. Please try again later.");
				setTimeout(() => setApiError(null), 3e3);
				const safePool = pool.filter((p) => p.id !== passage.id);
				nextPassage = safePool[Math.floor(Math.random() * safePool.length)] || passages[0];
			}
		}
		setSeen((prev) => new Set(prev).add(nextPassage.id));
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
	const finishReading = (0, import_react.useCallback)(() => {
		const secs = (Date.now() - start - pausedTotal) / 1e3;
		setElapsed(secs);
		if (words / secs * 60 > MAX_HUMAN_WPM) addFlag("too-fast");
		setQStart(Date.now());
		setPaused(false);
		setPhase("quiz");
	}, [
		start,
		words,
		addFlag,
		pausedTotal
	]);
	const togglePause = (0, import_react.useCallback)(() => {
		setPaused((p) => {
			if (p) setPausedTotal((t) => t + (Date.now() - pauseStart.current));
			else pauseStart.current = Date.now();
			return !p;
		});
	}, []);
	const submit = (0, import_react.useCallback)((choice) => {
		setAnswers((prev) => {
			const next = [...prev, choice];
			if (next.length >= passage.questions.length) {
				setPhase("result");
				if (!(flags.includes("left-page") || flags.includes("too-fast")) && session) {
					const correct = next.filter((a, i) => a !== null && a === passage.questions[i]?.answer).length;
					const accuracy = next.length ? Math.round(correct / passage.questions.length * 100) : 0;
					const rawWpm = elapsed > 0 ? Math.round(words / elapsed * 60) : 0;
					const wpm = Math.round(rawWpm * (accuracy / 100));
					supabase.from("progress").insert({
						user_id: session.user.id,
						user_name: session.user.user_metadata.full_name || session.user.email?.split("@")[0] || "anonymous",
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
	}, [
		passage.questions.length,
		passage.id,
		passage.difficulty,
		elapsed,
		words,
		flags,
		session
	]);
	const qLeft = phase === "quiz" ? Math.max(0, QUESTION_SECONDS - (now - qStart) / 1e3) : 0;
	(0, import_react.useEffect)(() => {
		if (phase !== "quiz") return;
		if (qLeft > 0) return;
		addFlag("timeout");
		submit(null);
	}, [
		phase,
		qLeft,
		submit,
		addFlag
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
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
	}, [
		phase,
		begin,
		finishReading,
		togglePause
	]);
	const readSeconds = phase === "reading" ? (now - start - pausedTotal - (paused ? Date.now() - pauseStart.current : 0)) / 1e3 : elapsed;
	const rawWpm = elapsed > 0 ? Math.round(words / elapsed * 60) : 0;
	const correct = answers.filter((a, i) => a !== null && a === passage.questions[i]?.answer).length;
	const accuracy = answers.length ? Math.round(correct / passage.questions.length * 100) : 0;
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
			reading: {
				total: 0,
				correct: 0
			},
			comprehension: {
				total: 0,
				correct: 0
			},
			understanding: {
				total: 0,
				correct: 0
			},
			memorization: {
				total: 0,
				correct: 0
			}
		};
		passage.questions.forEach((question, i) => {
			const m = question.metric || "reading";
			if (!specificStats[m]) return;
			specificStats[m].total++;
			if (answers[i] === question.answer) specificStats[m].correct++;
		});
		Object.keys(metrics).forEach((m) => {
			const stat = specificStats[m];
			let specificPct = overallPct;
			if (stat.total > 0) specificPct = stat.correct / stat.total * 100;
			else {
				const jitter = m.length % 5 * (overallPct > 50 ? -2 : 2);
				specificPct = overallPct + jitter;
			}
			const blended = Math.round(overallPct * .4 + specificPct * .6);
			metrics[m] = invalid ? 0 : Math.max(0, Math.min(100, blended));
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col selection:bg-foreground selection:text-background relative",
		children: [
			apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 w-full bg-destructive text-destructive-foreground text-center py-2 font-mono text-sm z-50",
				children: apiError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between p-6 w-full max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setPhase("idle"),
					className: "font-mono text-xl lowercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground focus:outline-none",
					children: ["ner", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "dy"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [
						(phase === "reading" || phase === "quiz") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm tabular-nums text-primary",
							children: phase === "reading" ? `${readSeconds.toFixed(1)}s` : `${qLeft.toFixed(1)}s`
						}),
						session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: openProfile,
							title: "View Profile",
							className: "group relative h-8 w-8 overflow-hidden rounded-full focus:outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: session.user.user_metadata.avatar_url,
								alt: "Profile",
								className: "h-full w-full object-cover transition-opacity group-hover:opacity-70"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: signIn,
							"aria-label": "Sign in with Google",
							className: "rounded-full p-1.5 transition-colors hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 24 24",
								width: "20",
								height: "20",
								xmlns: "http://www.w3.org/2000/svg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
										fill: "#4285F4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
										fill: "#34A853"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
										fill: "#FBBC05"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
										fill: "#EA4335"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: openLeaderboard,
								title: "Global Leaderboard",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/aidenybai/read-recall-race",
								target: "_blank",
								rel: "noreferrer",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col py-10 justify-start mt-8 w-full max-w-4xl mx-auto px-6",
				children: [
					phase === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up flex flex-col items-center text-center w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex flex-wrap items-center justify-center gap-2 w-fit mx-auto rounded-lg bg-card px-4 py-3 font-mono text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: begin,
										"aria-label": "start reading test",
										className: "rounded px-2 py-1 text-muted-foreground transition-colors hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-[18px] h-[18px] fill-current" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 h-5 w-px bg-border" }),
									DIFFICULTIES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setDifficulty(t),
										className: `rounded px-4 py-1 transition-colors ${difficulty === t ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
										children: t
									}, t)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 h-5 w-px bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setAutoScroll(!autoScroll),
										className: "px-3 text-primary transition-colors hover:text-primary/80 focus:outline-none",
										children: autoScroll ? "auto scroll" : "manual scroll"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									height: "6em",
									fontSize: "2rem"
								},
								className: "w-full overflow-hidden px-2 opacity-50 blur-[1px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "reading-prose select-none text-justify",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: passage.text.replace(/\n+/g, " ") })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-mono text-xs text-muted-foreground",
								children: "enter to start · space to pause · enter again when you finish reading"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-[0.7rem] text-muted-foreground/70",
								children: [QUESTION_SECONDS, "s per question · options shuffled · wpm scaled by retention"]
							})
						]
					}),
					phase === "generating" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "fade-up flex flex-col items-center justify-center w-full py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-2 border-muted border-t-primary" })
					}),
					phase === "reading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up flex flex-col items-center text-center w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex w-fit mx-auto items-center justify-center gap-2 rounded-lg bg-card px-4 py-3 font-mono text-sm transition-all duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 text-muted-foreground lowercase tracking-[0.2em]",
										children: passage.difficulty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 h-5 w-px bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "px-3 text-muted-foreground/70",
										children: [words, " words"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 h-5 w-px bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: togglePause,
										"aria-label": paused ? "resume" : "pause",
										className: "rounded px-4 py-1 text-muted-foreground transition-colors hover:text-primary",
										children: paused ? "resume" : "pause"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setAutoScroll((v) => !v),
										"aria-label": "toggle auto scroll",
										className: `rounded px-4 py-1 transition-colors ${autoScroll ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
										children: autoScroll ? "auto scroll" : "manual scroll"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: scroller,
								style: {
									height: "6em",
									fontSize: "2rem"
								},
								className: `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto px-2 transition-[filter] duration-300 w-full ${paused ? "pointer-events-none blur-md" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "reading-prose select-none text-justify",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: passage.text.replace(/\n+/g, " ") })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-center gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPhase("idle"),
										"aria-label": "quit",
										className: "text-muted-foreground transition-colors hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: begin,
										"aria-label": "restart",
										className: "text-muted-foreground transition-colors hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-6 h-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: finishReading,
										"aria-label": "finished reading",
										className: "text-muted-foreground transition-colors hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-9 h-9" })
									})
								]
							})
						]
					}),
					phase === "quiz" && q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "fade-up flex flex-col items-center justify-center w-full mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 h-[4px] w-full bg-secondary overflow-hidden rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary transition-[width] duration-100 ease-linear rounded-full",
										style: { width: `${qLeft / QUESTION_SECONDS * 100}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-muted-foreground text-center",
									children: [
										qIndex + 1,
										" / ",
										passage.questions.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 font-mono text-xl md:text-2xl leading-snug text-center",
									children: q.q
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 space-y-3",
									children: qOrder.map((optIdx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => submit(optIdx),
										className: "w-full rounded-xl border border-border bg-card px-4 py-3 text-center font-mono text-[0.95rem] transition-colors hover:border-primary hover:bg-secondary",
										children: q.options[optIdx]
									}, optIdx))
								})
							]
						})
					}, qIndex),
					phase === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-[180px_1fr] items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "wpm",
										value: invalid ? "—" : String(wpm),
										accent: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "retention",
										value: invalid ? "—" : `${retention}%`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "raw",
										value: invalid ? "—" : String(rawWpm),
										small: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[0.7rem] leading-relaxed text-muted-foreground",
										children: [
											words,
											" words · ",
											elapsed.toFixed(1),
											"s",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											correct,
											"/",
											passage.questions.length,
											" correct"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-end h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end justify-around px-4 border-b border-border pb-2 h-64",
									children: Object.keys(metrics).map((m) => {
										const pct = metrics[m];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex h-full flex-col items-center justify-end group",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-mono text-[0.7rem] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 mb-2",
													children: [pct, "%"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-12 bg-primary transition-all duration-1000 ease-out sm:w-16 rounded-t-sm",
													style: { height: `${Math.max(8, pct)}%` }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-3 text-center font-mono text-[0.65rem] lowercase tracking-wider text-muted-foreground w-16 sm:w-auto",
													children: m
												})
											]
										}, m);
									})
								}), flags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 font-mono text-xs text-destructive text-center",
									children: [
										flags.includes("left-page") && "run voided — you left the page. ",
										flags.includes("too-fast") && `run voided — above ${MAX_HUMAN_WPM} wpm is skimming. `,
										flags.includes("timeout") && !invalid && "a question timed out."
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: begin,
								"aria-label": "next passage",
								className: "text-muted-foreground transition-colors hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-9 h-9" })
							})
						})]
					}),
					phase === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "fade-up flex flex-col items-center justify-center w-full max-w-3xl mx-auto -mt-10",
						children: loadingProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full flex flex-col items-center animate-pulse",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-24 rounded-full bg-muted/50 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 bg-muted/50 rounded mb-12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full",
									children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-24 bg-muted/50 rounded mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-16 bg-muted/50 rounded" })]
									}, i))
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full flex justify-center mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPhase("idle"),
										className: "absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
										title: "Go Back",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-6 h-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: session?.user.user_metadata.avatar_url,
										className: "w-24 h-24 rounded-full"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-4xl text-foreground mb-12",
									children: session?.user.user_metadata.full_name || "user"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-sm text-muted-foreground lowercase",
											children: "tests taken"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-5xl mt-2",
											children: profileStats?.total || 0
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-sm text-muted-foreground lowercase",
											children: "avg wpm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-5xl text-primary mt-2",
											children: profileStats?.wpm || 0
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-sm text-muted-foreground lowercase",
											children: "avg retention"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-mono text-5xl mt-2",
											children: [profileStats?.retention || 0, "%"]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-sm text-muted-foreground lowercase",
											children: "global rank"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-5xl text-primary mt-2",
											children: profileStats?.rank ? `#${profileStats.rank}` : "—"
										})] })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-12 mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: async () => {
									await supabase.auth.signOut();
									setPhase("idle");
								},
								className: "text-muted-foreground transition-colors hover:text-destructive",
								title: "Sign Out",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-6 h-6" })
							})
						})] })
					}),
					phase === "leaderboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "fade-up flex flex-col items-center justify-center w-full max-w-2xl mx-auto -mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full flex justify-center mb-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPhase("idle"),
								className: "absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
								title: "Go Back",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-6 h-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-mono text-2xl lowercase tracking-widest text-foreground m-0",
								children: "leaderboard"
							})]
						}), loadingLeaderboard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full bg-card/50 rounded-lg border border-border overflow-hidden animate-pulse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 bg-muted/50 border-b border-border/50" }), [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-12 border-b border-border/50 flex items-center px-6 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 bg-muted/30 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-32 bg-muted/30 rounded" })]
							}, i))]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full bg-card/50 rounded-lg border border-border overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left font-mono text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted/50 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-6 font-normal w-16 text-center",
											children: "#"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-6 font-normal",
											children: "name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-6 font-normal text-right",
											children: "wpm"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 px-6 font-normal text-right",
											children: "acc"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: leaderboard.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 4,
									className: "py-8 text-center text-muted-foreground",
									children: "no data yet"
								}) }) : leaderboard.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border/50 hover:bg-muted/30 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-6 text-center text-muted-foreground",
											children: i + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-6 font-semibold",
											children: row.user_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-6 text-right text-primary text-lg",
											children: row.wpm
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-6 text-right",
											children: [row.retention, "%"]
										})
									]
								}, i)) })]
							})
						}) })]
					})
				]
			})
		]
	}) });
}
function Stat({ label, value, accent, small }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `font-mono tabular-nums ${small ? "text-3xl" : "text-5xl sm:text-6xl"}`,
		style: accent ? { color: "var(--primary)" } : void 0,
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground lowercase",
		children: label
	})] });
}
//#endregion
export { Index as component };
