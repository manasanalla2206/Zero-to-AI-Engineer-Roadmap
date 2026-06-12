import { useState } from "react";

const months = [
  {
    id: 0,
    label: "Month 0",
    title: "Foundations & Landscape",
    emoji: "🗺️",
    color: "#6366f1",
    tagline: "Python + System Design + Mental map of AI ecosystem",
    startDate: "June 2026",
    goal: "Understand the full AI stack, write production-quality Python, and think like a systems engineer — not just a coder.",
    sections: [
      {
        title: "🐍 Core Python Skills",
        badge: "FOUNDATION",
        items: [
          "Strong Python: classes, decorators, async/await, type hints",
          "Working with APIs: requests, httpx, aiohttp",
          "Data handling: JSON, Pydantic models, dataclasses",
          "Environment management: venv, pip, .env files",
          "Git basics: commit, branch, push — your work must be on GitHub",
        ]
      },
      {
        title: "🏗️ System Design Thinking",
        badge: "FOUNDATION",
        items: [
          "What is an API? REST vs webhooks — understand deeply",
          "What are queues? Why does async matter at scale?",
          "What does 'failure' look like in a distributed system?",
          "How do components interact under load? (latency, bottlenecks)",
          "You are building SYSTEMS not just scripts",
        ]
      },
      {
        title: "🤖 LLM Concepts (Theory Layer)",
        badge: "NEW",
        items: [
          "How do LLMs work at a conceptual level? (transformers, tokens, context)",
          "What is Mixture of Experts (MoE)? Why does it matter?",
          "What do sparse architectures optimize for?",
          "When does a smaller model outperform a larger one?",
          "What are multimodal models? (text + image + audio input)",
        ]
      },
      {
        title: "📊 Model Landscape & Benchmarks",
        badge: "NEW",
        items: [
          "Proprietary models: GPT-4o, Claude, Gemini — know their strengths",
          "Open-source models: Llama 3, Mistral, Qwen, Phi — when to use each",
          "How to read benchmarks: MMLU, HumanEval, MATH, MTEB",
          "Benchmarks are imperfect — learn to spot overfitting",
          "Sign up: OpenAI, Anthropic, Groq, Fireworks AI — try each",
        ]
      },
    ],
    tasks: [
      "Write Python code that calls 3 different model APIs (OpenAI, Anthropic, Groq)",
      "Compare responses: same prompt, 3 different models — document differences",
      "Learn async Python — rewrite a sync API call as async",
      "Read about MoE architecture — explain it in your own words",
      "Study 5 AI products — reverse engineer what stack they probably use",
      "Draw the 4-layer AI stack from memory: Models → Retrieval → Orchestration → App",
      "Pick ONE model provider + ONE framework to go deep on",
    ],
    project: null,
    warning: "System design is not optional. AI engineering IS system engineering. Skipping this is why people build demos that never scale.",
    youtubeIdea: "Video idea: 'I started learning AI from zero — here's my Day 1 honest experience'",
  },
  {
    id: 1,
    label: "Month 1",
    title: "Prompting + Context Engineering",
    emoji: "✍️",
    color: "#7c3aed",
    tagline: "Prompting is engineering. Context engineering is your superpower.",
    startDate: "July 2026",
    goal: "Write prompts that work reliably in production. Master context windows, memory, and structured outputs.",
    sections: [
      {
        title: "✍️ Prompt Engineering",
        badge: "",
        items: [
          "System prompts: setting role, tone, constraints",
          "Few-shot prompting: giving input→output examples",
          "Chain of thought: ask model to reason step by step",
          "Zero-shot vs few-shot vs fine-tuned — when to use which",
          "Negative prompting: telling model what NOT to do",
        ]
      },
      {
        title: "🧠 Context Engineering",
        badge: "NEW 2026",
        items: [
          "Context window = everything the model can 'see' at once",
          "Short-term memory: conversation history in context window",
          "Long-term memory: embeddings + external stores (vector DBs)",
          "Context compression: summarizing old messages to save tokens",
          "What to put in context and what to leave out — this is a skill",
        ]
      },
      {
        title: "📦 Structured Outputs",
        badge: "",
        items: [
          "Getting clean JSON from LLMs — harder than it looks",
          "Output validation with Pydantic",
          "Handling when model ignores your format instructions",
          "Streaming responses: show output as it generates",
          "Error handling: timeouts, rate limits, retry logic",
        ]
      },
    ],
    tasks: [
      "Build App 1: Domain-specific assistant with strong system prompt",
      "Build App 2: Structured data extractor — messy text → clean JSON",
      "Build App 3: Multi-turn chatbot with conversation history",
      "Experiment: same task with 0 examples vs 3 examples — measure quality difference",
      "Implement context compression: summarize old messages when context gets long",
      "Track token usage: how many tokens per request?",
      "When a prompt fails — write down: what went wrong? hypothesis? targeted fix?",
    ],
    project: "3 mini-apps: assistant + extractor + chatbot",
    warning: "When a prompt fails — don't randomly tweak it. Analyze what went wrong, form a hypothesis, make ONE targeted change, test again.",
    youtubeIdea: "Video idea: 'Prompt Engineering is NOT what you think — here's what I learned building real apps'",
  },
  {
    id: 2,
    label: "Month 2",
    title: "Tool Use + Application Systems",
    emoji: "⚙️",
    color: "#9333ea",
    tagline: "LLMs that DO things, not just talk",
    startDate: "August 2026",
    goal: "Build AI apps where the model takes real actions. Think in systems, not prompts.",
    sections: [
      {
        title: "🔧 Tool Use / Function Calling",
        badge: "",
        items: [
          "How function calling works: you define tools, model decides when to use them",
          "Parallel tool calls: model using multiple tools at once",
          "Tool results: returning data back to the model",
          "When tools fail: error handling in tool execution",
          "Building safe tools: what should AI be allowed to do?",
        ]
      },
      {
        title: "🔗 Application Architecture",
        badge: "",
        items: [
          "Chaining: output of one LLM call → input of next",
          "Routing: sending different inputs to different models/prompts",
          "Parallelization: running multiple LLM calls simultaneously",
          "Map-reduce patterns for processing large documents",
          "When to use a framework (LangChain) vs build from scratch",
        ]
      },
      {
        title: "⚡ Production Basics",
        badge: "KEY",
        items: [
          "Latency vs cost vs quality triangle — you always trade one for another",
          "Caching: same question twice? Skip the LLM call entirely",
          "Async execution: handle multiple requests without blocking",
          "Batching: group requests to reduce API overhead",
          "Rate limits: what happens when you hit them? Handle gracefully",
        ]
      },
    ],
    tasks: [
      "Build a tool that lets AI search the web",
      "Build a tool that lets AI read and summarize a file",
      "Build a tool that lets AI call a real API (weather, news, anything)",
      "Chain 2 LLM calls: research → synthesize → format",
      "Implement caching: skip LLM if same input seen recently",
      "Measure latency: how long does each step take? Where is the bottleneck?",
      "Do LangChain OR LlamaIndex official tutorial end-to-end",
    ],
    project: "Tool-using assistant that takes real-world actions",
    warning: "A 10-second response might be correct but practically unusable. Always benchmark latency from the start.",
    youtubeIdea: "Video idea: 'I gave AI the ability to USE TOOLS — here's what happened (with code)'",
  },
  {
    id: 3,
    label: "Month 3",
    title: "RAG + Embeddings + Retrieval",
    emoji: "🔍",
    color: "#a855f7",
    tagline: "Give AI access to YOUR knowledge",
    startDate: "September 2026",
    goal: "Build a production-quality RAG system with proper evaluation. Retrieval quality is everything.",
    sections: [
      {
        title: "🧮 Embeddings Deep Dive",
        badge: "CORE",
        items: [
          "How embedding models work: text → dense vectors that capture meaning",
          "Semantic similarity: why nearby vectors = similar meaning",
          "Different embedding models: OpenAI, Cohere, open-source (BGE, E5)",
          "Embedding dimensions and trade-offs",
          "When to use which embedding model for your use case",
        ]
      },
      {
        title: "🗄️ Vector Databases & Search",
        badge: "CORE",
        items: [
          "How vector DBs work: HNSW index, approximate nearest neighbor",
          "Options: Pinecone (managed), Weaviate, Chroma (local), Qdrant",
          "Similarity search: cosine, dot product, euclidean — differences",
          "Hybrid search: semantic + keyword (BM25) combined",
          "Metadata filtering: search within a category/user/date range",
        ]
      },
      {
        title: "📄 RAG Pipeline",
        badge: "",
        items: [
          "Chunking strategies: fixed size, semantic, by paragraph, by section",
          "Reranking: use a second model to reorder retrieved chunks",
          "Query transformation: rewrite question to get better retrieval",
          "Multi-query retrieval: ask the question 3 ways, merge results",
          "Most RAG fails due to weak RETRIEVAL — not the LLM",
        ]
      },
    ],
    tasks: [
      "Set up ChromaDB locally and store + retrieve your first embeddings",
      "Chunk one document 3 different ways — compare retrieval quality",
      "Build full RAG pipeline: ingest → embed → store → retrieve → generate",
      "Implement hybrid search (semantic + keyword)",
      "Add reranking to your pipeline",
      "CREATE EVALUATION SET: 15 questions with known correct answers",
      "Measure retrieval accuracy: are you getting the right chunks?",
      "Build a simple UI with Streamlit so someone else can use it",
    ],
    project: "End-to-end RAG app on public docs with evaluation metrics",
    warning: "Build an evaluation set before you optimize. You cannot improve what you don't measure. Most people skip this — don't.",
    youtubeIdea: "Video idea: 'I built a RAG app from scratch — complete step by step tutorial with real mistakes'",
  },
  {
    id: 4,
    label: "Month 4",
    title: "Agents + Multi-Agent Systems",
    emoji: "🤖",
    color: "#c026d3",
    tagline: "AI that reasons, plans, and works with other AI agents",
    startDate: "October 2026",
    goal: "Build single agents and multi-agent pipelines. Understand orchestration patterns deeply.",
    sections: [
      {
        title: "🔄 Single Agent Design",
        badge: "",
        items: [
          "The agent loop: Observe → Think → Act → Observe → Repeat",
          "ReAct pattern: Reasoning + Acting interleaved",
          "Planning: chain-of-thought, tree-of-thought",
          "Short-term memory: within a task",
          "Long-term memory: across sessions using vector stores",
        ]
      },
      {
        title: "🕸️ Multi-Agent Systems",
        badge: "NEW",
        items: [
          "Why multi-agent? Parallelism, specialization, quality checks",
          "Orchestrator pattern: one agent directs others",
          "Parallel agents: multiple agents working simultaneously",
          "Supervisor pattern: one agent reviews another's work",
          "Frameworks: LangGraph, AutoGen, CrewAI",
        ]
      },
      {
        title: "🛡️ Agent Reliability",
        badge: "IMPORTANT",
        items: [
          "Agents fail a lot — build for failure from day one",
          "Timeout handling: what if an agent runs forever?",
          "Loop detection: prevent infinite reasoning loops",
          "Human in the loop: when should AI pause and ask a human?",
          "Observability: log EVERY step, every decision, every tool call",
        ]
      },
    ],
    tasks: [
      "Build a research agent: question → search multiple sources → synthesize",
      "Add LangGraph to visualize your agent's decision flow",
      "Build a 2-agent system: one researches, one writes/formats",
      "Add a supervisor agent that reviews output quality",
      "Implement human-in-the-loop: agent pauses and asks when unsure",
      "Log every step: build a trace viewer so you can debug failures",
      "Test same input 5 times — how consistent is the output?",
    ],
    project: "Multi-agent research or coding or data analysis pipeline",
    warning: "Before building a complex agent, always ask: can a simple chain solve this? Complexity is a cost. Simpler almost always wins.",
    youtubeIdea: "Video idea: 'I built an AI Agent that does research FOR me — here's the honest truth about agents'",
  },
  {
    id: 5,
    label: "Month 5",
    title: "Fine-tuning + Eval + Production",
    emoji: "🔬",
    color: "#db2777",
    tagline: "Where AI engineers are made or broken — production reality",
    startDate: "November 2026",
    goal: "Deploy real systems. Understand fine-tuning. Build evaluation pipelines. Handle production failures.",
    sections: [
      {
        title: "🎛️ Fine-Tuning Concepts",
        badge: "NEW",
        items: [
          "Full fine-tuning vs parameter-efficient (LoRA, QLoRA) — know the difference",
          "When fine-tuning makes sense vs prompt/context engineering",
          "Supervised Fine-Tuning (SFT): training on input-output pairs",
          "Reinforcement Fine-Tuning: reward model guides training",
          "RLHF: Human feedback shapes model behavior",
          "LLM-as-judge: using a model to evaluate another model's output",
        ]
      },
      {
        title: "📏 Evaluation & Observability",
        badge: "NEW",
        items: [
          "How do you test an LLM system? (it's not unit tests)",
          "Evaluation metrics: accuracy, faithfulness, relevance, coherence",
          "Regression detection: did your latest change make things worse?",
          "LLM-as-judge pattern: automated quality scoring",
          "Tracing tools: LangSmith, Langfuse, Phoenix — pick one",
          "What to log: inputs, outputs, latency, cost, model used, version",
        ]
      },
      {
        title: "🔒 Security & Safety",
        badge: "NEW",
        items: [
          "Prompt injection: attacker hijacks your AI via user input",
          "Data leakage: AI revealing data it shouldn't",
          "Access control: user A should not see user B's data",
          "Model misuse: users abusing your AI for unintended purposes",
          "Input/output validation: sanitize what goes in, validate what comes out",
        ]
      },
      {
        title: "🚀 Deployment Stack",
        badge: "",
        items: [
          "FastAPI: standard for AI deployments — learn it well",
          "Docker: containerize so it runs anywhere",
          "Railway / Render / Fly.io: easy cloud deployment",
          "Inference: vLLM, TGI for serving open-source models",
          "Caching, batching, streaming at production scale",
        ]
      },
    ],
    tasks: [
      "Deploy your RAG or agent app on Railway or Render",
      "Add full tracing with LangSmith or Langfuse",
      "Build an eval pipeline: 20 test cases, automated scoring",
      "Implement LLM-as-judge: use GPT-4 to score your app's outputs",
      "Fine-tune a small open-source model on Hugging Face (LoRA)",
      "Test prompt injection on your own app — can you break it?",
      "Add input validation and output sanitization",
      "Write a README explaining your system architecture",
    ],
    project: "Deployed app with full observability, eval pipeline, and security basics",
    warning: "Security is not optional. Prompt injection is the #1 attack vector for LLM apps. Test your own app for it before anyone else does.",
    youtubeIdea: "Video idea: 'I deployed my AI app to production — 7 things that broke and how I fixed them'",
  },
  {
    id: 6,
    label: "Month 6",
    title: "Specialize + Build in Public",
    emoji: "🎯",
    color: "#ea580c",
    tagline: "Go deep on one path. Share everything. Let the internet find you.",
    startDate: "December 2026",
    goal: "One polished capstone project. Clear specialization. Strong online presence. Share your journey publicly.",
    sections: [
      {
        title: "🎯 4 Specialization Paths",
        badge: "",
        items: [
          "Path 1 — User-Facing AI Products: app dev, UX, chat interfaces, copilots",
          "Path 2 — AI Infrastructure / MLOps: deployment, scaling, inference optimization",
          "Path 3 — Agents & Autonomous Systems: complex orchestration, multi-agent",
          "Path 4 — Open-Source Models: fine-tuning, LoRA, quantization, self-hosting",
        ]
      },
      {
        title: "📢 Build in Public Strategy",
        badge: "YOUR EDGE",
        items: [
          "Document your journey — every struggle is content",
          "GitHub: all projects public, clean READMEs, live demos",
          "YouTube: 'I built X using Y — here's what I learned'",
          "LinkedIn: post your project walkthroughs weekly",
          "Your story (zero → AI engineer) is what thousands are searching for",
        ]
      },
      {
        title: "🏗️ Capstone Project",
        badge: "REQUIRED",
        items: [
          "Combine: RAG + Agents + Deployment + Evaluation",
          "Must be deployed and accessible via public URL",
          "Record a 5-min demo walkthrough video",
          "Write a detailed README: problem → approach → trade-offs → learnings",
          "This is your proof of work — more valuable than any certificate",
        ]
      },
    ],
    tasks: [
      "Pick ONE specialization path based on your genuine interest",
      "Build capstone: RAG + Agents + Deployment + Evaluation combined",
      "Record a 5-min walkthrough video of your capstone project",
      "Push all 6 months of projects to GitHub with good READMEs",
      "Write a LinkedIn post about your 6-month journey",
      "Post your first YouTube video (even if imperfect — ship it)",
      "Connect with 10 people learning AI on LinkedIn/Twitter",
    ],
    project: "Capstone: everything combined — RAG + Agents + Deployed + Evaluated + Documented",
    warning: "Don't wait until everything is perfect to post publicly. The first 10 posts are practice. Ship anyway.",
    youtubeIdea: "Video idea: 'I learned AI Engineering in 6 months starting from zero — honest recap of everything'",
  },
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TABS = [
  { id: "tasks", label: "✅ Tasks" },
  { id: "learn", label: "📖 Concepts" },
  { id: "journey", label: "🗓️ Journey" },
  { id: "project", label: "🔨 Project" },
  { id: "github", label: "🚀 Go Public" },
];

function StepCard({ s }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copy = () => {
    if (s.code) {
      navigator.clipboard.writeText(s.code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div style={{
      background: "#0f0f18", border: "1px solid #1a1a28",
      borderRadius: 12, overflow: "hidden",
    }}>
      <div style={{
        padding: "14px 16px",
        display: "flex", alignItems: "flex-start", gap: 14,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          background: `${s.color}18`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 800, color: s.color,
        }}>{s.step}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#e0e0f8", marginBottom: 4 }}>{s.title}</div>
          <div style={{ fontSize: 13, color: "#666", lineHeight: 1.55 }}>{s.desc}</div>
          {s.action && s.link && (
            <a href={s.link} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", marginTop: 8,
              fontSize: 12, color: s.color, textDecoration: "none",
              background: `${s.color}12`, padding: "4px 10px",
              borderRadius: 6, border: `1px solid ${s.color}25`,
            }}>{s.action}</a>
          )}
          {s.action && !s.link && (
            <div style={{
              marginTop: 8, fontSize: 12, color: s.color,
              background: `${s.color}12`, padding: "6px 10px",
              borderRadius: 6, border: `1px solid ${s.color}25`,
            }}>{s.action}</div>
          )}
          {s.code && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: "#444", fontWeight: 600 }}>CODE TO PASTE</span>
                <button onClick={copy} style={{
                  border: "1px solid #2a2a3a", background: copied ? "#16a34a20" : "transparent",
                  color: copied ? "#4ade80" : "#666",
                  padding: "3px 10px", borderRadius: 6,
                  cursor: "pointer", fontSize: 11, fontWeight: 600,
                }}>
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <div
                onClick={() => setExpanded(!expanded)}
                style={{
                  background: "#060608", border: "1px solid #1a1a28",
                  borderRadius: 8, padding: "10px 12px",
                  fontFamily: "monospace", fontSize: 11,
                  color: "#8888aa", lineHeight: 1.6,
                  cursor: "pointer",
                  maxHeight: expanded ? "none" : "80px",
                  overflow: "hidden",
                  position: "relative",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                }}>
                {s.code}
                {!expanded && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 32,
                    background: "linear-gradient(transparent, #060608)",
                    display: "flex", alignItems: "flex-end", justifyContent: "center",
                    paddingBottom: 4, fontSize: 10, color: "#444",
                  }}>tap to expand</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [activeTab, setActiveTab] = useState("tasks");
  const [expandedSection, setExpandedSection] = useState(null);

  const month = months[activeMonth];

  const toggleTask = (monthId, idx) => {
    const key = `${monthId}-${idx}`;
    setCheckedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getProgress = (monthId, total) => {
    let done = 0;
    for (let i = 0; i < total; i++) if (checkedTasks[`${monthId}-${i}`]) done++;
    return total ? Math.round((done / total) * 100) : 0;
  };

  const totalTasks = months.reduce((sum, m) => sum + m.tasks.length, 0);
  const totalDone = months.reduce((sum, m) => {
    let d = 0;
    for (let i = 0; i < m.tasks.length; i++) if (checkedTasks[`${m.id}-${i}`]) d++;
    return sum + d;
  }, 0);
  const overallPct = Math.round((totalDone / totalTasks) * 100);
  const progress = getProgress(month.id, month.tasks.length);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080d",
      color: "#e4e4f0",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>

      {/* Header */}
      <div style={{ background: "#0d0d15", borderBottom: "1px solid #1a1a28", padding: "20px 16px 16px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#6366f1", textTransform: "uppercase", marginBottom: 5 }}>
                My Public Study Plan · AI Engineering 2026
              </div>
              <h1 style={{ margin: "0 0 4px", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 800, color: "#f0f0ff" }}>
                Zero → AI Engineer in 6 Months
              </h1>
              <p style={{ margin: 0, fontSize: 13, color: "#555" }}>
                Starting June 2026 · Documenting everything publicly · Follow the journey
              </p>
            </div>
            <div style={{
              background: "#13131f", border: "1px solid #1e1e30",
              borderRadius: 10, padding: "10px 18px", textAlign: "center",
            }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: overallPct > 0 ? "#a855f7" : "#2a2a3a" }}>
                {overallPct}%
              </div>
              <div style={{ fontSize: 11, color: "#444", marginTop: 1 }}>completed</div>
            </div>
          </div>

          {/* Overall bar */}
          <div style={{ marginTop: 16 }}>
            <div style={{ background: "#ffffff0d", borderRadius: 99, height: 6, overflow: "hidden" }}>
              <div style={{
                width: `${overallPct}%`, height: "100%",
                background: "linear-gradient(90deg, #6366f1, #c026d3, #ea580c)",
                borderRadius: 99, transition: "width 0.4s ease",
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, color: "#3a3a4a" }}>
              <span>{totalDone} of {totalTasks} tasks completed</span>
              <span>June 2026 → December 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Month tabs */}
      <div style={{ background: "#0d0d15", borderBottom: "1px solid #1a1a28", overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 920, margin: "0 auto", padding: "0 12px", gap: 2 }}>
          {months.map(m => {
            const prog = getProgress(m.id, m.tasks.length);
            const active = m.id === activeMonth;
            return (
              <button key={m.id}
                onClick={() => { setActiveMonth(m.id); setActiveTab("tasks"); setExpandedSection(null); }}
                style={{
                  border: "none", background: "none", padding: "12px 14px",
                  cursor: "pointer", color: active ? "#fff" : "#555",
                  fontWeight: active ? 700 : 400, fontSize: 12,
                  whiteSpace: "nowrap",
                  borderBottom: active ? `2px solid ${m.color}` : "2px solid transparent",
                  transition: "all 0.15s",
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                <span>{m.emoji}</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
                  <span>{m.label}</span>
                </span>
                {prog > 0 && (
                  <span style={{
                    background: prog === 100 ? "#22c55e" : m.color,
                    color: "#fff", fontSize: 9, fontWeight: 800,
                    padding: "1px 5px", borderRadius: 99,
                  }}>{prog === 100 ? "✓" : `${prog}%`}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "20px 14px" }}>

        {/* Month hero */}
        <div style={{
          background: `linear-gradient(135deg, ${month.color}14, ${month.color}05)`,
          border: `1px solid ${month.color}28`,
          borderRadius: 14, padding: "18px 20px", marginBottom: 18,
        }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: 50, height: 50, borderRadius: 12,
              background: `${month.color}20`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, flexShrink: 0,
            }}>{month.emoji}</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: month.color, fontWeight: 700 }}>{month.label}</span>
                <span style={{
                  background: "#ffffff0a", color: "#666",
                  fontSize: 10, padding: "2px 8px", borderRadius: 99, border: "1px solid #1e1e2e",
                }}>🗓️ {month.startDate}</span>
              </div>
              <h2 style={{ margin: "0 0 3px", fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800 }}>{month.title}</h2>
              <p style={{ margin: "0 0 10px", color: "#777", fontSize: 13 }}>{month.tagline}</p>
              <div style={{
                background: "#ffffff08", borderRadius: 8, padding: "9px 13px",
                fontSize: 13, color: "#bbb", borderLeft: `3px solid ${month.color}`,
              }}>
                🎯 <strong style={{ color: "#e0e0f8" }}>Goal: </strong>{month.goal}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#444", marginBottom: 5 }}>
              <span>Month progress</span>
              <span style={{ color: progress === 100 ? "#22c55e" : month.color }}>
                {progress === 100 ? "✓ Completed!" : `${progress}% done`}
              </span>
            </div>
            <div style={{ background: "#ffffff0d", borderRadius: 99, height: 5, overflow: "hidden" }}>
              <div style={{
                width: `${progress}%`, height: "100%",
                background: progress === 100 ? "#22c55e" : month.color,
                borderRadius: 99, transition: "width 0.3s",
              }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                border: activeTab === tab.id ? `1px solid ${month.color}50` : "1px solid #1e1e2e",
                background: activeTab === tab.id ? `${month.color}14` : "transparent",
                color: activeTab === tab.id ? "#fff" : "#555",
                padding: "7px 14px", borderRadius: 8,
                cursor: "pointer", fontSize: 12,
                fontWeight: activeTab === tab.id ? 700 : 400,
              }}>{tab.label}</button>
          ))}
        </div>

        {/* TASKS */}
        {activeTab === "tasks" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {month.tasks.map((task, i) => {
                const key = `${month.id}-${i}`;
                const done = !!checkedTasks[key];
                return (
                  <div key={i} onClick={() => toggleTask(month.id, i)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "13px 15px",
                      background: done ? `${month.color}0e` : "#0f0f18",
                      border: done ? `1px solid ${month.color}28` : "1px solid #1a1a28",
                      borderRadius: 10, cursor: "pointer", transition: "all 0.15s",
                    }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                      border: done ? `2px solid ${month.color}` : "2px solid #2a2a3a",
                      background: done ? month.color : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", transition: "all 0.15s",
                    }}>{done && <CheckIcon />}</div>
                    <span style={{
                      fontSize: 13, lineHeight: 1.55,
                      color: done ? "#484858" : "#d0d0e8",
                      textDecoration: done ? "line-through" : "none",
                    }}>{task}</span>
                  </div>
                );
              })}
            </div>

            {month.warning && (
              <div style={{
                marginTop: 16, background: "#1a1000",
                border: "1px solid #f59e0b28", borderRadius: 10,
                padding: "13px 15px", display: "flex", gap: 10,
              }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
                <p style={{ margin: 0, fontSize: 13, color: "#c8a050", lineHeight: 1.55 }}>
                  <strong>Watch out: </strong>{month.warning}
                </p>
              </div>
            )}

            {/* YouTube idea box */}
            <div style={{
              marginTop: 12, background: "#0d0d18",
              border: "1px solid #ff000018", borderRadius: 10,
              padding: "13px 15px", display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>🎬</span>
              <p style={{ margin: 0, fontSize: 13, color: "#a0a0c0", lineHeight: 1.55 }}>
                <strong style={{ color: "#ff4444" }}>YouTube: </strong>{month.youtubeIdea}
              </p>
            </div>
          </div>
        )}

        {/* CONCEPTS */}
        {activeTab === "learn" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {month.sections.map((sec, si) => (
              <div key={si} style={{
                background: "#0f0f18", border: "1px solid #1a1a28",
                borderRadius: 12, overflow: "hidden",
              }}>
                <div onClick={() => setExpandedSection(expandedSection === si ? null : si)}
                  style={{
                    padding: "14px 16px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#e0e0f8" }}>{sec.title}</span>
                    {sec.badge && (
                      <span style={{
                        background: sec.badge === "NEW" || sec.badge === "NEW 2026" ? "#6366f118"
                          : sec.badge === "FOUNDATION" ? "#22c55e18"
                          : sec.badge === "CORE" ? "#f59e0b18"
                          : sec.badge === "YOUR EDGE" ? "#ec489918"
                          : "#ffffff10",
                        color: sec.badge === "NEW" || sec.badge === "NEW 2026" ? "#818cf8"
                          : sec.badge === "FOUNDATION" ? "#4ade80"
                          : sec.badge === "CORE" ? "#fbbf24"
                          : sec.badge === "YOUR EDGE" ? "#f472b6"
                          : "#888",
                        fontSize: 9, fontWeight: 800, padding: "2px 7px",
                        borderRadius: 99, letterSpacing: "0.06em",
                      }}>{sec.badge}</span>
                    )}
                  </div>
                  <span style={{ color: "#333", fontSize: 18 }}>
                    {expandedSection === si ? "−" : "+"}
                  </span>
                </div>
                {expandedSection === si && (
                  <div style={{ padding: "0 16px 14px", borderTop: "1px solid #14141e" }}>
                    <div style={{ paddingTop: 12, display: "flex", flexDirection: "column", gap: 9 }}>
                      {sec.items.map((item, ii) => (
                        <div key={ii} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ color: month.color, flexShrink: 0, marginTop: 2, fontSize: 13 }}>→</span>
                          <span style={{ fontSize: 13, color: "#b0b0cc", lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* JOURNEY — the public timeline */}
        {activeTab === "journey" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

            {/* About this plan */}
            <div style={{
              background: "#0f0f18", border: "1px solid #1a1a28",
              borderRadius: 12, padding: "16px 18px",
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e0e0f8", marginBottom: 10 }}>
                📖 About This Study Plan
              </div>
              <p style={{ margin: "0 0 10px", fontSize: 13, color: "#888", lineHeight: 1.7 }}>
                This is my public learning roadmap for becoming an AI Engineer. I started with 1 year of software engineering experience and zero AI knowledge. I'm documenting everything — what I'm learning, what I'm building, and what's actually working.
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#888", lineHeight: 1.7 }}>
                If you're also starting from zero, follow along. Every task here is something I'm actually doing. Every project is something I'm actually building.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ background: "#0f0f18", border: "1px solid #1a1a28", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e0e0f8", marginBottom: 16 }}>
                🗓️ 6-Month Timeline
              </div>
              <div style={{ position: "relative" }}>
                {months.map((m, i) => {
                  const prog = getProgress(m.id, m.tasks.length);
                  const isActive = m.id === activeMonth;
                  const isDone = prog === 100;
                  return (
                    <div key={m.id}
                      onClick={() => { setActiveMonth(m.id); setActiveTab("tasks"); }}
                      style={{
                        display: "flex", gap: 14, alignItems: "flex-start",
                        marginBottom: i < months.length - 1 ? 0 : 0,
                        cursor: "pointer",
                        padding: "10px 12px",
                        borderRadius: 10,
                        background: isActive ? `${m.color}0c` : "transparent",
                        border: isActive ? `1px solid ${m.color}20` : "1px solid transparent",
                        transition: "all 0.15s",
                      }}>
                      {/* dot + line */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 99,
                          background: isDone ? "#22c55e20" : isActive ? `${m.color}20` : "#1a1a28",
                          border: isDone ? "2px solid #22c55e" : isActive ? `2px solid ${m.color}` : "2px solid #2a2a3a",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15,
                        }}>{isDone ? "✓" : m.emoji}</div>
                        {i < months.length - 1 && (
                          <div style={{
                            width: 2, height: 28,
                            background: isDone ? "#22c55e40" : "#1a1a28",
                            margin: "4px 0",
                          }} />
                        )}
                      </div>
                      <div style={{ flex: 1, paddingTop: 4 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? "#f0f0ff" : "#888" }}>
                            {m.label}: {m.title}
                          </span>
                          <span style={{ fontSize: 11, color: "#3a3a4a" }}>{m.startDate}</span>
                          {prog > 0 && prog < 100 && (
                            <span style={{
                              background: `${m.color}18`, color: m.color,
                              fontSize: 9, fontWeight: 800, padding: "1px 6px", borderRadius: 99,
                            }}>{prog}% done</span>
                          )}
                          {isDone && (
                            <span style={{
                              background: "#22c55e18", color: "#4ade80",
                              fontSize: 9, fontWeight: 800, padding: "1px 6px", borderRadius: 99,
                            }}>COMPLETED</span>
                          )}
                        </div>
                        <div style={{ fontSize: 12, color: "#555" }}>{m.tagline}</div>
                        {m.project && (
                          <div style={{ fontSize: 11, color: "#3a3a4a", marginTop: 4 }}>
                            🔨 Project: {m.project}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What I'm building */}
            <div style={{ background: "#0f0f18", border: "1px solid #1a1a28", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e0e0f8", marginBottom: 14 }}>
                🔨 Projects I'm Building (Month by Month)
              </div>
              {months.filter(m => m.project).map((m, i) => (
                <div key={m.id} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: i < months.filter(x => x.project).length - 1 ? "1px solid #14141e" : "none",
                }}>
                  <span style={{
                    fontSize: 10, color: m.color, fontWeight: 800,
                    flexShrink: 0, paddingTop: 3, minWidth: 60,
                  }}>{m.label}</span>
                  <span style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{m.project}</span>
                </div>
              ))}
            </div>

            {/* Why public */}
            <div style={{
              background: "#080d08", border: "1px solid #22c55e18",
              borderRadius: 12, padding: "14px 16px",
            }}>
              <div style={{ fontSize: 12, color: "#4ade80", fontWeight: 700, marginBottom: 8 }}>
                💡 Why I'm Doing This Publicly
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#4a6e4a", lineHeight: 1.7 }}>
                Building in public keeps me accountable and helps others who are on the same journey. If you're also learning AI from scratch, every task here is proven — not just theory. Follow along, fork this plan, make it yours.
              </p>
            </div>
          </div>
        )}

        {/* PROJECT */}
        {activeTab === "project" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {month.project ? (
              <div style={{
                background: `${month.color}0e`, border: `1px solid ${month.color}28`,
                borderRadius: 12, padding: "18px",
              }}>
                <div style={{ fontSize: 10, color: month.color, fontWeight: 800, letterSpacing: "0.1em", marginBottom: 8 }}>
                  THIS MONTH'S BUILD
                </div>
                <p style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 700, color: "#f0f0ff", lineHeight: 1.5 }}>
                  {month.project}
                </p>
                <p style={{ margin: 0, fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                  This field rewards builders over studiers. No tutorial teaches what actually building and breaking something does.
                </p>
              </div>
            ) : (
              <div style={{
                background: "#0f0f18", border: "1px solid #1a1a28",
                borderRadius: 10, padding: "18px", textAlign: "center", color: "#444", fontSize: 14,
              }}>
                Month 0 is pure exploration — no project yet. Focus on understanding the landscape and making your first API calls.
              </div>
            )}

            {/* YouTube content idea */}
            <div style={{
              background: "#100808", border: "1px solid #ff000015",
              borderRadius: 12, padding: "16px 18px",
            }}>
              <div style={{ fontSize: 12, color: "#ff4444", fontWeight: 700, marginBottom: 8 }}>
                🎬 Content Idea for This Month
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#886060", lineHeight: 1.6 }}>
                {month.youtubeIdea}
              </p>
            </div>

            {/* Full project arc */}
            <div style={{ background: "#0f0f18", border: "1px solid #1a1a28", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 13, color: "#555", marginBottom: 14 }}>Complete Project Arc</div>
              {months.filter(m => m.project).map((m, i) => (
                <div key={m.id} style={{
                  display: "flex", gap: 10, alignItems: "flex-start",
                  padding: "9px 0",
                  borderBottom: i < months.filter(x => x.project).length - 1 ? "1px solid #12121e" : "none",
                }}>
                  <span style={{ fontSize: 10, color: m.color, fontWeight: 800, flexShrink: 0, paddingTop: 3, minWidth: 60 }}>
                    {m.label}
                  </span>
                  <span style={{
                    fontSize: 13, lineHeight: 1.5,
                    color: m.id === activeMonth ? "#c8c8e0" : "#444",
                    fontWeight: m.id === activeMonth ? 600 : 400,
                  }}>{m.project}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GITHUB GUIDE */}
        {activeTab === "github" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Hero */}
            <div style={{
              background: "linear-gradient(135deg, #6366f114, #a855f708)",
              border: "1px solid #6366f128", borderRadius: 14, padding: "18px 20px",
            }}>
              <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 700, marginBottom: 6 }}>OPTION 3 — RECOMMENDED</div>
              <h2 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 800, color: "#f0f0ff" }}>
                Host on GitHub + Netlify
              </h2>
              <p style={{ margin: 0, fontSize: 13, color: "#777", lineHeight: 1.6 }}>
                Free forever. Gives you a public URL like <span style={{ color: "#a5b4fc", fontFamily: "monospace" }}>yourname-ai-roadmap.netlify.app</span> — share it on LinkedIn, YouTube, anywhere.
              </p>
            </div>

            {/* Steps */}
            {[
              {
                step: "01",
                title: "Create GitHub Account",
                color: "#6366f1",
                desc: "Go to github.com → Sign Up. Pick a username that matches your YouTube name — it shows on everything publicly.",
                action: "👉 github.com/signup",
                link: "https://github.com/signup",
                code: null,
              },
              {
                step: "02",
                title: "Create New Repository",
                color: "#7c3aed",
                desc: "After login → click + top right → New repository.",
                action: null,
                link: null,
                code: `Name: ai-roadmap
Description: My public 6-month AI Engineering study plan
Visibility: ✅ Public
✅ Add a README file
→ Click "Create repository"`,
              },
              {
                step: "03",
                title: "Create index.html",
                color: "#9333ea",
                desc: "In your repo → Add file → Create new file → name it index.html",
                action: null,
                link: null,
                code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zero to AI Engineer — My Study Plan</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
              },
              {
                step: "04",
                title: "Create src/main.jsx",
                color: "#a855f7",
                desc: "Add file → Create new file → type src/main.jsx (GitHub auto-creates the folder)",
                action: null,
                link: null,
                code: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)`,
              },
              {
                step: "05",
                title: "Create src/App.jsx",
                color: "#c026d3",
                desc: "Add file → Create new file → src/App.jsx → Copy the FULL code from this artifact and paste it here.",
                action: "📋 Copy this artifact's code → paste into src/App.jsx",
                link: null,
                code: null,
              },
              {
                step: "06",
                title: "Create package.json",
                color: "#db2777",
                desc: "Add file → Create new file → package.json",
                action: null,
                link: null,
                code: `{
  "name": "ai-roadmap",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}`,
              },
              {
                step: "07",
                title: "Create vite.config.js",
                color: "#ea580c",
                desc: "Add file → Create new file → vite.config.js",
                action: null,
                link: null,
                code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-roadmap/',
})`,
              },
              {
                step: "08",
                title: "Deploy on Netlify (2 minutes)",
                color: "#16a34a",
                desc: "Go to netlify.com → Sign up with GitHub → Add new site → Import from Git → pick your ai-roadmap repo",
                action: "👉 netlify.com",
                link: "https://netlify.com",
                code: `Build command:   npm run build
Publish directory: dist
→ Click Deploy Site`,
              },
              {
                step: "09",
                title: "Update Your README",
                color: "#0891b2",
                desc: "Go back to GitHub → click README.md → pencil icon to edit → paste this:",
                action: null,
                link: null,
                code: `# Zero to AI Engineer 🤖

My public 6-month AI Engineering study plan.
Starting from zero — documenting everything.

🔗 Live: https://YOUR-NETLIFY-LINK.netlify.app

## Months
- Month 0: Foundations & Landscape
- Month 1: Prompting + Context Engineering
- Month 2: Tool Use + Application Systems
- Month 3: RAG + Embeddings + Retrieval
- Month 4: Agents + Multi-Agent Systems
- Month 5: Fine-tuning + Eval + Production
- Month 6: Specialize + Build in Public

Follow along if you're on the same journey.`,
              },
            ].map((s, i) => (
              <StepCard key={i} s={s} />
            ))}

            {/* LinkedIn post template */}
            <div style={{
              background: "#0a0f1a", border: "1px solid #1e40af30",
              borderRadius: 12, padding: "16px 18px",
            }}>
              <div style={{ fontSize: 12, color: "#3b82f6", fontWeight: 700, marginBottom: 10 }}>
                💼 LinkedIn Post — Copy & Post After Step 8
              </div>
              <div style={{
                background: "#060a14", borderRadius: 8, padding: "14px",
                fontSize: 13, color: "#94a3b8", lineHeight: 1.8,
                fontStyle: "italic",
              }}>
                I made my entire AI learning plan public. 🤖<br /><br />
                6 months. Every concept. Every task. Every project — all trackable.<br /><br />
                Starting from zero (1yr SE exp, zero AI) and documenting everything publicly.<br /><br />
                If you're also trying to break into AI, follow along 👇<br /><br />
                🔗 [your netlify link here]<br /><br />
                #AIEngineering #LearningInPublic #BuildInPublic
              </div>
            </div>

          </div>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, gap: 10 }}>
          <button
            onClick={() => { setActiveMonth(Math.max(0, activeMonth - 1)); setActiveTab("tasks"); setExpandedSection(null); }}
            disabled={activeMonth === 0}
            style={{
              border: "1px solid #1e1e2e", background: "transparent",
              color: activeMonth === 0 ? "#222230" : "#666",
              padding: "10px 20px", borderRadius: 8,
              cursor: activeMonth === 0 ? "default" : "pointer", fontSize: 13,
            }}>← Previous</button>
          <button
            onClick={() => { setActiveMonth(Math.min(months.length - 1, activeMonth + 1)); setActiveTab("tasks"); setExpandedSection(null); }}
            disabled={activeMonth === months.length - 1}
            style={{
              border: "none",
              background: activeMonth === months.length - 1 ? "#1a1a28" : month.color,
              color: activeMonth === months.length - 1 ? "#222230" : "#fff",
              padding: "10px 24px", borderRadius: 8,
              cursor: activeMonth === months.length - 1 ? "default" : "pointer",
              fontSize: 13, fontWeight: 700,
            }}>Next Month →</button>
        </div>

      </div>
    </div>
  );
}
