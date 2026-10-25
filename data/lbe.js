/* File: data/lbe.js
 * Bank Materi Lengkap Subtes: Literasi Bahasa Inggris (LBE) - 10 Modul Lengkap
 * Disertai Bank 200+ Kosakata Akademik Populer UTBK-SNBT (UTBK_VOCAB)
 */
(function () {
  'use strict';

  window.UTBK_MODULES = window.UTBK_MODULES || [];
  window.UTBK_VOCAB = window.UTBK_VOCAB || [];

  const LBE_MODULES = [
    {
      id: 'lbe-01',
      subtest: 'LBE',
      day: 1,
      title: "Main Idea, Topic, and Author's Primary Purpose",
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menemukan ide pokok teks bahasa Inggris dalam 20 detik menggunakan teknik skimming kalimat pertama.',
      summary: 'Main idea questions ask for the central message or the umbrella thought of an academic passage. In English academic prose, the main idea is predominantly located in the topic sentence of the first paragraph or the concluding synthesis.',
      coreConcept: 'Distinguish between Topic, Main Idea, and Primary Purpose: (1) TOPIC is a noun phrase answering "What is the passage about?" (e.g., "The ecological impact of synthetic pesticides"). (2) MAIN IDEA is a complete sentence stating the author’s primary argument about that topic (e.g., "Synthetic pesticides severely threaten soil biodiversity despite boosting short-term agricultural yields"). (3) PRIMARY PURPOSE is the action verb goal answering "Why did the author write this?" (e.g., "To highlight the ecological hazards of pesticide overuse").',
      formulaBox: '1. Fast Skimming Formula:\n   - Read Paragraph 1: Sentence 1 & Sentence 2 (The Hook & Thesis Statement).\n   - Read the First Sentence of each subsequent paragraph (Body Topic Sentences).\n   - Read the Last Sentence of the final paragraph (The Concluding Takeaway).\n\n2. Primary Purpose Verb Patterns:\n   - To explain / illustrate : Neutral expository (Factual science)\n   - To argue / persuade    : Thesis with author opinion\n   - To evaluate / critique : Weighing pros and cons of an issue\n   - To compare and contrast: Juxtaposing two concepts',
      trapRadar: 'Jebakan Utama: (1) Opsi yang TOO NARROW (terlalu sempit: hanya menyebutkan detail dari paragraf kedua saja). (2) Opsi yang TOO BROAD (terlalu luas: mencakup konsep semesta yang tidak dibahas di teks). Pilih opsi yang mencakup seluruh paragraf secara proporsional!',
      steps: [
        'Read the first 1-2 sentences of paragraph 1 to catch the overarching subject and thesis.',
        'Skim the opening sentence of each paragraph to map the progression of ideas.',
        'Eliminate options that are too specific (mere supporting examples) or too broad.'
      ],
      guidedExample: {
        problem: 'Passage: "(1) Deep-sea hydrothermal vents, discovered in the late 1970s, completely revolutionized our biological understanding of life on Earth. (2) Unlike terrestrial ecosystems that depend directly on solar photosynthesis, vent communities thrive in total darkness through chemosynthesis, where specialized bacteria convert toxic hydrogen sulfide into vital organic matter. (3) This astounding discovery not only altered evolutionary biology but also expanded the search for extraterrestrial life on icy moons like Europa." What is the main idea of the passage?',
        identify: 'Paragraph opening: Discovery of hydrothermal vents revolutionized biological understanding through chemosynthesis without sunlight.',
        process: 'Sentence 1 sets the thesis (revolutionizing biology). Sentence 2 explains how (chemosynthesis vs photosynthesis). Sentence 3 states the broader implication (evolution and extraterrestrial life).',
        answer: 'The discovery of deep-sea hydrothermal vents transformed biological science by proving that complex ecosystems can thrive without sunlight via chemosynthesis.'
      },
      drills: [
        {
          q: 'What is the primary purpose of a passage that outlines the discovery of CRISPR gene editing, details its clinical trial successes in treating sickle cell anemia, and discusses the ongoing ethical dilemmas surrounding human germline modification?',
          options: [
            'To criticize scientists for editing human genetic material.',
            'To provide a comprehensive overview of CRISPR technology, its medical applications, and its ethical considerations.',
            'To explain the biochemical structure of human chromosomes.',
            'To persuade governments to ban all genetic engineering research.',
            'To compare CRISPR with traditional herbal medicines.'
          ],
          ans: 1,
          explanation: 'Option B accurately captures all three core components discussed: the technology overview, clinical medical successes, and ethical considerations.'
        },
        {
          q: 'Which of the following phrases indicates a main idea option that is TOO SPECIFIC (a distractor)?',
          options: [
            'The emergence of renewable microgrids in rural electrification.',
            'How a 5% tax deduction was granted to solar farmers in Bavaria in 2022.',
            'Advancements in battery chemistry and grid resilience.',
            'Economic and ecological benefits of decentralized power systems.',
            'Challenges facing modern renewable energy transitions.'
          ],
          ans: 1,
          explanation: 'Option B mentions a single specific year, country, and small percentage detail, which is typical of a supporting detail, not a main idea.'
        },
        {
          q: 'The author\'s tone in an academic article that uses phrases such as "empirical evidence unequivocally demonstrates", "rigorous longitudinal data", and "controlled trials" is best described as...',
          options: ['Biased and emotional', 'Objective and scientific', 'Sarcastic and mocking', 'Nostalgic and poetic', 'Dismissive and cynical'],
          ans: 1,
          explanation: 'The vocabulary relies strictly on empirical scientific methodology, reflecting an objective and scholarly tone.'
        }
      ],
      flashcards: [
        { front: 'What is the difference between Topic and Main Idea?', back: 'Topic is a noun phrase (subject); Main Idea is a complete sentence (thesis).' },
        { front: 'Where is the main idea usually located in academic passages?', back: 'In the first paragraph (thesis statement) and reinforced in the conclusion.' },
        { front: 'What makes an option "Too Narrow"?', back: 'It only summarizes a single supporting paragraph or specific example.' },
        { front: 'What makes an option "Too Broad"?', back: 'It covers a generalized global field far beyond the passage scope.' },
        { front: 'What does "Primary Purpose" ask?', back: 'The author\'s rhetorical objective (to explain, argue, evaluate, or compare).' }
      ],
      commonMistakes: [
        'Choosing an option that is factually true according to the text, but only describes one single paragraph.',
        'Reading the entire passage slowly word-for-word before checking the question.'
      ]
    },
    {
      id: 'lbe-02',
      subtest: 'LBE',
      day: 1,
      title: 'Stated Details & Negative/Except Factual Questions',
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menemukan detail tersurat menggunakan scanning kata kunci dan mengeliminasi soal NOT/EXCEPT.',
      summary: 'Stated detail questions test your ability to locate factual information explicitly stated in the text. Negative factual questions ("All of the following are true EXCEPT...") require identifying the one statement that is either contradictory or unmentioned.',
      coreConcept: '1) Key Word Scanning: Identify the unique anchor words in the question stem (proper names, dates, scientific terms) that cannot easily be paraphrased. Scan the text rapidly for these anchors. 2) True Paraphrase Matching: The correct answer rarely copies the exact words from the text; it almost always uses SYNONYMS or an inverted grammatical structure. 3) EXCEPT Questions: Treat negative questions as a checklist. Three options are directly supported by the passage; find the ONE option that contradicts the text or has no textual support.',
      formulaBox: '1. Scanning Strategy:\n   - Question: "According to paragraph 2, why did the species migrate?"\n   - Anchor Keyword: "migrate" / "migration" in Paragraph 2.\n   - Read 1 sentence before and 1 sentence after the anchor keyword.\n\n2. EXCEPT Questions Technique:\n   - 3 Options = Supported by text (Mark as True)\n   - 1 Option   = Contradicted or NOT mentioned (Select as the answer!)',
      trapRadar: 'Jebakan Utama: Kata-kata pembalikan makna seperti "seldom", "scarcely", "unprecedented", atau prefiks negatif ("in-", "un-", "dis-"). Opsi pengecoh sering menghapus kata negasi sehingga artinya berbanding terbalik 180 derajat!',
      steps: [
        'Circle the anchor keyword in the question stem.',
        'Scan directly to the paragraph referenced and locate the keyword.',
        'Read the surrounding context and match with the paraphrased option.'
      ],
      guidedExample: {
        problem: 'Passage: "Mangrove forests serve as critical natural buffers. Their dense prop root systems attenuate storm surges, trap sediment runoff from land, and provide nursery grounds for 75% of commercial tropical fish species. However, over the past three decades, shrimp aquaculture expansion and coastal real estate development have decimated more than a third of global mangrove habitats." According to the passage, all of the following are benefits of mangrove forests EXCEPT...\n(A) Reducing the impact of storm surges\n(B) Trapping coastal sediment runoff\n(C) Serving as nursery grounds for fish\n(D) Accelerating commercial shrimp aquaculture',
        identify: 'Question type: EXCEPT. Topic: Benefits of mangrove forests.',
        process: 'Options (A), (B), and (C) are directly listed as benefits. Shrimp aquaculture is mentioned as a destructive threat that decimates mangroves, NOT a benefit of mangroves.',
        answer: '(D) Accelerating commercial shrimp aquaculture (it is a cause of destruction, not a benefit).'
      },
      drills: [
        {
          q: 'Passage: "Tardigrades, microscopic animals often called water bears, can survive extreme desiccation by entering a state of cryptobiosis, during which their metabolic activity drops to less than 0.01% of normal." According to the passage, how do tardigrades survive severe dehydration?',
          options: [
            'By consuming large quantities of saline water.',
            'By entering cryptobiosis and drastically reducing metabolic rates.',
            'By increasing their body temperature to eliminate parasites.',
            'By migrating to warmer subterranean caves.',
            'By growing protective thick fur.'
          ],
          ans: 1,
          explanation: 'The text explicitly states they enter cryptobiosis during which their metabolic activity drops to less than 0.01%.'
        },
        {
          q: 'In negative factual questions (EXCEPT / NOT TRUE), an option that states "Scientists have conclusively proven the origin of the universe" is likely the answer if the passage stated...',
          options: [
            '"The origin of the universe remains one of the most contentious and elusive mysteries in modern cosmology."',
            '"Cosmologists have developed models of universal expansion."',
            '"Telescopic observations continue to shed light on cosmic history."',
            '"The Big Bang theory is widely accepted by astrophysicists."',
            '"Subatomic particle colliders simulate early cosmic conditions."'
          ],
          ans: 0,
          explanation: 'If the text says the origin is an "elusive mystery", the claim that scientists have "conclusively proven" it directly contradicts the passage.'
        },
        {
          q: 'Which technique is most effective for scanning factual detail questions?',
          options: [
            'Rereading the entire passage from paragraph 1 slowly.',
            'Locking onto non-paraphrasable anchors such as capital letters, numerals, and technical jargon.',
            'Choosing the longest option automatically.',
            'Translating each English word to Indonesian literally.',
            'Ignoring the question stem.'
          ],
          ans: 1,
          explanation: 'Scanning for non-paraphrasable capital letters, numbers, and technical terms leads directly to the relevant line in under 10 seconds.'
        }
      ],
      flashcards: [
        { front: 'What is a "stated detail" question?', back: 'A question asking for facts directly and explicitly mentioned in the text.' },
        { front: 'How are correct stated detail answers formulated?', back: 'Through paraphrasing with synonyms and altered sentence structures.' },
        { front: 'How should you approach an EXCEPT question?', back: 'Verify three true statements against the text; choose the one false or unmentioned statement.' },
        { front: 'What are non-paraphrasable anchor words?', back: 'Dates, numbers, proper nouns, capitalized terminology.' },
        { front: 'What does "attenuate" mean in context of storm surges?', back: 'To reduce the force, intensity, or magnitude of something.' }
      ],
      commonMistakes: [
        'Choosing the first familiar option without noticing the word EXCEPT in the question stem.',
        'Selecting an option that repeats exact words from the text but alters the logical relationship.'
      ]
    },
    {
      id: 'lbe-03',
      subtest: 'LBE',
      day: 2,
      title: 'Inference & Logical Implication in Academic Texts',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Menarik kesimpulan tersirat yang sah tanpa melangkah terlalu jauh dari data teks.',
      summary: 'Inference questions test your ability to understand unstated implications based strictly on facts provided. A valid academic inference is logically inescapable from the text’s premises.',
      coreConcept: 'The "Must Be True" Rule: A valid inference in reading comprehension is NOT an imaginative prediction. It is a conclusion that MUST BE TRUE if the text’s sentences are true. Clues for valid inference: If a passage says "Species A is found exclusively in high-salinity estuaries, and Lake B is a purely freshwater reservoir", you can definitively infer that "Species A does not inhabit Lake B naturally". Watch out for extreme quantifier distractors (always, impossible, solely, universal) unless explicitly supported by the author.',
      formulaBox: '1. Inescapable Deduction Formula:\n   Premise 1 (Text): Condition X requires Factor Y.\n   Premise 2 (Text): Case Z completely lacks Factor Y.\n   ===> Valid Inference: Case Z cannot fulfill Condition X.\n\n2. Question Stems:\n   - "It can be inferred from paragraph 3 that..."\n   - "The passage implies that..."\n   - "Which of the following would the author most likely agree with?"',
      trapRadar: 'Jebakan Utama: Opsi yang menyajikan "Common Knowledge Extrapolation" (pengetahuan umum yang terdengar logis di kehidupan nyata tetapi TIDAK DAPAT DIBUKTIKAN oleh kalimat dalam teks). Ingat: jika tidak ada premisnya di teks, opsi itu SALAH!',
      steps: [
        'Locate the specific sentences related to the inference prompt.',
        'Combine the premises together logically (deductive reasoning).',
        'Reject any option that introduces outside variables or makes absolute leaps.'
      ],
      guidedExample: {
        problem: 'Passage: "Permafrost, ground that remains completely frozen for at least two consecutive years, covers nearly a quarter of the Northern Hemisphere. Trapped within this frozen soil is an estimated 1,500 billion tons of ancient carbon—almost double the amount currently present in Earth\'s atmosphere. As global temperatures increase, thawing permafrost releases large volumes of methane and carbon dioxide." What can be inferred about the thawing of permafrost?',
        identify: 'Premises: Permafrost traps 1,500 billion tons of carbon (double the atmosphere). Thawing releases methane and CO2 as temperatures rise.',
        process: 'Rising temperatures thaw permafrost -> releases greenhouse gases -> further traps heat -> increases global temperatures. This creates an amplifying feedback loop.',
        answer: 'Thawing permafrost creates an accelerating self-reinforcing climate feedback loop that exacerbates global warming.'
      },
      drills: [
        {
          q: 'Passage: "Unlike classical computers which encode information into binary bits that must be either 0 or 1, quantum computers utilize qubits that can exist in superposition, representing both 0 and 1 simultaneously. Consequently, quantum processors can evaluate vast computational permutations concurrently." It can be inferred that classical computers...',
          options: [
            'Process computational permutations sequentially rather than concurrently.',
            'Are superior to quantum computers in encryption breaking.',
            'Do not use electrical currents for data storage.',
            'Will be completely abandoned by technology firms next year.',
            'Require cryogenic cooling systems to operate.'
          ],
          ans: 0,
          explanation: 'If quantum computers can evaluate permutations concurrently because of superposition unlike classical computers, classical computers must process them sequentially.'
        },
        {
          q: 'Passage: "The enzyme catalase is indispensable for aerobic organisms because it rapidly converts toxic hydrogen peroxide, an unavoidable byproduct of cellular respiration, into harmless water and oxygen." The passage implies that an organism lacking catalase would most likely...',
          options: [
            'Thrive in oxygen-rich subterranean habitats.',
            'Suffer cellular damage from accumulating hydrogen peroxide if exposed to aerobic respiration.',
            'Produce excess oxygen molecules in cellular mitochondria.',
            'Become completely immune to bacterial infections.',
            'Have higher metabolic efficiency than aerobic organisms.'
          ],
          ans: 1,
          explanation: 'Because hydrogen peroxide is toxic and an unavoidable byproduct of aerobic respiration, lacking the enzyme to break it down would lead to toxic cellular accumulation.'
        },
        {
          q: 'Which word in an inference answer choice is most frequently a sign of an incorrect extreme distractor?',
          options: ['tends to', 'invariably', 'frequently', 'suggests', 'partially'],
          ans: 1,
          explanation: '"Invariably" means always without exception (100% absolute), which is rarely justified in nuanced academic reading.'
        }
      ],
      flashcards: [
        { front: 'What is the "Must Be True" rule for inferences?', back: 'An inference is valid only if it logically must be true based directly on text premises.' },
        { front: 'What makes an inference distractor incorrect?', back: 'Introducing external assumptions or using unjustified absolute terms (invariably, solely).' },
        { front: 'How is an inference different from a stated detail?', back: 'A stated detail is paraphrased directly; an inference is the unwritten logical consequence.' },
        { front: 'What does "superposition" mean in quantum computing?', back: 'The ability of a qubit to represent both 0 and 1 simultaneously.' },
        { front: 'What does "indispensable" mean?', back: 'Absolutely essential; cannot be managed without.' }
      ],
      commonMistakes: [
        'Making bold real-world predictions not supported by the strict textual evidence.',
        'Selecting an option that is an exact restatement of a detail instead of an inference.'
      ]
    },
    {
      id: 'lbe-04',
      subtest: 'LBE',
      day: 2,
      title: 'Vocabulary in Context: Context Clues & Semantic Guessing',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menebak arti kosakata sulit menggunakan petunjuk kontras, definisi, dan contoh sekitar kalimat.',
      summary: 'Vocabulary-in-context questions test your ability to determine the precise meaning of a word or phrase as it is used in a specific academic passage, rather than its generic dictionary definition.',
      coreConcept: 'Four Types of Context Clues: (1) DEFINITION/RESTATEMENT: Marked by commas, dashes, or "that is", "in other words". (2) CONTRAST: Marked by "whereas", "unlike", "conversely", "on the other hand" (the target word means the opposite of the clue word). (3) EXAMPLE/ILLUSTRATION: Marked by "such as", "for instance" (the examples reveal the category). (4) CAUSE AND EFFECT: Marked by "because", "consequently", "thereby".',
      formulaBox: '1. Contrast Clue Formula:\n   X was [TARGET WORD], whereas Y was completely transparent and clear.\n   ===> TARGET WORD must mean opaque, ambiguous, or murky.\n\n2. The Replacement Technique:\n   Substitute each of the 4 options into the sentence in place of the target word.\n   Check: Does the sentence maintain grammatical flow and logical coherence?',
      trapRadar: 'Jebakan Utama: The Primary Meaning Trap! The question will often test a common word used in an uncommon, secondary academic sense (e.g., "champion" used as a verb meaning to advocate/support; "table" used as a verb meaning to postpone).',
      steps: [
        'Reread the full sentence containing the target word.',
        'Identify signal transition words (contrast, definition, or example markers).',
        'Plug in the answer choices and choose the synonym that preserves the logical tone.'
      ],
      guidedExample: {
        problem: 'Sentence: "The committee decided to CHAMPION the proposed wetland preservation bill despite fierce opposition from industrial lobbyists." In this context, the word "champion" is closest in meaning to...\n(A) defeat\n(B) advocate\n(C) compete\n(D) modify',
        identify: 'Target: "champion" as a transitive verb with the direct object "the proposed wetland preservation bill".',
        process: 'Here "champion" does not mean a winner of a sport. As a verb followed by a bill/policy, it means to actively fight for, defend, or advocate.',
        answer: '(B) advocate.'
      },
      drills: [
        {
          q: 'Sentence: "While traditional incandescent bulbs are notoriously EFFICIENT in generating heat rather than light, modern LED technology CONVERTS up to 90% of electricity directly into illumination." In this context, the word "converts" is closest in meaning to...',
          options: ['dissipates', 'transforms', 'absorbs', 'restricts', 'conceals'],
          ans: 1,
          explanation: '"Converts electricity directly into illumination" means transforms or changes one form of energy into another.'
        },
        {
          q: 'Sentence: "The archaeologist argued that the ancient civilization\'s sudden decline was not PRECIPITATED by foreign invasion, but rather by prolonged multi-decadal droughts." In this context, "precipitated" is closest in meaning to...',
          options: ['delayed', 'triggered', 'prevented', 'recorded', 'justified'],
          ans: 1,
          explanation: 'In historical/causal context, to precipitate an event means to trigger, cause, or bring it about suddenly.'
        },
        {
          q: 'Sentence: "Her findings were initially regarded as DUBIOUS by peer reviewers due to the modest sample size." The word "dubious" is closest in meaning to...',
          options: ['groundbreaking', 'questionable', 'authentic', 'celebrated', 'comprehensive'],
          ans: 1,
          explanation: '"Dubious" means hesitant, doubtful, or questionable.'
        }
      ],
      flashcards: [
        { front: 'What does "champion" mean when used as a verb?', back: 'To vigorously support, defend, or advocate for a cause/policy.' },
        { front: 'What does "precipitate" mean in causal academic prose?', back: 'To trigger or cause an event to happen prematurely or suddenly.' },
        { front: 'What does "dubious" mean?', back: 'Hesitant, doubtful, questionable, or suspicious.' },
        { front: 'How does a contrast context clue work?', back: 'Signal words (unlike, whereas) show the target word means the opposite of the known clue.' },
        { front: 'What is the "Replacement Technique"?', back: 'Substituting answer choices directly into the original sentence to test coherence.' }
      ],
      commonMistakes: [
        'Picking the most common everyday definition without checking the context of the sentence.',
        'Ignoring surrounding contrast words like "despite", "although", or "unlike".'
      ]
    },
    {
      id: 'lbe-05',
      subtest: 'LBE',
      day: 3,
      title: 'Pronoun Referents & Textual Cohesion Links',
      timeTarget: '45 dtk/soal',
      oneLiner: 'Menemukan anteseden kata ganti (it, they, this, these) secara tepat dengan uji substitusi gramatikal.',
      summary: 'Reference questions ask you to identify the specific noun or noun phrase (antecedent) that a pronoun or demonstrative (it, they, them, this, these) refers to in the preceding sentences.',
      coreConcept: '1) Number & Gender Agreement: Singular pronouns ("it", "its") refer to singular nouns or uncountable concepts. Plural pronouns ("they", "them", "their") refer to plural nouns. 2) Proximity Rule: The referent is almost always located in the SAME sentence or the IMMEDIATELY PRECEDING sentence. 3) Semantic Check: Substitute the candidate noun back into the pronoun’s position. Does the resulting sentence make factual and grammatical sense?',
      formulaBox: '1. Agreement Checklist:\n   - "It / Its"     <===> Singular Noun / Abstract Idea\n   - "They / Them"  <===> Plural Noun (People, Animals, or Things!)\n   - "This / These" <===> Demonstrative Noun Phrase\n\n2. Backwards Tracing:\n   Target Pronoun  <--- Look Back 1-2 Sentences <--- Candidate Antecedent',
      trapRadar: 'Jebakan Utama: In English, "THEY" and "THEIR" are frequently used to refer to inanimate objects and plural concepts (e.g., "The tectonic plates shift as THEY float"), not just human beings! Do not eliminate non-human nouns when searching for "they".',
      steps: [
        'Locate the pronoun in the referenced sentence.',
        'Trace backwards into the immediately preceding clause or sentence to find candidate nouns matching the number (singular/plural).',
        'Substitute the candidate nouns into the sentence to verify logical coherence.'
      ],
      guidedExample: {
        problem: 'Passage: "When solar flares collide with the Earth\'s magnetosphere, they accelerate charged particles along geomagnetic field lines toward the polar regions. As THESE enter the upper atmosphere, they collide with atmospheric gases, generating the vibrant luminous displays known as auroras." The word "THESE" refers to...\n(A) solar flares\n(B) geomagnetic field lines\n(C) charged particles\n(D) atmospheric gases',
        identify: 'Target demonstrative pronoun: "THESE" at the start of sentence 2.',
        process: 'Sentence 1 ends with: "...accelerate charged particles along geomagnetic field lines toward polar regions." Sentence 2 begins: "As THESE enter the upper atmosphere, they collide with atmospheric gases...". What enters and collides with gases? The charged particles.',
        answer: '(C) charged particles.'
      },
      drills: [
        {
          q: 'Passage: "Epigenetic mechanisms alter gene expression without modifying the underlying DNA sequence itself; in doing so, THEY allow organisms to adapt phenotypically to changing environments." The word "THEY" refers to...',
          options: [
            'Epigenetic mechanisms',
            'Gene expressions',
            'DNA sequences',
            'Environments',
            'Phenotypes'
          ],
          ans: 0,
          explanation: '"Epigenetic mechanisms" is the plural subject of the independent clause performing the action of allowing organisms to adapt.'
        },
        {
          q: 'Passage: "The city council rejected the proposed industrial zoning policy because IT failed to include mandatory air quality filtration standards." The word "IT" refers to...',
          options: [
            'The city council',
            'The proposed industrial zoning policy',
            'Air quality filtration',
            'Mandatory standards',
            'The industrial zone'
          ],
          ans: 1,
          explanation: 'What failed to include the standards? The policy (singular noun).'
        },
        {
          q: 'What is the primary grammatical constraint when solving pronoun reference questions?',
          options: [
            'Alphabetical order of words',
            'Singular vs plural agreement (number concordance) with the antecedent',
            'The length of the paragraph',
            'The font size of the text',
            'The publication date of the source'
          ],
          ans: 1,
          explanation: 'Number and grammatical category agreement between pronoun and noun antecedent is the absolute primary rule.'
        }
      ],
      flashcards: [
        { front: 'Can "they" refer to inanimate plural objects in English?', back: 'YES! "They" refers to plural people, animals, plants, or inanimate things.' },
        { front: 'How far back should you look for a pronoun referent?', back: 'Usually in the same sentence or the sentence immediately before it.' },
        { front: 'What is an antecedent?', back: 'The noun or noun phrase to which a pronoun refers.' },
        { front: 'What is the "Semantic Substitution Check"?', back: 'Replacing the pronoun with the candidate noun to test if the sentence makes sense.' },
        { front: 'What does "this phenomenon" refer to?', back: 'A process or event described in the preceding sentence.' }
      ],
      commonMistakes: [
        'Assuming "they" can only refer to people.',
        'Selecting a noun that appeared 3 paragraphs earlier.'
      ]
    },
    {
      id: 'lbe-06',
      subtest: 'LBE',
      day: 3,
      title: "Author's Tone, Attitude & Rhetorical Purpose",
      timeTarget: '60 dtk/soal',
      oneLiner: 'Menganalisis sikap penulis (optimistic, critical, cautious, detached) dari kata sifat wacana.',
      summary: 'Tone refers to the emotional or intellectual stance the author adopts toward the subject matter. Academic English tests prioritize distinguishing between detached objectivity, critical scrutiny, and cautious optimism.',
      coreConcept: 'Tone Spectrum in Academic English: (1) OBJECTIVE / IMPARTIAL: Factual reporting of data without emotional adjectives. (2) SKEPTICAL: Questioning unverified claims ("remains doubtful", "lacks robust evidence"). (3) CAUTIOUS / PRUDENT: Nuanced and non-committal ("preliminary findings indicate", "may potentially"). (4) CRITICAL / DISAPPROVING: Highlighting systemic flaws or ethical failures. (5) LAUDATORY / ADMIRING: Praising achievements.',
      formulaBox: '1. Tone Adjective Glossary:\n   - Objective / Detached / Neutral: Unbiased, scientific, purely factual.\n   - Skeptical / Incredulous        : Doubtful, questioning validity.\n   - Cautious / Tentative          : Prudent, awaiting further verification.\n   - Critical / Disapproving       : Fault-finding, highlighting dangers.\n   - Optimistic / Sanguine         : Hopeful, confident in positive outcomes.',
      trapRadar: 'Jebakan Utama: Extreme options like "furious", "hysterical", or "ecstatic". Formal academic passages almost NEVER adopt unhinged emotional extremes. Look for moderate, professional descriptors like "guarded optimism" or "scholarly skepticism".',
      steps: [
        'Pay close attention to adverbs and descriptive adjectives used in the concluding paragraph.',
        'Ask yourself: Is the author presenting both sides neutrally, or championing one side?',
        'Eliminate overly dramatic or colloquial emotional words.'
      ],
      guidedExample: {
        problem: 'Passage Excerpt: "While early laboratory results regarding the synthetic catalyst are undeniably encouraging, researchers must exercise extreme prudence. Long-term toxicity profiles in aquatic environments remain largely uncharacterized, and scaling up synthesis could introduce unforeseen ecological liabilities." The author\'s attitude toward the synthetic catalyst can best be described as...\n(A) completely hostile\n(B) cautiously optimistic\n(C) overwhelmingly enthusiastic\n(D) indifferent',
        identify: 'Author phrases: "undeniably encouraging" (positive) paired with "must exercise extreme prudence", "remain uncharacterized", "unforeseen liabilities" (cautious).',
        process: 'The author recognizes the promising benefits but strongly advises caution before deployment.',
        answer: '(B) cautiously optimistic (or prudent/measured).'
      },
      drills: [
        {
          q: 'An author who writes: "The experimental protocol was conducted under standard atmospheric pressure, with measurements recorded at five-minute intervals across twenty trials" exhibits a tone that is...',
          options: ['Biased and subjective', 'Objective and descriptive', 'Cynical and mocking', 'Passionate and rebellious', 'Melancholic and sorrowful'],
          ans: 1,
          explanation: 'The sentence strictly provides factual procedure and measurement parameters, typical of an objective and descriptive scientific tone.'
        },
        {
          q: 'If an author describes a newly announced corporate sustainability initiative as "a superficial public relations veneer that cleverly masks ongoing industrial carbon emissions", the author\'s tone is...',
          options: ['Celebratory', 'Supportive', 'Critical and skeptical', 'Sympathetic', 'Ambivalent'],
          ans: 2,
          explanation: 'Calling something a "superficial PR veneer" that "cleverly masks" emissions is intensely critical and skeptical of motives.'
        },
        {
          q: 'Which pair of words best describes an author who believes a challenge can be overcome if proper policy reforms are enacted?',
          options: ['Defeatist and bitter', 'Constructive and hopeful', 'Indifferent and aloof', 'Enraged and violent', 'Sarcastic and pessimistic'],
          ans: 1,
          explanation: '"Constructive and hopeful" captures the willingness to offer solutions with positive anticipation.'
        }
      ],
      flashcards: [
        { front: 'What does an "objective" tone sound like?', back: 'Neutral, factual, presenting evidence without emotional commentary.' },
        { front: 'What does "cautiously optimistic" mean?', back: 'Hopeful about positive outcomes while remaining mindful of risks.' },
        { front: 'What does "skeptical" mean in reading comprehension?', back: 'Doubting or questioning the validity of claims that lack proof.' },
        { front: 'Are extreme emotional tones common on UTBK English?', back: 'NO! Tone choices are almost always measured and academic.' },
        { front: 'What does "superficial" mean?', back: 'Existing only on the surface; lacking depth or genuine substance.' }
      ],
      commonMistakes: [
        'Choosing an extreme negative word like "hostile" when the author is merely being "critical".',
        'Confusing the tone of a person quoted in the text with the author\'s own overarching tone.'
      ]
    },
    {
      id: 'lbe-07',
      subtest: 'LBE',
      day: 4,
      title: 'Text Organization & Structural Transitions Between Paragraphs',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Memetakan alur retorika: problem-solution, cause-effect, atau chronological narrative.',
      summary: 'Text organization questions ask how the passage as a whole is structured or how a specific paragraph relates functionally to the one before it.',
      coreConcept: 'Common Structural Patterns: (1) PROBLEM - SOLUTION: Para 1 introduces a crisis; Para 2 explains an engineering or policy remedy. (2) HYPOTHESIS - EXPERIMENTAL VERIFICATION: Para 1 states a theory; Para 2 describes empirical tests. (3) PHENOMENON - MECHANISM - IMPLICATIONS: Para 1 introduces an event; Para 2 explains how it works physically; Para 3 discusses future consequences. (4) CHRONOLOGICAL / EVOLUTIONARY: Tracing historical progression across eras.',
      formulaBox: '1. Common Organizational Descriptors:\n   - "A problem is outlined, followed by a proposed technological remedy."\n   - "A widespread belief is introduced and subsequently refuted with new evidence."\n   - "Two competing hypotheses are presented and contrasted."\n   - "A general concept is defined and elaborated through specific case studies."',
      trapRadar: 'Jebakan Utama: Opsi yang terbalik urutan kronologisnya (misal: "A solution is tested, then the problem is defined"). Pastikan alur dari Paragraf 1 ke Paragraf 2 cocok secara urutan!',
      steps: [
        'Identify the functional job of Paragraph 1 (defining, stating a problem, or introducing a concept).',
        'Identify the functional job of Paragraph 2 (giving examples, testing, or countering).',
        'Match the sequence with the organizational phrasing in the choices.'
      ],
      guidedExample: {
        problem: 'Passage Outline: Paragraph 1 explains the alarming global decline of honeybee colonies known as Colony Collapse Disorder. Paragraph 2 presents recent entomological research linking the disorder to sub-lethal exposure to neonicotinoid pesticides and varroa mite infestations. How is the passage organized?',
        identify: 'P1: Alarming decline of honeybees (a biological problem/phenomenon). P2: Research explaining pesticide and mite causes (causal explanation/mechanism).',
        process: 'The passage moves from presenting an environmental phenomenon to analyzing its scientific causes.',
        answer: 'A biological problem is introduced in the first paragraph, and its underlying causes are analyzed in the second paragraph.'
      },
      drills: [
        {
          q: 'How does paragraph 2 relate to paragraph 1 if paragraph 1 discusses the theoretical advantages of hyperloop transportation and paragraph 2 details the immense civil engineering and vacuum sealing hurdles that have delayed its commercial rollout?',
          options: [
            'Paragraph 2 provides mathematical proof supporting paragraph 1.',
            'Paragraph 2 outlines practical challenges that complicate the theoretical concept presented in paragraph 1.',
            'Paragraph 2 repeats the exact definitions of paragraph 1.',
            'Paragraph 2 explains the historical origin of hyperloop concepts in the 19th century.',
            'Paragraph 2 argues that hyperloop is already fully operational worldwide.'
          ],
          ans: 1,
          explanation: 'Moving from theoretical advantages to practical engineering hurdles is a classic "theory vs real-world practical challenges" relationship.'
        },
        {
          q: 'A passage structured as: Paragraph 1 (Definition of geothermal energy), Paragraph 2 (Dry steam plants), Paragraph 3 (Flash steam plants), Paragraph 4 (Binary cycle plants) is organized by...',
          options: [
            'Chronological biography of inventors',
            'General concept followed by classification of distinct operational types',
            'Cause and effect of tectonic earthquakes',
            'Debate between fossil fuels and nuclear power',
            'Problem and economic failure'
          ],
          ans: 1,
          explanation: 'The text defines the broad concept first, then classifies it into three specific technical types.'
        },
        {
          q: 'Which transition word at the start of a paragraph indicates an upcoming concession or counterargument?',
          options: ['Furthermore', 'Consequently', 'Granted that', 'Similarly', 'In conclusion'],
          ans: 2,
          explanation: '"Granted that" introduces a concession before maintaining a counter-position.'
        }
      ],
      flashcards: [
        { front: 'What are the most common text structures in academic reading?', back: 'Problem-Solution, Cause-Effect, Hypothesis-Experiment, Classification.' },
        { front: 'How do you determine the relationship between two paragraphs?', back: 'Analyze the main function of Paragraph 1 and compare it with the opening transition of Paragraph 2.' },
        { front: 'What does "refute a theory" mean in an organizational choice?', back: 'To prove that an established theory or claim is incorrect using counter-evidence.' },
        { front: 'What does "elaborate" mean?', back: 'To add details, examples, or deeper explanations to a basic statement.' },
        { front: 'What does "juxtapose" mean?', back: 'To place two concepts side by side to compare and contrast them.' }
      ],
      commonMistakes: [
        'Focusing on specific sentences rather than the macro-function of the entire paragraph.',
        'Selecting an organizational flow with inverted chronological order.'
      ]
    },
    {
      id: 'lbe-08',
      subtest: 'LBE',
      day: 4,
      title: 'Sentence Simplification & Academic Paraphrasing Skills',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Memilih satu kalimat ringkas yang memuat seluruh esensi klausa tanpa mengubah makna asli.',
      summary: 'Sentence simplification questions ask you to identify which answer choice expresses the essential information of a complex sentence, leaving out unessential details without altering the logical core.',
      coreConcept: 'Rules of Valid Simplification: (1) Core Clause Preservation: Identify the Subject - Main Verb - Object of the independent clause. (2) Cause-and-Effect Relationship: If the original sentence asserts causation ("Because X, therefore Y"), the correct paraphrase MUST maintain that causation. (3) No Distortion or Omission of Key Nuances: Eliminate choices that contradict the original, introduce unmentioned facts, or leave out critical conditional clauses.',
      formulaBox: '1. Deconstruction Method:\n   - Strip away non-essential parenthetical clauses and excessive adjectives.\n   - Identify [Who/What] did [What Core Action] to [Whom/What Result].\n   - Check connectors: Although / Because / Despite.\n\n2. Distractor Traps:\n   - The False Cause (Inverts cause and effect)\n   - The Missing Condition (Leaves out "provided that...")\n   - The Contradiction (States the opposite of the main clause)',
      trapRadar: 'Jebakan Utama: An option that looks very elegant and uses advanced academic vocabulary, but subtle changes invert the relationship (e.g., claiming that technology caused economic growth, when the original sentence stated economic growth enabled the technology)!',
      steps: [
        'Break down the complex sentence into its core independent clause and modifying dependent clauses.',
        'Note key logical relationships (contrast, concession, cause, result).',
        'Eliminate options that alter the core relationship or drop vital conditions.'
      ],
      guidedExample: {
        problem: 'Original Sentence: "Although critics initially dismissed the urban vertical farming project as an economically unfeasible novelty, the incorporation of energy-efficient LED arrays and automated hydroponics drastically slashed operational overhead, allowing the venture to achieve sustained profitability within its third year." Which choice best expresses the essential information?\n(A) Critics prevented vertical farming from becoming profitable until its third year.\n(B) Vertical farming remained an economically unfeasible novelty despite modern LED arrays.\n(C) Although initially doubted by critics, the vertical farming project became profitable by year three due to automated hydroponics and energy-efficient LEDs.\n(D) Automated hydroponics were too expensive to slash operational costs.',
        identify: 'Core elements: Critics doubted project (concession) -> LEDs and automation reduced costs (cause) -> achieved profitability by year 3 (main result).',
        process: 'Option (C) faithfully retains the concession (doubted by critics), the technological cause (LEDs and automation), and the final result (profitability by year 3).',
        answer: 'Option (C).'
      },
      drills: [
        {
          q: 'Original Sentence: "Despite exhibiting remarkable linguistic prowess in laboratory tests involving lexigram keyboards, bonobos do not possess the vocal tract anatomy required to articulate spoken human phonemes." Which option best simplifies the sentence?',
          options: [
            'Bonobos cannot use lexigram keyboards because their vocal tracts are underdeveloped.',
            'Although bonobos demonstrate impressive symbolic language skills on keyboards, their anatomical structure prevents them from producing human speech sounds.',
            'Bonobos prefer spoken human phonemes over symbolic lexigram keyboards.',
            'Human phonemes are too simple for the advanced linguistic abilities of bonobos.',
            'Bonobos have developed vocal tracts that allow them to speak human languages fluently.'
          ],
          ans: 1,
          explanation: 'Option B accurately preserves the contrast: impressive symbolic language on keyboards versus anatomical inability to produce spoken human phonemes.'
        },
        {
          q: 'Which error is most common in incorrect sentence simplification options?',
          options: [
            'Using correct grammar.',
            'Inverting the cause-and-effect relationship between clauses.',
            'Retaining the main subject of the sentence.',
            'Including synonyms of academic terms.',
            'Writing in concise academic English.'
          ],
          ans: 1,
          explanation: 'Distractors frequently swap causes for effects (e.g., "A caused B" becomes "B caused A").'
        },
        {
          q: 'Original Sentence: "Unless nations implement rigorous carbon pricing mechanisms immediately, planetary warming will inevitably surpass the 1.5 degree Celsius threshold." The essential meaning is...',
          options: [
            'Planetary warming will stay below 1.5 degrees Celsius regardless of carbon pricing.',
            'The 1.5 degree Celsius warming limit will only be avoided if urgent carbon pricing mechanisms are established by nations.',
            'Immediate carbon pricing mechanisms will have no impact on planetary warming.',
            'Nations have already implemented adequate carbon pricing systems.',
            'Warming above 1.5 degrees Celsius is completely impossible.'
          ],
          ans: 1,
          explanation: '"Unless X happens, Y will occur" is equivalent to "Y will only be prevented if X happens".'
        }
      ],
      flashcards: [
        { front: 'What is the primary objective of sentence simplification?', back: 'Selecting the most accurate, concise paraphrase containing the essential core ideas.' },
        { front: 'What does "Unless X, Y" mean logically?', back: 'If X does not happen, Y will happen (X is necessary to prevent Y).' },
        { front: 'What is a "concession clause"?', back: 'A clause introduced by "although", "despite", or "even though" acknowledging an opposing fact.' },
        { front: 'Why are causal connectors critical in paraphrasing?', back: 'Because inverting cause and effect invalidates the meaning completely.' },
        { front: 'What does "unfeasible" mean?', back: 'Not practical or impossible to achieve successfully.' }
      ],
      commonMistakes: [
        'Choosing an option that leaves out the main conclusion of the independent clause.',
        'Selecting a sentence that states the opposite of the original concession clause.'
      ]
    },
    {
      id: 'lbe-09',
      subtest: 'LBE',
      day: 5,
      title: 'Comparative Analysis of Dual Texts (Passage 1 vs Passage 2)',
      timeTarget: '90 dtk/soal',
      oneLiner: 'Menemukan titik konsensus dan titik friksi perdebatan antara Penulis 1 dan Penulis 2.',
      summary: 'Dual passage sets present two distinct perspectives on a shared scientific, economic, or philosophical debate. Questions test finding points of agreement, disagreement, and cross-passage rhetorical evaluation.',
      coreConcept: '1) Synthesis Mapping: While reading, mentally register: What is the core topic? What does Author 1 believe? What does Author 2 believe? Where do their claims overlap (Agreement)? Where do they clash (Disagreement)? 2) Cross-Passage Perspective Questions: "How would the author of Passage 2 respond to the claim in Passage 1?" Look at Author 2’s core philosophy: if Author 1 promotes uninhibited technology adoption while Author 2 demands strict precaution, Author 2 would critique Author 1 for negligence.',
      formulaBox: '1. Dual Passage Reading Framework:\n   - Shared Topic: What is the central subject of both passages?\n   - Author 1 Stance: Pro / Tech-optimist / Pure Theory\n   - Author 2 Stance: Con / Cautious / Empirical Skeptic\n\n2. Common Question Types:\n   - Common Ground: "Both authors agree that..."\n   - Point of Contention: "The authors disagree on..."\n   - Cross-Critique: "Author 2 would most likely view Author 1\'s proposal as..."',
      trapRadar: 'Jebakan Utama: An agreement option that is explicitly supported in Passage 1, but completely unaddressed in Passage 2! A true point of agreement MUST be confirmed by sentences in BOTH passages.',
      steps: [
        'Read Passage 1 and summarize its thesis in one sentence.',
        'Read Passage 2 and identify whether it supports, qualifies, or attacks Passage 1.',
        'For consensus questions, verify that the fact is explicitly validated in both texts.'
      ],
      guidedExample: {
        problem: 'Passage 1 argues that asteroid mining will provide humanity with virtually limitless supplies of platinum-group metals, solving terrestrial resource depletion. Passage 2 notes that while asteroid resources are abundant, the astronomical capital costs and extreme technical hazards of deep-space extraction make commercial viability unlikely for the next century. Both authors agree that...\n(A) Asteroids contain substantial mineral resources.\n(B) Asteroid mining will become profitable within ten years.\n(C) Terrestrial mining should be banned immediately.\n(D) Space hazards are easily manageable with current technology.',
        identify: 'Passage 1: Limitless metals from asteroids. Passage 2: Asteroid resources are abundant, but extraction costs are immense.',
        process: 'Both authors explicitly acknowledge that asteroids possess immense mineral resources (Passage 1: limitless supplies; Passage 2: resources are abundant).',
        answer: '(A) Asteroids contain substantial mineral resources.'
      },
      drills: [
        {
          q: 'Passage 1 advocates for replacing human judges with predictive AI sentencing algorithms to eliminate racial and socioeconomic sentencing disparities. Passage 2 warns that AI models trained on historical judicial data will simply perpetuate and automate existing societal prejudices under a facade of mathematical neutrality. The author of Passage 2 would most likely characterize Passage 1\'s proposal as...',
          options: [
            'An unfeasible plan that ignores the risk of algorithmic bias propagation.',
            'A proven strategy that has already eliminated judicial prejudice globally.',
            'A malicious scheme designed to deliberately harm minority defendants.',
            'A technologically outdated approach that relies on obsolete hardware.',
            'An identical argument to traditional legal philosophy.'
          ],
          ans: 0,
          explanation: 'Author 2 argues that AI will perpetuate historical bias under a facade of neutrality, viewing Author 1\'s optimistic faith in AI neutrality as unfeasible and blind to algorithmic bias.'
        },
        {
          q: 'When a dual passage question asks what BOTH authors would agree with, which choice should you eliminate first?',
          options: [
            'A choice that represents a neutral shared premise mentioned in both texts.',
            'A choice that reflects an argument made only by the author of Passage 1.',
            'A choice that paraphrases the main topic.',
            'A choice supported by paragraph 1 of Passage 1 and paragraph 2 of Passage 2.',
            'A choice with moderate academic vocabulary.'
          ],
          ans: 1,
          explanation: 'An option that only reflects Author 1 cannot be a point of consensus between both authors.'
        },
        {
          q: 'In a dual passage set about lab-grown cultured meat: Passage 1 celebrates its zero-slaughter ethical benefits, while Passage 2 highlights the massive electricity consumption of industrial bioreactors. The core debate between the two authors centers on...',
          options: [
            'Whether animals possess conscious feelings.',
            'The balance between animal welfare ethics and industrial energy consumption in cultured meat production.',
            'The retail price of vegetable salads in supermarkets.',
            'The exact culinary recipe for marinating beef steaks.',
            'Whether consumers prefer chicken or fish.'
          ],
          ans: 1,
          explanation: 'The texts clash on the trade-off between the ethical benefit of no animal slaughter versus the high energetic footprint of bioreactors.'
        }
      ],
      flashcards: [
        { front: 'What is a "point of consensus" in dual passages?', back: 'A factual claim or premise that BOTH authors explicitly acknowledge as true.' },
        { front: 'What is a "point of contention"?', back: 'An issue where the two authors hold opposing or conflicting views.' },
        { front: 'How do you answer a cross-passage perspective question?', back: 'Evaluate Author 1\'s argument through the specific philosophical lens of Author 2.' },
        { front: 'Berapa target waktu per soal komparasi dual passages?', back: 'Maksimal 90 detik per soal.' },
        { front: 'What does "perpetuate" mean?', back: 'To cause something (often an undesirable situation or belief) to continue indefinitely.' }
      ],
      commonMistakes: [
        'Selecting an agreement choice that is only found in one passage.',
        'Assuming Author 2 disagrees on everything (authors often share common basic premises).'
      ]
    },
    {
      id: 'lbe-10',
      subtest: 'LBE',
      day: 5,
      title: 'Academic Synthesis, Cohesive Devices & Logic Connectors',
      timeTarget: '65 dtk/soal',
      oneLiner: 'Memilih konjungsi transisi bahasa Inggris (however, moreover, consequently, whereas) secara tepat.',
      summary: 'Academic synthesis tests your mastery of transitional cohesive devices that glue academic paragraphs together: causal connectors, adversative transitions, and additive elaboration markers.',
      coreConcept: 'Mastering Transition Categories: (1) ADVERSATIVE / CONTRAST: However, Nevertheless, Conversely, On the contrary, In contrast, Nonethless. (2) CAUSAL / RESULT: Consequently, Therefore, Hence, Thus, Accordingly, As a result. (3) ADDITIVE / ELABORATIVE: Furthermore, Moreover, In addition, Additionally. (4) CONCESSION: Although, Even though, Despite, In spite of.',
      formulaBox: '1. Punctuation Rules for Transition Adverbs:\n   - Independent clause; HOWEVER, independent clause.\n   - Sentence 1. CONVERTELY, sentence 2.\n\n2. Transition Categories:\n   - Contrast : However, nevertheless, whereas\n   - Consequence: Therefore, consequently, hence\n   - Addition : Furthermore, moreover, additionally\n   - Exemplification: For instance, to illustrate',
      trapRadar: 'Jebakan Utama: Confusing "DESPITE" with "ALTHOUGH". Despite is a preposition followed by a NOUN PHRASE or GERUND ("Despite the heavy rain..."). Although is a subordinating conjunction followed by a FULL CLAUSE with subject and verb ("Although it rained heavily...")!',
      steps: [
        'Analyze the logical relationship between the first sentence and the second sentence.',
        'Is the second sentence an example, an unexpected contrast, a direct consequence, or an additional point?',
        'Select the transition word that precisely encodes that rhetorical relationship.'
      ],
      guidedExample: {
        problem: 'Choose the appropriate connector: "The experimental solar panels demonstrated an unprecedented 32% photoelectric conversion efficiency in temperature-controlled laboratory testing. [...], their efficiency deteriorated sharply when exposed to the fluctuating humidity and dust of real-world desert conditions."\n(A) Consequently\n(B) Furthermore\n(C) However\n(D) Therefore',
        identify: 'Sentence 1: High efficiency (32%) in lab. Sentence 2: Sharp deterioration in real-world desert conditions.',
        process: 'Sentence 2 presents an unexpected contrast/setback to the success of Sentence 1. The appropriate connector must be adversative (contrast).',
        answer: '(C) However (or Nevertheless).'
      },
      drills: [
        {
          q: 'Fill in the blank: "The pharmaceutical compound successfully inhibited tumor proliferation in pre-clinical mouse trials; [...], Phase 1 human safety trials were officially approved by the regulatory commission."',
          options: ['on the other hand', 'consequently', 'nonetheless', 'conversely', 'whereas'],
          ans: 1,
          explanation: 'The approval of human safety trials was the logical direct result (consequence) of the pre-clinical success.'
        },
        {
          q: 'Grammar Rule: Which sentence correctly uses the preposition "DESPITE"?',
          options: [
            'Despite the blizzard raged for hours, the aircraft landed safely.',
            'Despite the severe blizzard, the aircraft landed safely.',
            'Despite of the blizzard, the aircraft landed safely.',
            'Despite that the blizzard was severe, the aircraft landed safely.',
            'The aircraft landed safely despite was a blizzard.'
          ],
          ans: 1,
          explanation: '"Despite" must be followed directly by a noun phrase ("the severe blizzard") without "of" or a standalone verb.'
        },
        {
          q: 'Choose the transition that indicates additive elaboration: "The novel polymer is extremely lightweight and shatter-resistant. [...], it is synthesized entirely from renewable agricultural waste."',
          options: ['Nevertheless', 'Moreover', 'In contrast', 'Therefore', 'Instead'],
          ans: 1,
          explanation: '"Moreover" adds a complementary positive attribute to the polymer described in sentence 1.'
        }
      ],
      flashcards: [
        { front: 'What is the grammatical difference between "Although" and "Despite"?', back: '"Although" is followed by a full clause (S+V); "Despite" is followed by a noun phrase or gerund (-ing).' },
        { front: 'What category of connector is "Consequently"?', back: 'Causal / Result (indicates an effect or direct consequence).' },
        { front: 'What category of connector is "Furthermore"?', back: 'Additive / Elaboration (adds an additional supportive point).' },
        { front: 'What category of connector is "Conversely"?', back: 'Contrast (indicates an opposite or inverted scenario).' },
        { front: 'Is "Despite of" grammatically correct in English?', back: 'NO! It is either "In spite of" OR "Despite" (never "despite of").' }
      ],
      commonMistakes: [
        'Using "despite of" (confusing "in spite of" with "despite").',
        'Using a result transition (therefore) where a contrast transition (however) is required.'
      ]
    }
  ];

  /* ==========================================================================
     BANK 200+ KOSAKATA AKADEMIK POPULER UTBK-SNBT (UTBK_VOCAB)
     Lengkap: Kata, Kelas Kata, Arti Bahasa Indonesia, Contoh Kalimat Kontekstual & Kategori.
     ========================================================================== */
  const VOCAB_LIST = [
    // --- Kategori 1: Academic Inquiry & Research (1 - 35) ---
    { word: 'Aberration', pos: 'noun', meaning: 'Penyimpangan dari yang normal / anomali', example: 'The unusual temperature spike was considered a climate aberration.', cat: 'Research' },
    { word: 'Abstract', pos: 'adj/noun', meaning: 'Abstrak / ringkasan karya ilmiah', example: 'The researcher wrote a concise abstract outlining her methodology.', cat: 'Research' },
    { word: 'Accurate', pos: 'adj', meaning: 'Tepat / akurat dan bebas kesalahan', example: 'Satellite sensors provide accurate measurements of deforestation.', cat: 'Research' },
    { word: 'Acknowledge', pos: 'verb', meaning: 'Mengakui kebenaran atau kontribusi', example: 'Scientists acknowledge the limitations of current quantum models.', cat: 'Research' },
    { word: 'Acquire', pos: 'verb', meaning: 'Memperoleh / mendapatkan keahlian atau data', example: 'Children acquire phonetic awareness through guided reading.', cat: 'Research' },
    { word: 'Aggregate', pos: 'adj/noun', meaning: 'Gabungan / agregat total', example: 'The aggregate score determines university admission eligibility.', cat: 'Research' },
    { word: 'Allocate', pos: 'verb', meaning: 'Mengalokasikan sumber daya atau dana', example: 'The government allocated substantial funds to renewable research.', cat: 'Research' },
    { word: 'Ambiguous', pos: 'adj', meaning: 'Bermakna ganda / ambigu / tidak jelas', example: 'The survey question was ambiguous, leading to conflicting data.', cat: 'Research' },
    { word: 'Analogous', pos: 'adj', meaning: 'Serupa / memiliki kesamaan prinsip', example: 'The human brain is analogous to a parallel computing network.', cat: 'Research' },
    { word: 'Analyze', pos: 'verb', meaning: 'Menganalisis / membedah komponen', example: 'Economists analyze quarterly spending patterns to forecast inflation.', cat: 'Research' },
    { word: 'Anomaly', pos: 'noun', meaning: 'Keanehan / keganjilan / penyimpangan', example: 'Geneticists identified an anomaly in the chromosome structure.', cat: 'Research' },
    { word: 'Apparent', pos: 'adj', meaning: 'Tampak nyata / terlihat jelas', example: 'It became apparent that the initial hypothesis was invalid.', cat: 'Research' },
    { word: 'Arbitrary', pos: 'adj', meaning: 'Semena-mena / acak tanpa alasan logis', example: 'The committee made an arbitrary cutoff without empirical basis.', cat: 'Research' },
    { word: 'Articulate', pos: 'verb/adj', meaning: 'Mengartikulasikan dengan jelas / fasih', example: 'The professor articulated the complex thermodynamic principles eloquently.', cat: 'Research' },
    { word: 'Ascertain', pos: 'verb', meaning: 'Memastikan kebenaran fakta melalui investigasi', example: 'Forensic audits ascertain whether funds were embezzled.', cat: 'Research' },
    { word: 'Ascribe', pos: 'verb', meaning: 'Menisbatkan / menganggap berasal dari', example: 'Historians ascribe the architectural triumph to Persian artisans.', cat: 'Research' },
    { word: 'Assess', pos: 'verb', meaning: 'Menilai / menakar kualitas atau bobot', example: 'Standardized tests assess quantitative reasoning skills.', cat: 'Research' },
    { word: 'Attribute', pos: 'verb/noun', meaning: 'Mengaitkan penyebab / karakteristik sifat', example: 'Doctors attribute cardiovascular illness to sedentary lifestyles.', cat: 'Research' },
    { word: 'Authentic', pos: 'adj', meaning: 'Asli / autentik dan dapat dipercaya', example: 'Carbon dating verified the scroll as authentic 4th-century parchment.', cat: 'Research' },
    { word: 'Benchmark', pos: 'noun', meaning: 'Tolok ukur / standar pembanding', example: 'The silicon chip set a new benchmark for processing speed.', cat: 'Research' },
    { word: 'Categorize', pos: 'verb', meaning: 'Mengelompokkan ke dalam kategori', example: 'Botanists categorize plants based on reproductive morphology.', cat: 'Research' },
    { word: 'Chronological', pos: 'adj', meaning: 'Kronologis / berurutan menurut waktu', example: 'The historian arranged the archives in strict chronological order.', cat: 'Research' },
    { word: 'Cite', pos: 'verb', meaning: 'Mengutip sumber pustaka rujukan', example: 'You must cite peer-reviewed papers to support your assertion.', cat: 'Research' },
    { word: 'Clarify', pos: 'verb', meaning: 'Memperjelas / menjernihkan keraguan', example: 'The author added a footnote to clarify the ambiguous equation.', cat: 'Research' },
    { word: 'Coherent', pos: 'adj', meaning: 'Runtut / koheren dan logis saling bertalian', example: 'A good essay presents a coherent thesis supported by evidence.', cat: 'Research' },
    { word: 'Coincide', pos: 'verb', meaning: 'Terjadi bersamaan waktu / bertepatan', example: 'The volcanic eruption coincided with an oceanic earthquake.', cat: 'Research' },
    { word: 'Collaborate', pos: 'verb', meaning: 'Bekerja sama lintas disiplin', example: 'Biologists and physicists collaborated on the laser microscope.', cat: 'Research' },
    { word: 'Compile', pos: 'verb', meaning: 'Menyusun / mengumpulkan data dari berbagai sumber', example: 'The agency compiled meteorological statistics spanning a century.', cat: 'Research' },
    { word: 'Comprehensive', pos: 'adj', meaning: 'Menyeluruh / komprehensif mencakup semua hal', example: 'The report provides a comprehensive review of global marine biodiversity.', cat: 'Research' },
    { word: 'Conclusive', pos: 'adj', meaning: 'Pasti / meyakinkan dan tidak terbantahkan', example: 'The DNA test yielded conclusive proof of biological lineage.', cat: 'Research' },
    { word: 'Conduct', pos: 'verb', meaning: 'Melaksanakan / menjalankan eksperimen', example: 'The team conducted randomized double-blind clinical trials.', cat: 'Research' },
    { word: 'Confirm', pos: 'verb', meaning: 'Mengonfirmasi / memastikan keabsahan', example: 'Subsequent experiments confirmed the presence of liquid water.', cat: 'Research' },
    { word: 'Conform', pos: 'verb', meaning: 'Mematuhi / menyesuaikan diri dengan aturan baku', example: 'All clinical trials must conform to international bioethics guidelines.', cat: 'Research' },
    { word: 'Consent', pos: 'noun/verb', meaning: 'Persetujuan sukarela / izin resmi', example: 'Patients must provide informed consent before clinical procedures.', cat: 'Research' },
    { word: 'Consistent', pos: 'adj', meaning: 'Konsisten / ajek tanpa kontradiksi', example: 'Her experimental results were consistent with quantum predictions.', cat: 'Research' },

    // --- Kategori 2: Cause, Effect & Scientific Mechanisms (36 - 70) ---
    { word: 'Accelerate', pos: 'verb', meaning: 'Mempercepat laju / akselerasi', example: 'Global warming accelerates polar ice sheet melting.', cat: 'Mechanism' },
    { word: 'Accumulate', pos: 'verb', meaning: 'Menimbun / menumpuk seiring waktu', example: 'Heavy metals accumulate in predatory marine fish tissues.', cat: 'Mechanism' },
    { word: 'Adhere', pos: 'verb', meaning: 'Menempel erat / mematuhi prinsip', example: 'The synthetic adhesive adheres firmly to titanium surfaces.', cat: 'Mechanism' },
    { word: 'Alter', pos: 'verb', meaning: 'Mengubah / memodifikasi sifat', example: 'Genetic mutations alter the enzymatic active site structure.', cat: 'Mechanism' },
    { word: 'Attenuate', pos: 'verb', meaning: 'Meredam / memperlemah intensitas', example: 'Mangrove roots attenuate destructive storm wave energy.', cat: 'Mechanism' },
    { word: 'Catalyze', pos: 'verb', meaning: 'Mempercepat reaksi / memicu transformasi', example: 'Enzymes catalyze biochemical metabolic pathways.', cat: 'Mechanism' },
    { word: 'Cease', pos: 'verb', meaning: 'Berhenti / menghentikan operasi', example: 'Cellular respiration ceases when oxygen is completely depleted.', cat: 'Mechanism' },
    { word: 'Circulate', pos: 'verb', meaning: 'Beredar / mengalir dalam siklus', example: 'Ocean currents circulate thermal energy around the globe.', cat: 'Mechanism' },
    { word: 'Coagulate', pos: 'verb', meaning: 'Membeku / mengental dari cair ke padat', example: 'Platelets release thrombin to coagulate blood at wound sites.', cat: 'Mechanism' },
    { word: 'Combine', pos: 'verb', meaning: 'Menggabungkan beberapa unsur', example: 'Hydrogen and oxygen combine chemically to form water.', cat: 'Mechanism' },
    { word: 'Compensate', pos: 'verb', meaning: 'Mengimbangi / memberi ganti rugi', example: 'The human eye dilates to compensate for dim ambient light.', cat: 'Mechanism' },
    { word: 'Compound', pos: 'verb/noun', meaning: 'Memperparah masalah / senyawa kimia', example: 'Rising sea levels compound coastal flooding during monsoons.', cat: 'Mechanism' },
    { word: 'Compress', pos: 'verb', meaning: 'Memadatkan / memampatkan volume', example: 'Piston cylinders compress the fuel-air mixture before ignition.', cat: 'Mechanism' },
    { word: 'Concentrate', pos: 'verb', meaning: 'Memekatkan larutan / memusatkan fokus', example: 'Solar collectors concentrate sunlight onto central thermal towers.', cat: 'Mechanism' },
    { word: 'Conduce', pos: 'verb', meaning: 'Membawa kepada / kondusif menuju', example: 'Regular exercise conduces to enhanced psychological resilience.', cat: 'Mechanism' },
    { word: 'Constrain', pos: 'verb', meaning: 'Membatasi / mengekang ruang gerak', example: 'Thermal limits constrain rocket propulsion nozzle longevity.', cat: 'Mechanism' },
    { word: 'Consume', pos: 'verb', meaning: 'Mengonsumsi / menyerap energi', example: 'Electrolyzers consume electrical currents to split water molecules.', cat: 'Mechanism' },
    { word: 'Contaminate', pos: 'verb', meaning: 'Mencemari / mengontaminasi zat murni', example: 'Industrial runoff contaminated the freshwater aquifer.', cat: 'Mechanism' },
    { word: 'Convert', pos: 'verb', meaning: 'Mengubah bentuk / mengonversi energi', example: 'Photovoltaic cells convert photons directly into direct current.', cat: 'Mechanism' },
    { word: 'Corrode', pos: 'verb', meaning: 'Mengikis / menimbulkan karat secara kimia', example: 'Acid rain corrodes limestone monuments over decades.', cat: 'Mechanism' },
    { word: 'Decelerate', pos: 'verb', meaning: 'Memperlambat kecepatan gerak', example: 'Friction between tires and tarmac decelerates the landing aircraft.', cat: 'Mechanism' },
    { word: 'Decompose', pos: 'verb', meaning: 'Mengurai / membusuk secara biologis', example: 'Fungi decompose dead organic timber into mineral humus.', cat: 'Mechanism' },
    { word: 'Deflect', pos: 'verb', meaning: 'Membelokkan arah lintasan', example: 'The Earth’s magnetic field deflects lethal cosmic radiation.', cat: 'Mechanism' },
    { word: 'Degenerate', pos: 'verb', meaning: 'Mengalami kemunduran fungsi / memburuk', example: 'Nerve synapses degenerate in advanced neurodegenerative disorders.', cat: 'Mechanism' },
    { word: 'Deplete', pos: 'verb', meaning: 'Menguras habis persediaan', example: 'Overfishing depletes commercial marine stocks beyond recovery.', cat: 'Mechanism' },
    { word: 'Derive', pos: 'verb', meaning: 'Berasal dari / menurunkan rumus', example: 'Many pharmaceuticals derive from active compounds in tropical flora.', cat: 'Mechanism' },
    { word: 'Deteriorate', pos: 'verb', meaning: 'Memburuk kondisinya secara bertahap', example: 'Air quality deteriorated as vehicle exhaust emissions surged.', cat: 'Mechanism' },
    { word: 'Diffuse', pos: 'verb', meaning: 'Menyebar / berdifusi merata ke segala arah', example: 'Carbon dioxide molecules diffuse across alveolar membranes.', cat: 'Mechanism' },
    { word: 'Dilute', pos: 'verb', meaning: 'Mengencerkan larutan pekat', example: 'Technicians dilute corrosive acids by pouring them into distilled water.', cat: 'Mechanism' },
    { word: 'Disperse', pos: 'verb', meaning: 'Menyebarkan / mencerai-beraikan', example: 'Wind currents disperse dandelion seeds across open meadows.', cat: 'Mechanism' },
    { word: 'Dissipate', pos: 'verb', meaning: 'Menghilangkan / menyebarkan energi menjadi panas', example: 'Automobile brake rotors dissipate kinetic energy as friction heat.', cat: 'Mechanism' },
    { word: 'Distort', pos: 'verb', meaning: 'Memelintir bentuk / mendistorsi sinyal', example: 'Atmospheric turbulence distorts ground-based optical astronomy images.', cat: 'Mechanism' },
    { word: 'Divert', pos: 'verb', meaning: 'Mengalihkan aliran atau rute', example: 'Engineers diverted river water into irrigation canals.', cat: 'Mechanism' },
    { word: 'Drain', pos: 'verb', meaning: 'Menguras cairan sampai kering', example: 'Pumps drained floodwater from subterranean subway stations.', cat: 'Mechanism' },
    { word: 'Elicit', pos: 'verb', meaning: 'Memancing respons atau data keluar', example: 'Neuroscientists elicit neural impulses using targeted microelectrodes.', cat: 'Mechanism' },

    // --- Kategori 3: Argumentation & Rhetorical Analysis (71 - 105) ---
    { word: 'Advocate', pos: 'verb/noun', meaning: 'Membela / mengadvokasi gagasan', example: 'Public health scholars advocate mandatory nutrition labeling.', cat: 'Argument' },
    { word: 'Affirm', pos: 'verb', meaning: 'Menegaskan kebenaran pernyataan', example: 'The supreme court affirmed the constitutional validity of the treaty.', cat: 'Argument' },
    { word: 'Assert', pos: 'verb', meaning: 'Menyatakan dengan tegas tanpa ragu', example: 'The author asserts that economic inequality stifles innovation.', cat: 'Argument' },
    { word: 'Challenge', pos: 'verb', meaning: 'Menentang / mempertanyakan kesahihan', example: 'New archaeological digs challenge classical migration timelines.', cat: 'Argument' },
    { word: 'Champion', pos: 'verb', meaning: 'Memperjuangkan / mendukung gigih', example: 'The senator championed universal healthcare reform.', cat: 'Argument' },
    { word: 'Claim', pos: 'verb/noun', meaning: 'Mengklaim / pernyataan klaim argumen', example: 'The marketing campaign claims the dietary supplement reverses aging.', cat: 'Argument' },
    { word: 'Concede', pos: 'verb', meaning: 'Mengakui kebenaran sanggahan lawan', example: 'The debater conceded that renewable grids require fossil backups.', cat: 'Argument' },
    { word: 'Contend', pos: 'verb', meaning: 'Berpendapat teguh / bersaing argumen', example: 'Anthropologists contend that cooperative hunting shaped human evolution.', cat: 'Argument' },
    { word: 'Contradict', pos: 'verb', meaning: 'Menentang / bertolak belakang dengan', example: 'New experimental data contradict the century-old assumption.', cat: 'Argument' },
    { word: 'Counter', pos: 'verb', meaning: 'Menyanggah / membalas argumen lawan', example: 'The economist countered the tariff proposal with comparative trade data.', cat: 'Argument' },
    { word: 'Critique', pos: 'verb/noun', meaning: 'Mengkritik secara akademis mendalam', example: 'The editorial critiques fiscal austerity policies during recessions.', cat: 'Argument' },
    { word: 'Defend', pos: 'verb', meaning: 'Mempertahankan tesis dari sanggahan', example: 'The doctoral candidate defended her dissertation against the panel.', cat: 'Argument' },
    { word: 'Demur', pos: 'verb', meaning: 'Menyatakan keberatan / ragu-ragu setuju', example: 'Bioethicists demurred at cloning primates for cosmetic research.', cat: 'Argument' },
    { word: 'Denounce', pos: 'verb', meaning: 'Mengecam keras perbuatan salah', example: 'Diplomats denounced the deployment of banned chemical weapons.', cat: 'Argument' },
    { word: 'Depict', pos: 'verb', meaning: 'Menggambarkan / melukiskan watak', example: 'The novelist depicts rural poverty with raw, unfiltered realism.', cat: 'Argument' },
    { word: 'Deride', pos: 'verb', meaning: 'Mencemooh / mengolok-olok ide', example: 'Critics derided the supersonic car concept as an impractical gimmick.', cat: 'Argument' },
    { word: 'Dismiss', pos: 'verb', meaning: 'Menolak mentah-mentah tanpa mengkaji', example: 'The editor dismissed the conspiracy theory for lack of empirical citations.', cat: 'Argument' },
    { word: 'Disparage', pos: 'verb', meaning: 'Meremehkan / memandang rendah martabat', example: 'Snobbish critics disparaged indigenous oral folk traditions.', cat: 'Argument' },
    { word: 'Dispute', pos: 'verb', meaning: 'Memperdebatkan kebenaran klaim', example: 'Territorial historians dispute the exact demarcation of the ancient border.', cat: 'Argument' },
    { word: 'Emphasize', pos: 'verb', meaning: 'Menekankan / menggarisbawahi urgensi', example: 'The guidelines emphasize handwashing as primary infection control.', cat: 'Argument' },
    { word: 'Endorse', pos: 'verb', meaning: 'Mendukung resmi / merekomendasikan', example: 'The medical association endorsed the pediatric vaccination schedule.', cat: 'Argument' },
    { word: 'Equivocate', pos: 'verb', meaning: 'Berbicara berbelit-belit untuk mengelak', example: 'Politicians often equivocate when questioned on tax hikes.', cat: 'Argument' },
    { word: 'Evince', pos: 'verb', meaning: 'Menunjukkan bukti tanda nyata', example: 'The patient’s speech patterns evince significant neurological recovery.', cat: 'Argument' },
    { word: 'Exaggerate', pos: 'verb', meaning: 'Membesar-besarkan secara berlebihan', example: 'Advertisers exaggerate product durability to attract buyers.', cat: 'Argument' },
    { word: 'Exemplify', pos: 'verb', meaning: 'Memberi contoh teladan nyata', example: 'Her philanthropic foundation exemplifies corporate social responsibility.', cat: 'Argument' },
    { word: 'Exonerate', pos: 'verb', meaning: 'Membebaskan dari segala tuduhan salah', example: 'New DNA analysis exonerated the wrongfully imprisoned convict.', cat: 'Argument' },
    { word: 'Expose', pos: 'verb', meaning: 'Membongkar kepalsuan / menelanjangi', example: 'Investigative reporters exposed fraudulent clinical trial trials.', cat: 'Argument' },
    { word: 'Extol', pos: 'verb', meaning: 'Memuji setinggi langit', example: 'The keynote speaker extolled the virtues of open-source software.', cat: 'Argument' },
    { word: 'Foresee', pos: 'verb', meaning: 'Memperkirakan apa yang akan terjadi', example: 'Few economists foresaw the subprime mortgage collapse of 2008.', cat: 'Argument' },
    { word: 'Generalize', pos: 'verb', meaning: 'Menggeneralisasi kesimpulan umum', example: 'Researchers must not generalize findings from male mice to all mammals.', cat: 'Argument' },
    { word: 'Highlight', pos: 'verb', meaning: 'Menyoroti poin penting agar diperhatikan', example: 'The executive summary highlights three critical cybersecurity flaws.', cat: 'Argument' },
    { word: 'Hypothesize', pos: 'verb', meaning: 'Mengajukan hipotesis ilmiah', example: 'Astrophysicists hypothesize dark matter constitutes 85% of cosmic mass.', cat: 'Argument' },
    { word: 'Illustrate', pos: 'verb', meaning: 'Mengilustrasikan contoh konkrit', example: 'Case studies illustrate how restorative justice reduces recidivism.', cat: 'Argument' },
    { word: 'Imply', pos: 'verb', meaning: 'Menyiratkan tanpa menyebut eksplisit', example: 'The author implies that current environmental policies are inadequate.', cat: 'Argument' },
    { word: 'Infer', pos: 'verb', meaning: 'Menyimpulkan dari bukti yang ada', example: 'From the geological strata, geologists infer ancient glacial retreats.', cat: 'Argument' },

    // --- Kategori 4: Critical Thinking, Logic & Quantitative Qualifiers (106 - 140) ---
    { word: 'Abundant', pos: 'adj', meaning: 'Melimpah ruah jumlahnya', example: 'Silicon is an abundant semiconductor element in the Earth’s crust.', cat: 'Qualifier' },
    { word: 'Adequate', pos: 'adj', meaning: 'Cukup dan memadai sesuai syarat', example: 'Clean drinking water is an adequate foundation for public hygiene.', cat: 'Qualifier' },
    { word: 'Adverse', pos: 'adj', meaning: 'Merugikan / berbahaya / berlawanan arah', example: 'Pharmaceutical packaging lists common adverse allergic side effects.', cat: 'Qualifier' },
    { word: 'Appreciable', pos: 'adj', meaning: 'Cukup besar hingga nyata terlihat', example: 'There was an appreciable decrease in inflation after the rate hike.', cat: 'Qualifier' },
    { word: 'Approximate', pos: 'adj/verb', meaning: 'Perkiraan mendekati / mengestimasi', example: 'The approximate distance to the moon is 384,400 kilometers.', cat: 'Qualifier' },
    { word: 'Authenticity', pos: 'noun', meaning: 'Keaslian / keabsahan orisinalitas', example: 'Curators verified the authenticity of the Renaissance canvas.', cat: 'Qualifier' },
    { word: 'Autonomous', pos: 'adj', meaning: 'Mandiri / berdiri sendiri secara otonom', example: 'Drones navigate autonomous flight corridors using computer vision.', cat: 'Qualifier' },
    { word: 'Binary', pos: 'adj', meaning: 'Biner / hanya berpasangan dua opsi', example: 'Digital processors store information in binary combinations of 0 and 1.', cat: 'Qualifier' },
    { word: 'Capacious', pos: 'adj', meaning: 'Berdaya tampung sangat luas / lega', example: 'The capacious cargo bay holds dozens of shipping containers.', cat: 'Qualifier' },
    { word: 'Cohesive', pos: 'adj', meaning: 'Menyatu padu / memiliki daya rekat', example: 'A cohesive community rallies together during natural emergencies.', cat: 'Qualifier' },
    { word: 'Commensurate', pos: 'adj', meaning: 'Sebanding / proporsional dengan', example: 'Salaries must be commensurate with professional experience.', cat: 'Qualifier' },
    { word: 'Concurrent', pos: 'adj', meaning: 'Berjalan bersamaan pada waktu yang sama', example: 'The bank operates concurrent data backups across three continents.', cat: 'Qualifier' },
    { word: 'Conditional', pos: 'adj', meaning: 'Bersyarat / bergantung pada kondisi tertentu', example: 'The scholarship grant is conditional upon maintaining a 3.8 GPA.', cat: 'Qualifier' },
    { word: 'Conducive', pos: 'adj', meaning: 'Kondusif / mendukung terciptanya sesuatu', example: 'Quiet libraries provide an environment conducive to deep study.', cat: 'Qualifier' },
    { word: 'Deficient', pos: 'adj', meaning: 'Kekurangan / defisit nutrisi penting', example: 'Diets deficient in vitamin C trigger scurvy symptoms.', cat: 'Qualifier' },
    { word: 'Definitive', pos: 'adj', meaning: 'Pasti / tuntas dan menjadi rujukan akhir', example: 'The encyclopedia remains the definitive guide to tropical botany.', cat: 'Qualifier' },
    { word: 'Detrimental', pos: 'adj', meaning: 'Merusak / merugikan kelestarian', example: 'Chronic sleep deprivation is detrimental to cognitive performance.', cat: 'Qualifier' },
    { word: 'Disproportionate', pos: 'adj', meaning: 'Tidak proporsional / timpang jumlahnya', example: 'Subsidies had a disproportionate benefit on corporate conglomerates.', cat: 'Qualifier' },
    { word: 'Distinct', pos: 'adj', meaning: 'Berbeda jelas / memiliki ciri khas tegas', example: 'The fossil skeleton exhibits distinct features of both birds and reptiles.', cat: 'Qualifier' },
    { word: 'Dormant', pos: 'adj', meaning: 'Tidur / tidak aktif sementara waktu', example: 'The volcano remained dormant for six centuries before erupting.', cat: 'Qualifier' },
    { word: 'Dubious', pos: 'adj', meaning: 'Meragukan / patut dicurigai kebenarannya', example: 'The pharmaceutical marketing made dubious claims of instant weight loss.', cat: 'Qualifier' },
    { word: 'Eclectic', pos: 'adj', meaning: 'Beraneka ragam / memadukan berbagai gaya', example: 'The architect created an eclectic blend of modernist and Gothic motifs.', cat: 'Qualifier' },
    { word: 'Egalitarian', pos: 'adj', meaning: 'Sama rata / berprinsip kesetaraan hak', example: 'The hunter-gatherer tribe maintained an egalitarian social structure.', cat: 'Qualifier' },
    { word: 'Elusive', pos: 'adj', meaning: 'Sukar dipahami / sulit ditangkap buktinya', example: 'A universal room-temperature superconductor remains an elusive prize.', cat: 'Qualifier' },
    { word: 'Empirical', pos: 'adj', meaning: 'Berdasarkan bukti pengamatan nyata', example: 'Scientific laws require rigorous empirical verification.', cat: 'Qualifier' },
    { word: 'Equitable', pos: 'adj', meaning: 'Adil dan merata bagi semua pihak', example: 'The commission designed an equitable tax framework for small businesses.', cat: 'Qualifier' },
    { word: 'Erroneous', pos: 'adj', meaning: 'Keliru / mengandung kesalahan fakta', example: 'The newspaper issued a retraction for the erroneous headline.', cat: 'Qualifier' },
    { word: 'Exhaustive', pos: 'adj', meaning: 'Sangat lengkap mencakup segala detail', example: 'Investigators conducted an exhaustive search of the server logs.', cat: 'Qualifier' },
    { word: 'Expedient', pos: 'adj', meaning: 'Praktis menguntungkan meski belum tentu etis', example: 'Relying on coal was an expedient solution to the winter power shortage.', cat: 'Qualifier' },
    { word: 'Explicit', pos: 'adj', meaning: 'Terang-terangan / gamblang dan eksplisit', example: 'The contract contained explicit liability warnings for contractors.', cat: 'Qualifier' },
    { word: 'Extraneous', pos: 'adj', meaning: 'Tidak relevan / asing di luar konteks', example: 'Remove extraneous technical details to keep the memo reader-friendly.', cat: 'Qualifier' },
    { word: 'Feasible', pos: 'adj', meaning: 'Layak dan dapat dikerjakan secara nyata', example: 'Solar desalinization is an economically feasible option for coastal towns.', cat: 'Qualifier' },
    { word: 'Fluctuate', pos: 'verb', meaning: 'Naik-turun berfluktuasi tidak menentu', example: 'Crude oil prices fluctuate based on geopolitical tensions.', cat: 'Qualifier' },
    { word: 'Formidable', pos: 'adj', meaning: 'Tangguh / menakutkan karena kehebatannya', example: 'Scaling the sheer Himalayan cliff presented a formidable challenge.', cat: 'Qualifier' },
    { word: 'Fortuitous', pos: 'adj', meaning: 'Kebetulan yang menguntungkan / mujur', example: 'A fortuitous discovery of penicillin mold changed medical history.', cat: 'Qualifier' },

    // --- Kategori 5: Advanced Academic Synthesis & Vocabulary (141 - 205) ---
    { word: 'Frugal', pos: 'adj', meaning: 'Hemat / bersahaja tidak boros', example: 'The startup survived the recession thanks to frugal operational spending.', cat: 'Synthesis' },
    { word: 'Fundamental', pos: 'adj', meaning: 'Mendasar / fondasi prinsip utama', example: 'Freedom of expression is a fundamental human right.', cat: 'Synthesis' },
    { word: 'Futile', pos: 'adj', meaning: 'Sia-sia / tidak menghasilkan dampak', example: 'Pumping water was futile as the oceanic dyke had completely breached.', cat: 'Synthesis' },
    { word: 'Heterogeneous', pos: 'adj', meaning: 'Heterogen / beraneka ragam komponennya', example: 'Metropolitan cities have heterogeneous cultural populations.', cat: 'Synthesis' },
    { word: 'Homogeneous', pos: 'adj', meaning: 'Homogen / seragam sama sifatnya', example: 'The alloy was blended into a homogeneous metallic compound.', cat: 'Synthesis' },
    { word: 'Hypothetical', pos: 'adj', meaning: 'Berdasarkan dugaan / hipotesis pengandaian', example: 'The seminar examined a hypothetical asteroid collision scenario.', cat: 'Synthesis' },
    { word: 'Immutable', pos: 'adj', meaning: 'Abadi / tidak dapat berubah sama sekali', example: 'Physical laws of thermodynamics are considered immutable principles.', cat: 'Synthesis' },
    { word: 'Impair', pos: 'verb', meaning: 'Merusak / memperburuk daya kemampuan', example: 'Alcohol impairs sensory perception and motor reaction times.', cat: 'Synthesis' },
    { word: 'Impetus', pos: 'noun', meaning: 'Pendorong / pemantik percepatan aksi', example: 'The climate treaty provided the impetus for green venture capital.', cat: 'Synthesis' },
    { word: 'Implicit', pos: 'adj', meaning: 'Tersirat di balik ucapan / implisit', example: 'There was an implicit agreement that overtime would be compensated.', cat: 'Synthesis' },
    { word: 'Inadvertent', pos: 'adj', meaning: 'Tidak sengaja / tanpa disadari terbuat', example: 'An inadvertent coding bug deleted the database user tables.', cat: 'Synthesis' },
    { word: 'Incentive', pos: 'noun', meaning: 'Insentif / pendorong motivasi ekonomi', example: 'Tax rebates offer strong incentives for installing rooftop solar.', cat: 'Synthesis' },
    { word: 'Incompatible', pos: 'adj', meaning: 'Tidak cocok bertentangan satu sama lain', example: 'The legacy software is incompatible with the 64-bit operating system.', cat: 'Synthesis' },
    { word: 'Indigenous', pos: 'adj', meaning: 'Pribumi / flora-fauna endemik asli setempat', example: 'Kangaroos are indigenous to the Australian continent.', cat: 'Synthesis' },
    { word: 'Indispensable', pos: 'adj', meaning: 'Sangat mutlak diperlukan / tidak tergantikan', example: 'Mobile smartphones have become indispensable tools in modern commerce.', cat: 'Synthesis' },
    { word: 'Ineffable', pos: 'adj', meaning: 'Tak terkatakan / tak terlukiskan indahnya', example: 'The view of Earth from orbit evoked ineffable awe in the astronauts.', cat: 'Synthesis' },
    { word: 'Inevitable', pos: 'adj', meaning: 'Pasti terjadi / tak terelakkan', example: 'Digital automation is an inevitable structural shift in logistics.', cat: 'Synthesis' },
    { word: 'Inherent', pos: 'adj', meaning: 'Melekat alami sebagai sifat hakiki', example: 'Risk is an inherent characteristic of early-stage venture capitalism.', cat: 'Synthesis' },
    { word: 'Inhibit', pos: 'verb', meaning: 'Menghambat laju / mencegah perkembangan', example: 'Antibiotics inhibit bacterial cell wall synthesis.', cat: 'Synthesis' },
    { word: 'Initiate', pos: 'verb', meaning: 'Memulai / memprakarsai proyek baru', example: 'The agency initiated phase two of the clinical trials.', cat: 'Synthesis' },
    { word: 'Innovative', pos: 'adj', meaning: 'Inovatif / menghadirkan terobosan baru', example: 'The company developed innovative biodegradable ocean packaging.', cat: 'Synthesis' },
    { word: 'Insight', pos: 'noun', meaning: 'Wawasan mendalam / pemahaman hakiki', example: 'Microbiome research offers profound insights into human gut immunology.', cat: 'Synthesis' },
    { word: 'Intangible', pos: 'adj', meaning: 'Tak berwujud fisik / abstrak nilainya', example: 'Goodwill and brand prestige are valuable intangible company assets.', cat: 'Synthesis' },
    { word: 'Integral', pos: 'adj', meaning: 'Bagian utuh yang tak terpisahkan', example: 'Practical lab drills are an integral part of medical curricula.', cat: 'Synthesis' },
    { word: 'Integrate', pos: 'verb', meaning: 'Mengintegrasikan / menyatukan ke sistem', example: 'The smart grid integrates wind farms with hydroelectric reservoirs.', cat: 'Synthesis' },
    { word: 'Integrity', pos: 'noun', meaning: 'Integritas moral / keutuhan struktur', example: 'Inspectors tested the structural integrity of the suspension bridge.', cat: 'Synthesis' },
    { word: 'Intricate', pos: 'adj', meaning: 'Rumit dan terjalin detail sangat halus', example: 'The watchmaker assembled the intricate mechanical gears with tweezers.', cat: 'Synthesis' },
    { word: 'Intrinsic', pos: 'adj', meaning: 'Hakiki intrinsik dari dalam diri sendiri', example: 'Curiosity is an intrinsic motivator for scientific discovery.', cat: 'Synthesis' },
    { word: 'Invoke', pos: 'verb', meaning: 'Menyeru / mengutip dasar hukum rujukan', example: 'The defense attorney invoked the Fifth Amendment right against self-incrimination.', cat: 'Synthesis' },
    { word: 'Irrefutable', pos: 'adj', meaning: 'Tak terbantahkan karena bukti kuat', example: 'Radiocarbon data provided irrefutable evidence of early human settlement.', cat: 'Synthesis' },
    { word: 'Isolate', pos: 'verb', meaning: 'Mengisolasi zat murni / memisahkan', example: 'Virologists isolated the pathogen strain from infected tissue samples.', cat: 'Synthesis' },
    { word: 'Juxtapose', pos: 'verb', meaning: 'Menjajarkan dua hal untuk diperbandingkan', example: 'The gallery juxtaposed classical Renaissance oil with neon graffiti.', cat: 'Synthesis' },
    { word: 'Legitimate', pos: 'adj', meaning: 'Sah secara hukum / masuk akal wajar', example: 'The regulator acknowledged the union’s legitimate safety complaints.', cat: 'Synthesis' },
    { word: 'Longevity', pos: 'noun', meaning: 'Umur panjang / ketahanan daya pakai', example: 'Mediterranean dietary habits correlate with enhanced human longevity.', cat: 'Synthesis' },
    { word: 'Lucid', pos: 'adj', meaning: 'Jelas benderang / mudah dipahami logikanya', example: 'The textbook offers a lucid explanation of string theory mathematics.', cat: 'Synthesis' },
    { word: 'Magnify', pos: 'verb', meaning: 'Memperbesar ukuran citra visual', example: 'Electron microscopes magnify viral spikes up to 500,000 times.', cat: 'Synthesis' },
    { word: 'Mandate', pos: 'verb/noun', meaning: 'Mewajibkan secara resmi / mandat tugas', example: 'The clean air statute mandates scrubbers on industrial smoke chimneys.', cat: 'Synthesis' },
    { word: 'Manifest', pos: 'verb/adj', meaning: 'Memperlihatkan wujud nyata / tampak jelas', example: 'Heat exhaustion manifests as dizziness, nausea, and profuse perspiration.', cat: 'Synthesis' },
    { word: 'Manipulate', pos: 'verb', meaning: 'Mengendalikan / memanipulasi variabel', example: 'Chemists manipulate ambient pressure to crystallize carbon diamonds.', cat: 'Synthesis' },
    { word: 'Marginal', pos: 'adj', meaning: 'Tipis / berada di batas pinggiran', example: 'The performance boost was marginal, less than a half percent.', cat: 'Synthesis' },
    { word: 'Mediate', pos: 'verb', meaning: 'Menengahi sengketa / memediasi proses', example: 'A neutral ombudsman mediated the labor collective bargaining conflict.', cat: 'Synthesis' },
    { word: 'Metaphorical', pos: 'adj', meaning: 'Bersifat kiasan / metaforis konotatif', example: 'The author used "the glass ceiling" in a metaphorical sociological sense.', cat: 'Synthesis' },
    { word: 'Meticulous', pos: 'adj', meaning: 'Sangat teliti cermat terhadap detail', example: 'The chemist kept meticulous records of every microgram reactant.', cat: 'Synthesis' },
    { word: 'Mitigate', pos: 'verb', meaning: 'Meredakan / mengurangi dampak risiko', example: 'Planting urban trees mitigates concrete island heat hazards.', cat: 'Synthesis' },
    { word: 'Modify', pos: 'verb', meaning: 'Memodifikasi sedikit untuk menyempurnakan', example: 'The engineer modified the wing curvature to minimize drag vortexes.', cat: 'Synthesis' },
    { word: 'Monopolize', pos: 'verb', meaning: 'Memonopoli / menguasai pasar sepenuhnya', example: 'Antitrust laws prohibit tech giants from monopolizing search algorithms.', cat: 'Synthesis' },
    { word: 'Negate', pos: 'verb', meaning: 'Meniadakan / membatalkan keabsahan', example: 'A flawed control group negates the statistical validity of the trial.', cat: 'Synthesis' },
    { word: 'Negligible', pos: 'adj', meaning: 'Sangat kecil hingga boleh diabaikan', example: 'The software update caused a negligible latency delay of 2 milliseconds.', cat: 'Synthesis' },
    { word: 'Neutralize', pos: 'verb', meaning: 'Menetralkan asam-basa / melumpuhkan racun', example: 'Antacids neutralize excess hydrochloric acid in stomach lining.', cat: 'Synthesis' },
    { word: 'Noteworthy', pos: 'adj', meaning: 'Patut dicatat karena bernilai istimewa', example: 'It is noteworthy that renewable solar costs dropped 85% in a decade.', cat: 'Synthesis' },
    { word: 'Nuance', pos: 'noun', meaning: 'Nuansa perbedaan makna yang sangat halus', example: 'Literary translators must capture subtle cultural nuances in idioms.', cat: 'Synthesis' },
    { word: 'Nurture', pos: 'verb', meaning: 'Merawat / membina bibit potensi', example: 'Incubators nurture promising tech startups with seed funding and mentorship.', cat: 'Synthesis' },
    { word: 'Obligate', pos: 'verb', meaning: 'Mewajibkan secara hukum atau moral', example: 'Contracts obligate suppliers to meet guaranteed delivery deadlines.', cat: 'Synthesis' },
    { word: 'Obscure', pos: 'verb/adj', meaning: 'Mengaburkan pandangan / misterius tersembunyi', example: 'Volcanic ash clouds obscured the satellite imaging sensors.', cat: 'Synthesis' },
    { word: 'Obsolete', pos: 'adj', meaning: 'Usang / ketinggalan zaman tak dipakai lagi', example: 'Magnetic floppy disks became obsolete with the advent of cloud drives.', cat: 'Synthesis' },
    { word: 'Omnipresent', pos: 'adj', meaning: 'Ada di mana-mana secara bersamaan', example: 'Microplastics are now omnipresent in polar snow and abyssal trenches.', cat: 'Synthesis' },
    { word: 'Ongoing', pos: 'adj', meaning: 'Sedang berlangsung terus menerus', example: 'There is ongoing debate regarding the optimal inflation benchmark target.', cat: 'Synthesis' },
    { word: 'Optimum', pos: 'adj/noun', meaning: 'Paling ideal dan menguntungkan hasil', example: 'Photosynthesis operates at an optimum temperature of 25 degrees Celsius.', cat: 'Synthesis' },
    { word: 'Pervasive', pos: 'adj', meaning: 'Merembes ke segala lapisan / meluas', example: 'Smartphones have exerted a pervasive influence on interpersonal manners.', cat: 'Synthesis' },
    { word: 'Phenomenon', pos: 'noun', meaning: 'Gejala fenomena alam / peristiwa teramati', example: 'Bioluminescence is a wondrous oceanic phenomenon produced by dinoflagellates.', cat: 'Synthesis' },
    { word: 'Plausible', pos: 'adj', meaning: 'Masuk akal logis dan bisa diterima nalar', example: 'The meteor collision remains the most plausible explanation for dinosaur extinction.', cat: 'Synthesis' },
    { word: 'Potent', pos: 'adj', meaning: 'Sangat ampuh berkhasiat kuat efeknya', example: 'Methane is a potent greenhouse gas eighty times stronger than CO2.', cat: 'Synthesis' },
    { word: 'Pragmatic', pos: 'adj', meaning: 'Pragmatis realistis berorientasi hasil nyata', example: 'The diplomat adopted a pragmatic compromise to avert military conflict.', cat: 'Synthesis' },
    { word: 'Precedent', pos: 'noun', meaning: 'Preseden / putusan terdahulu rujukan hukum', example: 'The landmark civil rights verdict established an enduring legal precedent.', cat: 'Synthesis' },
    { word: 'Prevalent', pos: 'adj', meaning: 'Lazim tersebar luas di kalangan umum', example: 'Vitamin D deficiency is prevalent among populations in high northern latitudes.', cat: 'Synthesis' }
  ];

  window.UTBK_MODULES.push(...LBE_MODULES);
  window.UTBK_VOCAB.push(...VOCAB_LIST);
})();
