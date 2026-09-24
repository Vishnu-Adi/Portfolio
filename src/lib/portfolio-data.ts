export type ProjectSlug = "webdrop" | "veriscope" | "tutor-system";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: ProjectSlug;
  number: string;
  title: string;
  titleLines: string[];
  year: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  visual: ProjectSlug;
  detail: {
    idea: string;
    problem: string;
    approach: string;
    architecture: string[];
    hardPart: string;
    tradeOff: string;
    change: string;
    learned: string;
  };
};

export const featuredProjects: Project[] = [
  {
    slug: "webdrop",
    number: "01",
    title: "WebDrop",
    titleLines: ["WEB", "DROP"],
    year: "2026",
    category: "Browser-native transfer",
    summary: "A file transfer system without the usual install-and-select ritual.",
    description:
      "A browser-native peer-to-peer file-sharing app that pairs nearby devices with motion and an ultrasonic handshake, then moves files over WebRTC data channels with chunked OPFS storage.",
    technologies: ["JavaScript", "WebRTC", "OPFS", "Web Audio", "Device Motion"],
    links: [
      { label: "Live demo", href: "https://web-drop-lyart.vercel.app/", external: true },
    ],
    visual: "webdrop",
    detail: {
      idea: "The question behind WebDrop is simple: can two nearby phones discover one another and exchange a file without an account, a native install, or a visible list of devices?",
      problem:
        "Conventional file transfer asks the user to do the system’s work first. Install an app, create an identity, find the right device, then move the file. WebDrop makes the connection itself the interface.",
      approach:
        "A device-motion bump and an ultrasonic Web Audio handshake establish proximity. Once paired, WebRTC data channels carry the transfer while OPFS provides chunked browser storage.",
      architecture: [
        "MOTION / AUDIO",
        "PROXIMITY HANDSHAKE",
        "WEBRTC DATA CHANNEL",
        "CHUNKED OPFS STORAGE",
      ],
      hardPart:
        "The hard part is coordinating proximity, signaling, connection state and storage in a browser that does not offer a native file-transfer layer.",
      tradeOff:
        "Using browser APIs keeps installation friction low, but it means handling browser-specific storage, permissions and recovery paths directly.",
      change: "A future version should make interrupted transfers and progress states more explicit.",
      learned: "The interface can be reduced to a physical gesture if the underlying system does the quiet work.",
    },
  },
  {
    slug: "veriscope",
    number: "02",
    title: "VeriScope",
    titleLines: ["VERI", "SCOPE"],
    year: "2025",
    category: "Language / news analysis",
    summary: "A clearer way to see the language shaping a news story.",
    description:
      "An AI news-analysis platform that detects and neutralizes slanted language, then makes the result legible through bias scores, analysis and data visualization.",
    technologies: ["Python", "Next.js", "NLP", "Data Visualization"],
    links: [
      { label: "GitHub", href: "https://github.com/Vishnu-Adi/VeriScope", external: true },
    ],
    visual: "veriscope",
    detail: {
      idea: "VeriScope asks a reader-facing question: when two reports describe the same subject differently, can the language itself become visible?",
      problem:
        "A headline can be persuasive without being wrong. The useful question is not only what a model classifies, but how a reader can inspect the signals behind that classification.",
      approach:
        "The platform applies NLP to detect and neutralize slanted language across articles, then returns an analysis and bias score to a responsive Next.js interface built for comparison.",
      architecture: [
        "ARTICLE TEXT",
        "LANGUAGE SIGNALS",
        "BIAS SCORE",
        "READER CONTEXT",
      ],
      hardPart:
        "A numerical score is useful only when the reader can inspect why it exists. The visualization has to carry the argument, not just decorate it.",
      tradeOff:
        "The interface should make the model legible without pretending that language is perfectly objective.",
      change: "A future version could add a clearer side-by-side comparison view for competing reports.",
      learned: "Data visualization is part of the argument, not decoration.",
    },
  },
  {
    slug: "tutor-system",
    number: "03",
    title: "Tutor-System",
    titleLines: ["TUTOR", "SYSTEM"],
    year: "2026",
    category: "AI learning platform",
    summary: "An AI tutor with memory, voice and a source-aware point of view.",
    description:
      "An AI learning platform with function-calling tools, realtime voice tutoring, source-aware PDF chat and an auditable learner-memory layer built around retrieval and mastery tracking.",
    technologies: ["TypeScript", "React 19", "OpenRouter", "Deepgram", "Dexie/IndexedDB", "Express"],
    links: [
      { label: "Live demo", href: "https://tutor-system-architecture.vercel.app/", external: true },
    ],
    visual: "tutor-system",
    detail: {
      idea: "A tutor becomes more useful when it remembers the learner’s sources, questions and progress without turning every conversation into a black box.",
      problem:
        "Most AI interactions answer the latest prompt. Tutor-System is designed around a longer arc: source-aware chat, a realtime voice layer and a memory system that can be inspected.",
      approach:
        "Function-calling tools and a source-aware PDF chat ground the conversation. A separate foreground/background model split supports realtime voice, while embeddings, semantic retrieval and mastery tracking form the learner-memory layer.",
      architecture: [
        "VOICE + CHAT",
        "FUNCTION-CALLING TOOLS",
        "EMBEDDINGS / RETRIEVAL",
        "MASTERY MEMORY",
      ],
      hardPart:
        "The challenge is not only answering; it is keeping source context, retrieval and mastery state coherent over a long conversation.",
      tradeOff:
        "A memory layer adds persistence and complexity. Every remembered detail needs provenance and a way to be corrected.",
      change: "A future version could expose retrieval traces and source confidence more visibly to the learner.",
      learned: "Good interfaces can make a complex model feel calm.",
    },
  },
];

export type ArchiveProject = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
};

export const archiveProjects: ArchiveProject[] = [
  {
    title: "LexiFlow",
    description: "An AI reading coach extension that analyzes and simplifies complex web text.",
    tags: ["Chrome Extension", "NLP", "BERT", "XGBoost"],
    link: "https://github.com/Vishnu-Adi/LexiFlow",
    year: "2025",
  },
  {
    title: "Privacy-Preserving Micropayment",
    description: "A two-party micropayment channel prototype using homomorphic commitments.",
    tags: ["Next.js", "FastAPI", "Cryptography", "Python"],
    link: "https://github.com/Vishnu-Adi/homomorphic-hash-micropayment-channel.git",
    year: "2025",
  },
  {
    title: "RFID Optimization",
    description: "Genetic Algorithm and Particle Swarm Optimization for RFID tag placement.",
    tags: ["Genetic Algorithm", "PSO", "Optimization", "Python"],
    link: "https://github.com/Vishnu-Adi/RFID_Project.git",
    year: "2025",
  },
  {
    title: "Harmony",
    description: "A music-based social product connecting people through taste and playlists.",
    tags: ["React Native", "AI/ML", "NLP", "TensorFlow"],
    link: "https://github.com/Vishnu-Adi/Harmony",
    year: "2024",
  },
  {
    title: "StockInsight",
    description: "A real-time stock market dashboard with watchlists and technical indicators.",
    tags: ["MERN Stack", "Finnhub API", "Data Visualization"],
    link: "https://github.com/Vishnu-Adi/Stock_Market_app",
    year: "2024",
  },
  {
    title: "AnemiaSense",
    description: "An image-processing and machine-learning approach to non-invasive anemia detection.",
    tags: ["Bootstrap", "TensorFlow", "Random Forest"],
    link: "https://anemiasense.onrender.com/",
    year: "2024",
  },
  {
    title: "Expense Tracker",
    description: "A cross-platform personal finance application with local storage and reporting.",
    tags: ["Flutter", "Dart", "Hive"],
    link: "https://github.com/Vishnu-Adi/Expense_tracker",
    year: "2023",
  },
  {
    title: "Movie Recommendations",
    description: "A personalized movie recommendation system using the MERN stack and machine learning.",
    tags: ["MERN", "Python", "ML", "NLP"],
    link: "https://github.com/Vishnu-Adi/Movie_recommendation",
    year: "2023",
  },
  {
    title: "Personal Bookshelf",
    description: "A digital bookshelf for managing a reading list and tracking progress.",
    tags: ["React", "Open Library API"],
    link: "https://personal-bookshelf-hazel.vercel.app/",
    year: "2023",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  role: string;
  detail: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026 — NOW",
    title: "EmbedUR Systems",
    role: "Software Development Engineer Intern",
    detail:
      "Developing and testing embedded software components for Cisco router platforms, with C/C++ protocol work across hardware and software layers.",
    tags: ["EMBEDDED SYSTEMS", "NETWORKING", "C / C++"],
  },
  {
    year: "2025",
    title: "HPE · BNY Mellon",
    role: "Machine learning · Business analysis",
    detail:
      "Built a RoBERTa-based query classification pipeline at HPE and shipped Salesforce automation with a 30% operational-efficiency improvement at BNY Mellon.",
    tags: ["NLP", "ROBERTA", "SALESFORCE"],
  },
  {
    year: "2022 — 2026",
    title: "VIT Vellore",
    role: "B.Tech · Computer Science and Engineering",
    detail:
      "Completed a Computer Science and Engineering degree with a 9.22/10.0 CGPA, alongside web, ML and systems experiments.",
    tags: ["CSE", "ML", "WEB"],
  },
  {
    year: "2023 — 2024",
    title: "First experiments",
    role: "Web · ML · Interfaces",
    detail:
      "Built and shipped early experiments including Personal Bookshelf, Movie Recommendations, AnemiaSense, StockInsight and Harmony.",
    tags: ["REACT", "MERN", "COMPUTER VISION"],
  },
];

export type Capability = {
  index: string;
  title: string;
  statement: string;
  items: string[];
  evidence: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Systems",
    statement: "Make the invisible legible.",
    items: ["C", "C++", "Embedded systems", "Networking protocols", "Low-level debugging", "WebRTC", "OPFS"],
    evidence: "EmbedUR Systems · WebDrop",
  },
  {
    index: "02",
    title: "Intelligence",
    statement: "Turn language into useful signals.",
    items: ["Python", "PyTorch", "Scikit-learn", "XGBoost", "NLP", "RoBERTa / Transformers", "LSTM", "Isolation Forest"],
    evidence: "HPE CTY Program · Research",
  },
  {
    index: "03",
    title: "Products",
    statement: "Give complex systems a calm surface.",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Flask", "REST APIs", "Web Audio"],
    evidence: "Tutor-System · VeriScope",
  },
  {
    index: "04",
    title: "Infrastructure",
    statement: "Make the path to production less mysterious.",
    items: ["MongoDB", "MySQL", "Firebase", "AWS (EC2)", "Docker", "Dexie / IndexedDB", "CI/CD"],
    evidence: "Projects · Internships",
  },
  {
    index: "05",
    title: "Practice",
    statement: "Care about the part after the first commit.",
    items: ["Git", "GitHub", "Power BI", "Tableau", "Salesforce", "Power Automate", "MCP", "Agile"],
    evidence: "BNY Mellon · Selected work",
  },
];

export type Note = {
  index: string;
  title: string;
  dek: string;
  body: string[];
  tags: string[];
  readTime: string;
};

export const notes: Note[] = [
  {
    index: "01",
    title: "The browser is already a system.",
    dek: "WebDrop made the browser boundary impossible to ignore.",
    body: [
      "A file transfer app usually hides the difficult part behind an install, an account or a visible list of devices. Remove those layers and the platform becomes the interface: motion, audio, a data channel, storage and the small moments where a browser refuses to behave like an operating system.",
      "That is where the interesting work lives. Not in making the gesture look clever, but in making the underlying state honest enough that the gesture can remain simple.",
    ],
    tags: ["WEB APIs", "WEBRTC", "INTERFACE"],
    readTime: "01 MIN READ",
  },
  {
    index: "02",
    title: "A good interface hides complexity, not responsibility.",
    dek: "The quiet system is still accountable for what it hides.",
    body: [
      "The best interfaces do not make people manage implementation details they did not ask to manage. They still make the important state visible: what is happening, what failed, and what the system is using to make the decision.",
      "This is why deployment work matters as much as feature work. Reliability is part of the experience whether or not anyone sees the infrastructure behind it.",
    ],
    tags: ["SYSTEMS", "RELIABILITY", "DESIGN"],
    readTime: "01 MIN READ",
  },
  {
    index: "03",
    title: "Retrieval is a design decision.",
    dek: "Memory is not a feature until it can be explained.",
    body: [
      "An AI tutor becomes more interesting when it remembers the learner’s sources and progress, but persistence alone is not intelligence. The design question is what gets remembered, how it gets retrieved and how a person can correct it.",
      "A useful memory layer should leave a trace. Otherwise the system feels magical precisely where it should feel accountable.",
    ],
    tags: ["AI", "MEMORY", "RETRIEVAL"],
    readTime: "01 MIN READ",
  },
];

export const contactLinks = [
  { label: "Email", value: "vishnuadithya7@gmail.com", href: "mailto:vishnuadithya7@gmail.com" },
  { label: "GitHub", value: "github.com/Vishnu-Adi", href: "https://github.com/Vishnu-Adi" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vishnu-adithya-261477255",
    href: "https://www.linkedin.com/in/vishnu-adithya-261477255",
  },
];

export const getProject = (slug: string) => featuredProjects.find((project) => project.slug === slug);
