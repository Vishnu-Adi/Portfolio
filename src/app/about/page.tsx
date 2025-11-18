"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  GraduationCap,
  Mail,
  BookOpen,
  Download,
  MapPin,
} from "lucide-react";

// --------------------
// Components
// --------------------
const SectionHeader = ({ title, number }: { title: string; number: string }) => (
  <div className="flex items-baseline gap-4 mb-12 border-b-2 border-black dark:border-white pb-4">
    <span className="font-mono text-red-500 text-sm font-bold">{number}</span>
    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
      {title}
    </h2>
  </div>
);

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  tech,
}: {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}) => (
  <div className="group relative pl-8 border-l border-zinc-300 dark:border-zinc-700 last:border-0 pb-12 last:pb-0">
    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black dark:bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
    
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
      <h3 className="text-2xl font-bold">{role}</h3>
      <span className="font-mono text-sm text-zinc-500">{period}</span>
    </div>
    
    <h4 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">{company}</h4>
    
    <ul className="space-y-3 mb-6">
      {description.map((item, i) => (
        <li key={i} className="flex items-start text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <ArrowRight className="w-4 h-4 mr-3 mt-1.5 text-red-500 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-mono uppercase tracking-wide">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default function AboutPage() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="min-h-screen pt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24">
      
      {/* Hero Bio */}
      <section className="mb-32">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.8]">
          ABOUT
          <span className="text-red-500">.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 text-xl md:text-2xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-8">
            <p>
              I’m a final‑year CSE (Business Systems) student at <span className="font-bold text-black dark:text-white">VIT Vellore</span> (CGPA 9.29) who loves turning ambiguous problems into small, reliable systems.
            </p>
            <p>
              I care about clean interfaces, safety in deployment, and docs that make adoption effortless. When something breaks, I enjoy walking the stack, instrumenting first, and letting data—not hunches—drive fixes.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-6 font-mono text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Vellore, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-red-500" />
              <a href="mailto:vishnuadithya7@gmail.com" className="hover:text-red-500 transition-colors">vishnuadithya7@gmail.com</a>
            </div>
            <a 
              href="/resume.pdf" // Update with actual resume path if available
              className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-3 px-4 font-bold hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-32">
        <SectionHeader title="Experience" number="01" />
        <div className="space-y-12">
          <ExperienceItem
            role="Salesforce Intern (BA + Dev)"
            company="BNY Mellon"
            period="Summer 2025"
            description={[
              "Analyzed requirements and shipped Salesforce automations; improved resolution/ops efficiency by ~30%.",
              "Planned & executed a zero‑downtime destructive deployment: dependency matrix, rollback plan, and CI/CD scripts.",
              "Built custom objects, Apex triggers, and Lightning flows; collaborated across product/engineering."
            ]}
            tech={["Salesforce", "Apex", "Lightning", "CI/CD", "Reliability"]}
          />
          
          <ExperienceItem
            role="Software Intern"
            company="SRM Technologies"
            period="Jun–Jul 2024"
            description={[
              "Developed Flask APIs and backend for a client‑facing web app.",
              "Automated Python ETL pipelines; created Power BI dashboards used in client meetings.",
              "Worked with Power Automate and MySQL for data workflows."
            ]}
            tech={["Flask", "Python", "Power BI", "MySQL"]}
          />

          <ExperienceItem
            role="Web/App Developer Intern"
            company="Nereus Technologies"
            period="Jul 2024"
            description={[
              "Built nereustechnologies.com with React, Tailwind, and TypeScript.",
              "Contributed to a cross‑platform React Native app; integrated Firebase for multi‑platform data sync."
            ]}
            tech={["React", "Tailwind", "TypeScript", "React Native", "Firebase"]}
          />
        </div>
      </section>

      {/* Research */}
      <section className="mb-32">
        <SectionHeader title="Research" number="02" />
        <div className="space-y-12">
          <ExperienceItem
            role="Researcher (Anomaly Detection)"
            company="PLOS ONE (Submitted)"
            period="2025"
            description={[
              "Authored and submitted a research paper detailing a novel anomaly‑detection framework.",
              "Developed a hybrid Isolation Forest/LSTM model to address cross‑domain transfer learning challenges in IoT/WSN networks."
            ]}
            tech={["Isolation Forest", "LSTM", "IoT", "Transfer Learning"]}
          />
          
          <ExperienceItem
            role="NLP Lead"
            company="HPE CTY Program"
            period="2024–2025"
            description={[
              "Led model design and evaluation; reached ~97.3% classification accuracy.",
              "Built an ensemble around RoBERTa; documented metrics and instrumentation.",
              "Focused on clarity, safety, and reproducibility with well‑structured experiments."
            ]}
            tech={["NLP", "RoBERTa", "Ensembles", "Evaluation"]}
          />
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader title="Education" number="03" />
        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border border-black dark:border-white">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <h3 className="text-3xl font-black mb-2">VIT Vellore</h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">B.Tech — CSE (Business Systems)</p>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-zinc-500 mb-1">CGPA</div>
              <div className="text-4xl font-black text-red-500">9.29</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
