import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-Dt2le7VG2.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-D7i0gRIz.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var requestCount = 0;
var windowStart = Date.now();
var generatePassage_createServerFn_handler = createServerRpc({
	id: "002e360b6fa05e5e1b036289b579bdd3e5e70802214f33ddeee65ba452c396e9",
	name: "generatePassage",
	filename: "src/lib/generate.ts"
}, (opts) => generatePassage.__executeServer(opts));
var generatePassage = createServerFn({ method: "POST" }).validator(objectType({ difficulty: enumType([
	"easy",
	"hard",
	"elite",
	"random"
]) })).handler(generatePassage_createServerFn_handler, async ({ data: { difficulty } }) => {
	if (Date.now() - windowStart > 36e5) {
		requestCount = 0;
		windowStart = Date.now();
	}
	if (requestCount >= 100) throw new Error("RATE_LIMIT_EXCEEDED");
	requestCount++;
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey) throw new Error("GROQ_API_KEY not found");
	let styleInstruction = "Generate a standard 300 word passage.";
	if (difficulty === "easy") styleInstruction = "Write an easy-to-follow 300 word passage with simple vocabulary. DO NOT use any em-dashes (—). Keep sentences short and extremely clear.";
	else if (difficulty === "hard") styleInstruction = "Write a challenging 300 word passage with advanced vocabulary and complex sentence structures.";
	else if (difficulty === "elite") styleInstruction = "Write a highly dense, abstract, and elite-level 300 word passage, similar to a high-level academic paper or complex philosophical text.";
	const systemPrompt = `You are an expert reading comprehension test generator. ${styleInstruction} The topic should be random and fascinating.
Then, create exactly 5 multiple choice questions. 
Assign each question to one of these four metrics:
1. "reading": specific details mentioned in the text.
2. "comprehension": main ideas or inferences.
3. "understanding": deeper logic or reasoning behind events.
4. "memorization": recalling specific facts or numbers.

Output MUST be strictly in the following JSON format (do not wrap in markdown blocks):
{
  "title": "A short title for the passage",
  "text": "The passage text goes here...",
  "questions": [
    {
      "q": "The question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": 0,
      "metric": "reading"
    }
  ]
}`;
	const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "llama-3.1-8b-instant",
			messages: [{
				role: "system",
				content: systemPrompt
			}],
			temperature: .7,
			response_format: { type: "json_object" }
		})
	});
	if (!res.ok) {
		const err = await res.text();
		console.error("Groq API Error:", err);
		throw new Error("Failed to generate passage");
	}
	const content = (await res.json()).choices[0].message.content;
	const parsed = JSON.parse(content);
	return {
		id: Math.random().toString(36).substring(7),
		topic,
		title: parsed.title,
		text: parsed.text,
		questions: parsed.questions
	};
});
//#endregion
export { generatePassage_createServerFn_handler };
