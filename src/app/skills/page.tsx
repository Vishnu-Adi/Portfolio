"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layers,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SkillItem = ({ name }: { name: string }) => (
  <div className="group flex items-center justify-between border-b border-black/10 dark:border-white/10 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-4 transition-colors cursor-default">
    <span className="font-mono text-lg group-hover:translate-x-2 transition-transform duration-300">
      {name}
    </span>
  </div>
);

const SkillCategory = ({
  title,
  items,
  icon: Icon,
  className,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
  className?: string;
}) => (
  <div className={cn("border-2 border-black dark:border-white p-0 hover:shadow-brutal transition-shadow duration-300 bg-white dark:bg-black h-full flex flex-col", className)}>
    <div className="border-b-2 border-black dark:border-white p-4 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between gap-4">
      <h3 className="font-black text-xl uppercase tracking-tight flex items-center gap-2">
        <Icon className="w-5 h-5 flex-shrink-0" />
        {title}
      </h3>
      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
    </div>
    <div className="flex-1">
      {items.map((item) => (
        <SkillItem key={item} name={item} />
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const categories = [
    {
      title: "Languages",
      icon: Code2,
      items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "R", "Swift", "HTML/CSS"],
    },
    {
      title: "Machine Learning & Data Science",
      icon: Brain,
      items: [
        "PyTorch",
        "Scikit-learn",
        "XGBoost",
        "NLP",
        "RoBERTa/Transformers",
        "LSTM",
        "Isolation Forest",
        "Model Fine-Tuning",
        "Predictive Modeling",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      items: ["React", "Next.js", "Node.js", "Express", "Flask", "WebRTC", "REST APIs"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      items: ["MongoDB", "MySQL", "Firebase", "AWS (EC2)", "Docker", "Dexie/IndexedDB"],
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      items: [
        "Git",
        "GitHub",
        "Power BI",
        "Tableau",
        "Salesforce",
        "Power Automate",
        "CI/CD",
        "MCP",
        "Agile",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12">
      {/* Header */}
      <motion.header style={{ y: headerY, opacity: headerOpacity }} className="mb-24 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-1 bg-red-500 hidden xl:block" />
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6">
          SKILLS
          <span className="text-red-500">.</span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-8 border-t-2 border-black dark:border-white pt-8">
          <p className="text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
            A practical stack for building reliable software, machine learning systems, and production-ready AI products. Focused on <span className="underline decoration-red-500 decoration-4 underline-offset-4">Machine Learning</span> and <span className="underline decoration-red-500 decoration-4 underline-offset-4">Software Engineering</span>.
          </p>
          <div className="ml-auto font-mono text-sm text-zinc-500 dark:text-zinc-400 text-right">
            <p>PROFILE: SWE / ML</p>
            <p>LAST_UPDATED: SEP_2026</p>
          </div>
        </div>
      </motion.header>

      {/* Marquee Section */}
      <div className="mb-24 overflow-hidden border-y-2 border-black dark:border-white py-6 bg-black dark:bg-white text-white dark:text-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-4xl font-black mx-8">PYTHON</span>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-4xl font-black mx-8">C / C++</span>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-4xl font-black mx-8">MACHINE LEARNING</span>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-4xl font-black mx-8">REACT / NEXT.JS</span>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-4xl font-black mx-8">SALESFORCE / CI-CD</span>
              <span className="w-3 h-3 bg-red-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(index < 2 ? "lg:col-span-3" : "lg:col-span-2")}
          >
            <SkillCategory
              title={category.title}
              items={category.items}
              icon={category.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
