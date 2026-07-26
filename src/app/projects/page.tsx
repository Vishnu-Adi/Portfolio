"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    title: "WebDrop",
    description: "Browser-native peer-to-peer file sharing with no native install or manual device selection. Uses device motion and ultrasonic Web Audio pairing, then streams files over WebRTC data channels with chunked OPFS storage.",
    tags: ["JavaScript", "WebRTC", "OPFS", "Web Audio"],
    link: "https://web-drop-lyart.vercel.app/",
    github: "https://github.com/Vishnu-Adi/WebDrop",
    year: "2026"
  },
  {
    title: "Tutor-System",
    description: "AI learning platform with function-calling tools, realtime voice tutoring, source-aware PDF chat, and an auditable learner-memory layer with embeddings and mastery tracking.",
    tags: ["TypeScript", "React", "OpenRouter", "Deepgram"],
    link: "https://tutor-system-architecture.vercel.app/",
    github: "https://github.com/Vishnu-Adi/Tutor-System",
    year: "2026"
  }
];

const archive = [
  {
    title: "VeriScope",
    description: "Unbiased AI News Aggregator. Developed a platform using Python and Next.js to analyze and neutralize media bias. Implemented algorithms to provide balanced information and designed a responsive UI with data visualizations for bias scores.",
    tags: ["Next.js", "Python", "AI/ML", "NLP"],
    link: "https://github.com/Vishnu-Adi/VeriScope",
    github: "https://github.com/Vishnu-Adi/VeriScope",
    year: "2025"
  },
  {
    title: "LexiFlow",
    description: "AI Reading Coach Chrome Extension. Engineered a client-side tool using NLP models (XGBoost/BERT) to analyze and simplify complex web text. Integrated eye-tracking for dynamic UX and Text-to-Speech for accessibility.",
    tags: ["Chrome Ext", "NLP", "BERT", "XGBoost"],
    link: "https://github.com/Vishnu-Adi/LexiFlow",
    github: "https://github.com/Vishnu-Adi/LexiFlow",
    year: "2025"
  },
  {
    title: "Privacy-Preserving Micropayment",
    description: "A two-party micropayment channel prototype that keeps per-update payment amounts private using additively homomorphic commitments. Combines Python FastAPI backend with Next.js 14 frontend.",
    tags: ["Next.js", "FastAPI", "Cryptography", "Python"],
    link: "https://github.com/Vishnu-Adi/homomorphic-hash-micropayment-channel.git",
    github: "https://github.com/Vishnu-Adi/homomorphic-hash-micropayment-channel.git",
    year: "2025"
  },
  {
    title: "RFID Optimization",
    description: "Optimizing the placement of RFID tags within a grid-based environment to maximize coverage while minimizing deployment costs using Genetic Algorithm (GA) and Particle Swarm Optimization (PSO).",
    tags: ["Genetic Algo", "PSO", "Optimization", "Python"],
    link: "https://github.com/Vishnu-Adi/RFID_Project.git",
    github: "https://github.com/Vishnu-Adi/RFID_Project.git",
    year: "2025"
  },
  {
    title: "Harmony",
    description: "Music-based social networking app connecting users through musical tastes. Features AI-powered music recommendations and collaborative playlists to foster community.",
    tags: ["React Native", "AI/ML", "NLP", "TensorFlow"],
    link: "https://github.com/Vishnu-Adi/Harmony",
    github: "https://github.com/Vishnu-Adi/Harmony",
    year: "2024"
  },
  {
    title: "StockInsight",
    description: "Real-Time Stock Market Dashboard. A comprehensive full-stack analysis platform providing real-time financial data, portfolio management, custom watchlists, and technical indicators like RSI and Moving Averages.",
    tags: ["MERN Stack", "Finnhub API", "Data Viz"],
    link: "https://github.com/Vishnu-Adi/Stock_Market_app",
    github: "https://github.com/Vishnu-Adi/Stock_Market_app",
    year: "2024"
  },
  {
    title: "AnemiaSense",
    description: "AI-based mobile application using image processing and machine learning (Random Forest) to detect anemia in patients through non-invasive methods.",
    tags: ["Bootstrap", "TensorFlow", "Random Forest"],
    link: "https://anemiasense.onrender.com/",
    github: "https://github.com/Vishnu-Adi/Anemia_Sense",
    year: "2024"
  },
  {
    title: "Expense Tracker",
    description: "Cross-platform application for managing personal finances. Features expense categorization, visual summaries, report generation, and local storage using Hive.",
    tags: ["Flutter", "Dart", "Hive"],
    link: "https://github.com/Vishnu-Adi/Expense_tracker",
    github: "https://github.com/Vishnu-Adi/Expense_tracker",
    year: "2023"
  },
  {
    title: "Movie Recs",
    description: "Personalized movie recommendation system using the MERN stack and machine learning algorithms to provide tailored suggestions based on user preferences.",
    tags: ["MERN", "Python", "ML", "NLP"],
    link: "https://github.com/Vishnu-Adi/Movie_recommendation",
    github: "https://github.com/Vishnu-Adi/Movie_recommendation",
    year: "2023"
  },
  {
    title: "Personal Bookshelf",
    description: "A digital bookshelf application that allows users to manage their reading list, discover new books, and track their reading progress.",
    tags: ["React", "Open Library API"],
    link: "https://personal-bookshelf-hazel.vercel.app/",
    github: "https://github.com/Vishnu-Adi/personal-bookshelf.git",
    year: "2023"
  }
];

function hasLiveDemo(project) {
  return project.link && project.link !== "#" && project.link !== project.github;
}

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const tags = useMemo(() => {
    const set = new Set();
    archive.forEach(p => p.tags.forEach(t => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return archive;
    return archive.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b-2 border-black dark:border-white pb-8"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          WORK
          <span className="text-red-500">.</span>
        </h1>
        <p className="text-xl max-w-2xl font-medium text-zinc-600 dark:text-zinc-400">
          Selected projects, internships, and research aligned with my current resume.
        </p>
      </motion.header>

      {/* FEATURED */}
      <section className="mb-24">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
            Featured Builds
          </h2>
          <span className="text-sm font-mono text-zinc-400">
            {featured.length} of {featured.length + archive.length}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-black dark:border-white p-8 md:p-10 min-h-[380px] flex flex-col justify-between"
            >
              <span className="pointer-events-none select-none absolute -right-4 -top-10 text-[11rem] font-black leading-none tracking-tighter text-zinc-100 dark:text-zinc-900 transition-colors group-hover:text-red-50 dark:group-hover:text-red-950/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-red-500">Featured</span>
                  <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                  {hasLiveDemo(project) && (
                    <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-black dark:border-white rounded-full text-xs font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {hasLiveDemo(project) && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:scale-105 transition-transform"
                    >
                      View Live
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ARCHIVE — filterable expandable index */}
      <section>
        <div className="flex flex-col gap-6 mb-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-baseline justify-between pt-8">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
              Archive
            </h2>
            <span className="text-sm font-mono text-zinc-400">{filtered.length} shown</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-colors ${
                  activeTag === tag
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-black dark:hover:border-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <AnimatePresence initial={false}>
            {filtered.map((project) => {
              const isOpen = expanded === project.title;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b border-zinc-200 dark:border-zinc-800"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : project.title)}
                    className="w-full flex items-center gap-4 py-6 text-left group"
                  >
                    <span className="text-xs font-mono text-zinc-400 w-12 shrink-0">
                      {project.year}
                    </span>

                    <span className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red-500 transition-colors flex-1">
                      {project.title}
                    </span>

                    <span className="hidden md:flex gap-2 mr-4">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-16 pr-4 flex flex-col gap-5">
                          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-2.5 py-1 border border-black dark:border-white rounded-full text-[10px] font-mono uppercase tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            {hasLiveDemo(project) && (
                              <Link
                                href={project.link}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black text-xs font-medium hover:scale-105 transition-transform"
                              >
                                View Live
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            )}
                            <Link
                              href={project.github}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black dark:border-white text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                            >
                              <Github className="w-3.5 h-3.5" />
                              Source
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}