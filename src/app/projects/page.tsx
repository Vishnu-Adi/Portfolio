"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 border-b-2 border-black dark:border-white pb-8"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          WORK
          <span className="text-red-500">.</span>
        </h1>
        <p className="text-xl max-w-2xl font-medium text-zinc-600 dark:text-zinc-400">
          Selected projects and experiments.
        </p>
      </motion.header>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-b border-zinc-200 dark:border-zinc-800 py-12 md:py-20 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 font-mono text-sm text-zinc-500 pt-2">
                {project.year}
              </div>
              
              <div className="md:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-black dark:border-white rounded-full text-xs font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex md:justify-end gap-4 pt-2">
                {project.github && (
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full border border-transparent hover:border-black dark:hover:border-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                )}
                {project.link && project.link !== "#" && (
                  <Link 
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
