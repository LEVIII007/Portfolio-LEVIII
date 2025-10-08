export const experience = [
  {
    company: "Trench.ag",
    role: "Founding Backend Engineer",
    period: "May 2025 — Oct 2025",
    summary: "Developed automated trading services and optimized databases for high-performance Solana DEX operations.",
    details: [
      "Worked on building backend infrastructure for high performance Solana DEX.",
      "Developed a fully automated event-driven trading service with 20+ configurations, achieving transaction confirmation within 1 second and identifying triggered transactions in under 100ms, with a thread-safe, in-memory cache for high-performance data access.",
      "Migrated ClickHouse database to a hybrid ClickHouse and PostgreSQL schema, reducing average API response time by 70% through optimized read queries.",
      "Built upstream Go services to ingest Solana blockchain transactions within 15ms, using gRPC for high-concurrency processing.",
    ],
    links: [],
    logo: "/trench.png",
    companyWebsite: "https://trench.ag",
    companyTwitter: "https://x.com/TrenchExchange",
    tags: ["Go", "Ts", "Web3", "PostgreSQL", "ClickHouse", "AWS", "Redis", "Infra"],
  },
  {
    company: "Heizen (Opengig)",
    role: "SDE Intern (Remote)",
    period: "Feb 2025 — May 2025",
    summary: "Led backend development of multi-agent GenAI applications and automated business development pipelines.",
    details: [
      "Led backend development of multi-agent GenAI applications for Heizen's internal developer assistant suite (coding, design, and product agents), building custom MCP servers with FastAPI and NestJS.",
      "Developed a multi-agent LLM pipeline to automate lead generation, pitch writing, and email outreach for the company's business development team.",
    ],
    links: [],
    logo: "/heizen.png",
    companyWebsite: "https://www.heizen.work",
    companyTwitter: "https://x.com/HeizenOfficial",
    tags: ["FastAPI", "NestJS", "Python", "TypeScript", "LangGraph", "PostgreSQL", "Docker"],
  },
  {
    company: "Indiacharts",
    role: "Backend Developer Intern",
    period: "Nov 2024 — Jan 2025",
    summary: "Re-architected real-time analytics backend for high-throughput stock data processing and indicator computation.",
    details: [
      "Re-architected the real-time analytics backend to handle high-throughput OHLC data for 3,000+ stocks, enabling consistent sub-second indicator computation during peak market hours.",
      "Built scalable pipelines to compute 100+ technical indicators across multiple timeframes, balancing accuracy, latency, and system cost using distributed workers and optimized vectorized processing.",
    ],
    links: [],
    logo: "/indiacharts.png",
    companyWebsite: "https://indiacharts.com",
    companyTwitter: "https://twitter.com/indiacharts",
    tags: ["Python", "FastAPI", "Redis", "PostgreSQL", "Polars ", "Pandas", "WebSockets", "Docker"],
  },
]

export const stack = ["TypeScript", "Next.js", "React Server Components", "SWR", "Tailwind CSS", "shadcn/ui", "Vercel"]

export const blogs = [
  {
    title: "High level architecture of real-time voice agents",
    description: "Design and implementation of scalable real-time voice applications.",
    date: "Jan 15, 2024",
    link: "https://medium.com/@tyagishashank118/high-level-architecture-of-real-time-voice-agents-ddcedb251fc4"
  },
  {
    title: "Monitoring Microservices on a Budget: Our Journey with SigNoz",
    description: "How we implemented observability in our microservices architecture without breaking the bank.",
    date: "Dec 5, 2023",
    link: "https://medium.com/@tyagishashank118/monitoring-microservices-on-a-budget-our-journey-with-signoz-9b16ce02f778",
  },
  {
    title: "Change Data Capture with Debezium and PostgreSQL",
    description: "How we built and utilized the CDC feature of postgres to build real-time data pipelines.",
    date: "Dec 5, 2023",
    link: "https://medium.com/@tyagishashank118/change-data-capture-with-debezium-and-postgresql-9b16ce02f778",
  },
]
