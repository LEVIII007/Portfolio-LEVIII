export type Tradeoff = {
  approach: string
  tempting: string
  rejected: string
  chosen?: boolean
}

export type Decision = {
  title: string
  description: string
}

export type PipelineStage = {
  label: string
  sublabel?: string
  nodes?: string[]
  fanout?: boolean
  drop?: boolean
}

export type Metric = {
  // `value` drives the count-up animation. Use `display` for non-numeric metrics.
  value?: number
  display?: string
  prefix?: string
  suffix?: string
  label: string
}

export type Ownership = {
  title: string
  description: string
}

export type CaseStudy = {
  slug: string
  company: string
  role: string
  period: string
  logo: string
  title: string
  tagline: string
  accent: { from: string; to: string }
  problem: string[]
  reframe: { heading: string; body: string }
  tradeoffs?: Tradeoff[]
  decisions?: Decision[]
  pipeline: { title: string; caption?: string; stages: PipelineStage[] }
  ownership: Ownership[]
  metrics: Metric[]
  stack: string[]
  links?: { label: string; href: string }[]
  reflection: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bulk-actions",
    company: "Mindtickle",
    role: "Software Engineering Intern",
    period: "Oct 2025 — Present",
    logo: "/mindtickle.png",
    title: "Bulk Actions",
    tagline:
      "Reset progress for 50,000 learners. Publish 100+ modules. One click — without melting the cluster.",
    accent: { from: "#3b82f6", to: "#22d3ee" },
    problem: [
      "Enablement admins performed repetitive operations at massive scale — resetting progress for 50,000 learners, publishing 100+ modules, or updating due dates across an entire learning program. Each was a multi-step manual process: slow and error-prone.",
      "From a product lens the ask sounded simple: make it one click. From an engineering lens it was not — we had to support workflows of up to 1M learners, execute dependent operations in the correct order, stream real-time progress, and handle partial failures gracefully without rolling back the entire workflow.",
      "For example: a reset operation had to finish before learners could be marked complete. Ordering and isolation weren't nice-to-haves — they were the whole problem.",
    ],
    reframe: {
      heading: "This wasn't a CRUD problem. It was an orchestration problem.",
      body: "We recognized early that the hard part wasn't writing data — it was ordering dependent operations, isolating a 1M-learner job from every other job, and surviving partial failures without a full rollback. That one reframing drove almost every technical choice that followed and made the system far easier to reason about and operate.",
    },
    tradeoffs: [
      {
        approach: "Baton queue (existing)",
        tempting: "Already used internally — quick to adopt.",
        rejected: "Production stability issues, no dead-letter-queue support, and no way to model workflow dependencies.",
      },
      {
        approach: "Kafka worker architecture",
        tempting: "Operationally simple.",
        rejected: "No concept of workflow state or execution ordering. A single 100K-learner workflow could flood a topic and delay every other workflow — we'd end up building our own orchestration layer on top of it.",
      },
      {
        approach: "AWS Step Functions + Lambda + S3",
        tempting: "Native workflow orchestration, built-in retries, isolated execution per workflow, and visual execution graphs for debugging.",
        rejected: "Chosen — it gave us ordering, isolation, and observability out of the box.",
        chosen: true,
      },
    ],
    pipeline: {
      title: "The fan-out",
      caption:
        "Admins define filters, not IDs. The pipeline resolves them, fans out into isolated batches, and streams progress back the whole way.",
      stages: [
        {
          label: "Admin defines a filter",
          sublabel: 'e.g. "all APAC learners who haven\'t completed Module X"',
          nodes: ["group: APAC", "status: incomplete", "module: X"],
        },
        {
          label: "Learner resolution (Go)",
          sublabel: "parallel Dashboard API calls per module · paginate 5,000/req · dedupe across modules",
          nodes: ["Module A", "Module B", "Module C", "…"],
          fanout: true,
        },
        {
          label: "Step Functions",
          sublabel: "ordered, isolated, retry-able execution graph",
        },
        {
          label: "Processor Lambdas (Go)",
          sublabel: "Go semaphore capped at 10 in-flight requests",
          nodes: ["batch 1", "batch 2", "batch 3", "…"],
          fanout: true,
        },
        {
          label: "10+ gRPC services",
          sublabel: "each operation routed to the right downstream service · idempotent",
        },
        {
          label: "S3 + GraphQL",
          sublabel: "results persisted to S3 · GraphQL surfaces live status & per-op progress",
        },
      ],
    },
    ownership: [
      {
        title: "Learner resolution pipeline",
        description:
          "Built the backend service that turns admin filters into actual learner IDs — parallel Dashboard API calls per module using Go goroutines, pagination up to 5,000 learners per request, and cross-module deduplication.",
      },
      {
        title: "Processor Lambdas",
        description:
          "Each Lambda receives a batch from Step Functions, processes operations concurrently behind a Go semaphore capped at 10 in-flight requests, routes each op to the right downstream gRPC service, and persists results to S3.",
      },
      {
        title: "10+ microservice integrations",
        description:
          "Wired existing low-level database APIs into the new workflow — handling their differing error contracts and keeping the whole execution idempotent so retries are always safe.",
      },
      {
        title: "GraphQL service",
        description:
          "Powered the frontend end-to-end: workflow status, operation-level progress, and execution results so admins could monitor long-running jobs in real time.",
      },
    ],
    metrics: [
      { value: 1, suffix: "M", label: "learners per workflow" },
      { value: 100, suffix: "+", label: "modules in a single workflow" },
      { value: 10, suffix: "+", label: "gRPC services orchestrated" },
      { display: "hrs → 3–5 min", label: "manual work, now" },
    ],
    stack: ["Go", "AWS Step Functions", "AWS Lambda", "S3", "gRPC", "GraphQL", "GitLab CI/CD"],
    reflection:
      "What I enjoyed most was recognizing early that this wasn't a CRUD problem — it was orchestration. That architectural decision influenced almost every technical choice we made and made the system much easier to reason about and operate.",
  },
  {
    slug: "copy-trading",
    company: "Trench Exchange",
    role: "Founding Backend Engineer",
    period: "May 2025 — Oct 2025",
    logo: "/trench.png",
    title: "Copy Trading at Scale",
    tagline:
      "Hundreds of followers, one wallet, every order different — all executing on Solana in under a second.",
    accent: { from: "#14F195", to: "#9945FF" },
    problem: [
      "As the only backend developer at an early-stage Solana DEX, I owned the core trading automations — copy trading, limit orders, take-profit/stop-loss — ahead of our private beta. They were on the critical path, and I built the entire system myself.",
      "A single follower copying a wallet is straightforward. Hundreds of users following the same wallet — each with different position sizes, slippage limits, and risk settings — is not. The execution pipeline gets complex fast.",
      "I had to handle hundreds of simultaneous triggers, support order cancellation while execution was already in progress, prevent race conditions between concurrent workers, and keep the cache and database in sync — all at sub-second latency.",
    ],
    reframe: {
      heading: "Latency was the constraint, so the design filtered work out before it reached the engine.",
      body: "The expensive part was the matching engine. The win came from keeping irrelevant work away from it: a multi-layer in-memory cache filtered out orders that didn't need to trigger, so only relevant automations ever reached the engine. Everything downstream stayed fast because most of the load never arrived.",
    },
    decisions: [
      {
        title: "Multi-layer in-memory cache",
        description:
          "Filtered out orders that didn't need to trigger so only relevant automations reached the matching engine — the main lever that kept latency sub-second under hundreds of concurrent triggers.",
      },
      {
        title: "Pluggable automation types",
        description:
          "A deliberate call to keep order types pluggable, so adding a new automation later wouldn't require refactoring the core pipeline.",
      },
      {
        title: "Reusable Solana library",
        description:
          "Started with zero Solana experience — learned the ecosystem, understood how different DEX protocols worked, implemented the transaction logic, then packaged it into a reusable library so the backend could integrate multiple protocols over time without duplicating logic.",
      },
    ],
    pipeline: {
      title: "The execution pipeline",
      caption:
        "One tracked trade fans out to hundreds of followers — but only after the cache filters out everything that doesn't need to act.",
      stages: [
        {
          label: "Tracked wallet trades",
          sublabel: "on-chain event observed",
        },
        {
          label: "Event ingestion",
          sublabel: "~2,000 events/sec",
        },
        {
          label: "Multi-layer cache filter",
          sublabel: "drops orders that don't need to trigger — most load never reaches the engine",
          nodes: ["relevant", "drop", "drop", "relevant"],
          drop: true,
        },
        {
          label: "Matching engine (Go)",
          sublabel: "concurrent workers · race-condition safe · cancellable mid-execution",
        },
        {
          label: "Per-follower fan-out",
          sublabel: "each with its own size, slippage & risk settings",
          nodes: ["follower 1", "follower 2", "follower 3", "…"],
          fanout: true,
        },
        {
          label: "Transaction service",
          sublabel: "executes on Solana in under a second",
        },
      ],
    },
    ownership: [
      {
        title: "API & data layer",
        description:
          "Built the NestJS/TypeScript API where users configure their strategies, and designed the database schemas for storing orders.",
      },
      {
        title: "Matching engine",
        description:
          "Wrote the Go matching engine processing around 2,000 events per second, handling hundreds of simultaneous triggers, in-progress cancellation, and race conditions between concurrent workers.",
      },
      {
        title: "Transaction service & Solana library",
        description:
          "Built the transaction service that executes trades on Solana in under a second, and packaged the transaction logic into a reusable library for multi-protocol integration.",
      },
      {
        title: "Cache synchronization",
        description:
          "Designed the multi-layer in-memory cache and used RedPanda to keep cache and state in sync across services.",
      },
    ],
    metrics: [
      { value: 2000, prefix: "~", label: "events/sec in the matching engine" },
      { display: "<1s", label: "trade execution on Solana" },
      { value: 20, suffix: "+", label: "automation configurations" },
      { display: "100s", label: "followers per tracked wallet" },
    ],
    stack: ["Go", "NestJS", "TypeScript", "RedPanda", "Solana", "PostgreSQL"],
    reflection:
      "It was my first time building a trading system and my first time working seriously with Go at this scale. There are things I'd design differently now — but we shipped on time, and copy trading became the most-used feature on the platform, consistently hitting sub-second execution.",
  },
]

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug)

export const caseStudySlugs = caseStudies.map((c) => c.slug)
