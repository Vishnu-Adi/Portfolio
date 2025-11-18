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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --------------------
// Mini UI building blocks
// --------------------
const Section = ({
  title,
  icon,
  children,
  colorClass = "bg-neo-yellow",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  colorClass?: string;
}) => (
  <div className="mb-24 relative">
    <div className="flex items-center mb-8">
      <div
        className={cn(
          "p-4 mr-4 border-2 border-neo-black shadow-neo",
          colorClass
        )}
      >
        {icon}
      </div>
      <h2
        className="text-4xl md:text-5xl font-black uppercase tracking-tight text-neo-black"
      >
        {title}
      </h2>
    </div>
    <div className="pl-8 border-l-4 border-neo-black ml-6">
      {children}
    </div>
  </div>
);

const TimelineItem = ({
  heading,
  subheading,
  period,
  bullets,
  tags,
  highlight = false,
  highlightColor = "bg-neo-white"
}: {
  heading: string;
  subheading: string;
  period: string;
  bullets: string[];
  tags?: string[];
  highlight?: boolean;
  highlightColor?: string;
}) => (
  <div className="relative mb-10 ml-4">
      <div className="absolute -left-[46px] top-6 w-5 h-5 bg-neo-black border-2 border-neo-white" />
      
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300",
          highlight ? highlightColor : "bg-white"
        )}
      >
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold leading-tight">{heading}</h3>
              <p className="text-lg font-medium text-gray-700 mt-1">{subheading}</p>
            </div>
            <div className="flex items-center px-3 py-1 bg-neo-black text-neo-white font-mono text-sm font-bold whitespace-nowrap border-2 border-transparent">
                <CalendarDays className="h-4 w-4 mr-2"/>{period}
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-800 font-medium">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-neo-black mr-2 mt-0.5 flex-shrink-0 stroke-[3px]"/>
                {b}
              </li>
            ))}
          </ul>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t-2 border-neo-black/10">
              {tags.map((t, i) => (
                <Badge key={i} variant="neo" className="hover:scale-105 transition-transform cursor-default">
                    {t}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
  </div>
);

// --------------------
// Page
// --------------------
export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end end"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={rootRef} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* --- ABOUT ME (Top) --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <Badge className="mb-4 text-lg px-4 py-1 bg-neo-black text-neo-white hover:bg-neo-black">PROFILE</Badge>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">
            About Me
          </h1>
          <Card className="bg-neo-yellow p-8 md:p-12 rotate-1 border-4">
             <p className="text-xl md:text-2xl font-bold leading-relaxed text-left">
                I’m a final‑year CSE (Business Systems) student at VIT Vellore (CGPA 9.29) who loves turning ambiguous problems into small, reliable systems.
                I care about clean interfaces, safety in deployment, and docs that make adoption effortless. When something breaks, I enjoy walking the stack,
                instrumenting first, and letting data—not hunches—drive fixes.
              </p>
          </Card>
          
          <div className="mt-12 flex items-center justify-center">
            <Button asChild size="lg" className="text-lg h-14 px-8 bg-neo-blue text-white border-2 border-neo-black shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-neo-blue">
              <a href="mailto:vishnuadithya7@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6 mr-3" />
                Get in Touch
              </a>
            </Button>
          </div>
        </motion.div>

        {/* --- INTERNSHIPS --- */}
        <Section title="Experience" icon={<Briefcase className="w-8 h-8 text-neo-black"/>} colorClass="bg-neo-pink">
          <TimelineItem
            heading="BNY Mellon — Salesforce (BA + Developer) Intern"
            subheading="Enterprise automations & platform reliability"
            period="Summer 2025"
            bullets={[
              "Analyzed requirements and shipped Salesforce automations; improved resolution/ops efficiency by ~30%.",
              "Planned & executed a zero‑downtime destructive deployment: dependency matrix, rollback plan, and CI/CD scripts.",
              "Built custom objects, Apex triggers, and Lightning flows; collaborated across product/engineering.",
            ]}
            tags={["Salesforce", "Apex", "Lightning", "CI/CD", "Reliability"]}
            highlight
            highlightColor="bg-neo-white"
          />

          <TimelineItem
            heading="SRM Technologies — Software Intern"
            subheading="Flask backend • Data automation • Client reporting"
            period="Jun–Jul 2024"
            bullets={[
              "Developed Flask APIs and backend for a client‑facing web app.",
              "Automated Python ETL pipelines; created Power BI dashboards used in client meetings.",
              "Worked with Power Automate and MySQL for data workflows.",
            ]}
            tags={["Flask", "Python", "Power BI", "Power Automate", "MySQL"]}
          />

          <TimelineItem
            heading="Nereus Technologies — Web/App Developer Intern"
            subheading="Shipped company website; React Native app front‑end"
            period="Jul 2024"
            bullets={[
              "Built nereustechnologies.com with React, Tailwind, and TypeScript.",
              "Contributed to a cross‑platform React Native app; integrated Firebase for multi‑platform data sync.",
            ]}
            tags={["React", "Tailwind", "TypeScript", "React Native", "Firebase"]}
          />
        </Section>

        {/* --- RESEARCH & PUBLICATIONS --- */}
        <Section title="Research" icon={<BookOpen className="w-8 h-8 text-neo-black"/>} colorClass="bg-neo-green">
          <TimelineItem
            heading="Cross‑Domain Transfer Learning for WSN Anomaly Detection"
            subheading="PLOS ONE — Submitted"
            period="2025"
            bullets={[
              "Authored and submitted a research paper detailing a novel anomaly‑detection framework to the PLOS ONE journal.",
              "Developed a hybrid Isolation Forest/LSTM model to address cross‑domain transfer learning challenges in IoT/WSN networks.",
            ]}
            tags={["PLOS ONE", "Isolation Forest", "LSTM", "IoT", "Transfer Learning"]}
            highlight
            highlightColor="bg-neo-white"
          />

          <TimelineItem
            heading="HPE CTY Program — NLP Lead"
            subheading="Query‑classification system (RoBERTa + ensemble)"
            period="2024–2025"
            bullets={[
              "Led model design and evaluation; reached ~97.3% classification accuracy.",
              "Built an ensemble around RoBERTa; documented metrics and instrumentation.",
              "Focused on clarity, safety, and reproducibility with well‑structured experiments.",
            ]}
            tags={["NLP", "RoBERTa", "Ensembles", "Evaluation"]}
          />
        </Section>

        {/* --- EDUCATION --- */}
        <Section title="Education" icon={<GraduationCap className="w-8 h-8 text-neo-black"/>} colorClass="bg-neo-blue">
          <Card className="border-2 border-neo-black shadow-neo ml-6 bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black uppercase">VIT Vellore</h3>
                  <p className="text-xl font-medium text-gray-700 mt-2">B.Tech — CSE (Business Systems)</p>
                </div>
                <div className="md:text-right bg-neo-black text-neo-white p-4">
                  <div className="text-sm font-mono uppercase tracking-wider mb-1">Final Year</div>
                  <div className="text-3xl font-bold text-neo-yellow">CGPA 9.29</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>

      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-neo-black z-[60] origin-left" style={{ scaleX }} />
    </div>
  );
}
