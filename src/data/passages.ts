export type Metric = "reading" | "comprehension" | "understanding" | "memorization";

export type Question = {
  q: string;
  options: string[];
  answer: number;
  metric?: Metric;
};

export type Difficulty = "easy" | "hard" | "elite";

export type Passage = {
  id: string;
  difficulty: Difficulty;
  title: string;
  text: string;
  questions: Question[];
};

export const passages: Passage[] = [
  {
    id: "easy-1",
    difficulty: "easy",
    title: "The Blue Sky",
    text: `Have you ever looked up and wondered why the sky is blue? The answer has to do with how sunlight interacts with the air around our planet. Sunlight looks white, but it is actually made up of all the colors of the rainbow. When sunlight reaches Earth, it hits gases and particles in the air. 

These tiny particles act like tiny mirrors. They scatter the light in all directions. Light travels in waves. Some waves are long, and some are short. Blue light travels as very short waves. Because the blue waves are so short, they hit the particles in the air and scatter much more than the red or yellow waves. 

Our eyes are also very sensitive to blue light. When we look up, we see all that scattered blue light coming from every part of the sky. This scattering effect was first explained in 1859 by a scientist named John Tyndall. He used a tank of water and some milk to show how light scatters. 

At sunset, the sun is lower in the sky. The light has to travel through a lot more air to reach our eyes. By the time the light gets to us, most of the blue light has been scattered away. That leaves the red, orange, and yellow light to color the evening sky.`,
    questions: [
      { q: "What color does sunlight appear to be before it hits the air?", options: ["Blue", "Yellow", "White", "Clear"], answer: 2, metric: "reading" },
      { q: "Why does blue light scatter more than other colors?", options: ["It travels in short waves.", "It travels in long waves.", "It is heavier than red light.", "Our eyes pull it in."], answer: 0, metric: "comprehension" },
      { q: "In what year did John Tyndall first explain this scattering effect?", options: ["1850", "1859", "1895", "1905"], answer: 1, metric: "memorization" },
      { q: "What materials did Tyndall use to show how light scatters?", options: ["Glass and mirrors", "Water and milk", "Dust and air", "Prisms and sunlight"], answer: 1, metric: "reading" },
      { q: "Based on the text, why do sunsets appear red and orange?", options: ["The sun gets hotter at night.", "Red light scatters more than blue light.", "The blue light has already been scattered away.", "The earth blocks the blue light."], answer: 2, metric: "understanding" }
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
      { q: "What does the bee use to suck up the nectar?", options: ["Its front legs", "A long tongue", "Its wings", "A small straw"], answer: 1, metric: "reading" },
      { q: "How many flowers might a bee visit on one trip?", options: ["10 to 20", "50 to 100", "100 to 200", "500 to 1000"], answer: 1, metric: "memorization" },
      { q: "Why does the worker bee chew the nectar?", options: ["To eat it for energy", "To mix in special enzymes", "To make it smell better", "To warm it up"], answer: 1, metric: "comprehension" },
      { q: "What causes the watery honey to become thick and sticky?", options: ["The sun heating the hive", "The wax lid sealing it", "Bees fanning their wings over it", "Enzymes soaking up the water"], answer: 2, metric: "understanding" },
      { q: "Where do the bees put the honey after chewing it?", options: ["On the flowers", "In hexagonal wax cells", "Outside the hive", "In their honey stomachs"], answer: 1, metric: "reading" }
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
      { q: "How was sleep historically conceptualized?", options: ["As a highly active process", "As a monolithic state of passive rest", "As an emotional consolidation phase", "As a cycle of REM and non-REM"], answer: 1, metric: "reading" },
      { q: "What is the typical frequency range of delta waves during N3 sleep?", options: ["0.5 to 2.0 Hertz", "2.0 to 4.5 Hertz", "10 to 12 Hertz", "0.1 to 0.5 Hertz"], answer: 0, metric: "memorization" },
      { q: "What does the synaptic homeostasis hypothesis propose?", options: ["Sleep strengthens all waking memories.", "Sleep physically repairs bone and muscle.", "Sleep downscales waking synaptic connections.", "Sleep increases physiological noise."], answer: 2, metric: "comprehension" },
      { q: "According to the passage, how do N3 and REM sleep differ in their primary restorative functions?", options: ["N3 consolidates memories, while REM restores the immune system.", "N3 is for physical restoration, while REM focuses on memory consolidation.", "N3 involves rapid eye movement, while REM involves delta waves.", "Both serve identical physical restorative purposes."], answer: 1, metric: "understanding" },
      { q: "When does REM sleep typically dominate the sleep cycle?", options: ["During the early night", "During the latter half of the night", "Equally throughout the night", "Only during daytime naps"], answer: 1, metric: "reading" }
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
      { q: "What does Moore's Law predict?", options: ["Chip costs double every two years.", "Transistor counts double every two years.", "Quantum tunneling stops below 3nm.", "Heat generation halves every two years."], answer: 1, metric: "memorization" },
      { q: "What physical problem occurs when silicon barriers become only a few atoms thick?", options: ["Electrons stop moving entirely.", "EUV machines fail to etch them.", "Electrons pass through the barrier spontaneously.", "The silicon shatters under heat."], answer: 2, metric: "reading" },
      { q: "Why did engineers transition to three-dimensional architectures like FinFETs?", options: ["To reduce the cost of manufacturing", "To increase the size of the microchips", "To provide better electrostatic control and suppress leakage", "To accelerate quantum tunneling"], answer: 2, metric: "comprehension" },
      { q: "What is the approximate cost of a single Extreme Ultraviolet (EUV) lithography machine?", options: ["15 million dollars", "50 million dollars", "150 million dollars", "1.5 billion dollars"], answer: 2, metric: "memorization" },
      { q: "Based on the text, what is a direct consequence of the skyrocketing manufacturing costs?", options: ["Moore's Law is accelerating.", "The industry is consolidating to a handful of foundries.", "Silicon is being replaced by other materials.", "Quantum tunneling is being entirely eliminated."], answer: 1, metric: "understanding" }
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
      { q: "What did logical positivists argue regarding declarative statements?", options: ["They must be inherently metaphysical.", "They must be reducible to sensory experience.", "They are entirely meaningless emotive expressions.", "They exist solely as analytic truths."], answer: 1, metric: "reading" },
      { q: "In what year did Quine publish 'Two Dogmas of Empiricism'?", options: ["1920", "1951", "1965", "1972"], answer: 1, metric: "memorization" },
      { q: "How does Quine characterize the analytic-synthetic distinction?", options: ["As a rigid and necessary boundary", "As hopelessly porous", "As the foundation of logical positivism", "As purely linguistic"], answer: 1, metric: "reading" },
      { q: "What is a primary implication of Quine's 'web of belief' model?", options: ["Metaphysical postulates are strictly meaningless.", "Observation serves as a neutral arbiter of truth.", "Experiential anomalies reverberate through the entire conceptual apparatus.", "Analytic truths are entirely immune to revision."], answer: 2, metric: "comprehension" },
      { q: "Why does the text claim that radical empiricism requires a 'metaphysical leap of faith'?", options: ["Because it relies on the unprovable assumption that reality matches human sensory limits.", "Because it necessitates a belief in an objective deity.", "Because it rejects all forms of sensory data.", "Because Quine proved that empiricism is factually incorrect."], answer: 0, metric: "understanding" }
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
      { q: "Who fundamentally initiated the synthesis of information theory and statistical mechanics?", options: ["James Clerk Maxwell", "Charles Bennett", "Rolf Landauer", "Ludwig Boltzmann"], answer: 2, metric: "reading" },
      { q: "In what year was Landauer's principle introduced?", options: ["1861", "1961", "1985", "1992"], answer: 1, metric: "memorization" },
      { q: "What does Landauer's principle assert regarding the erasure of one bit of information?", options: ["It requires zero physical energy.", "It generates a minimum energy dissipation of kT ln 2.", "It reverses the thermodynamic arrow of time.", "It violates the Second Law of Thermodynamics."], answer: 1, metric: "reading" },
      { q: "According to Bennett, why does Maxwell's demon fail to violate the Second Law of Thermodynamics?", options: ["The demon's door requires too much friction to operate.", "The act of measuring the molecules generates massive heat.", "The demon must eventually erase stored information, generating entropy.", "Fast molecules spontaneously return to their original chamber."], answer: 2, metric: "comprehension" },
      { q: "What is the broader ontological implication discussed in the final paragraph?", options: ["Information is purely an abstract mathematical construct.", "Thermodynamics only applies to macroscopic systems, not data.", "Information is a physical entity bound by thermodynamics.", "The universe has infinite memory capacity."], answer: 2, metric: "understanding" }
    ]
  }
];
