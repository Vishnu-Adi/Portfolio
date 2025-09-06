"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  colorClass = "from-primary to-purple-500",
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
          "p-3 rounded-lg mr-4 bg-gradient-to-br text-white shadow-sm",
          colorClass
        )}
      >
        {icon}
      </div>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
          colorClass
        )}
      >
        {title}
      </h2>
    </div>
    <div className="pl-6 border-l-2 border-gray-100">
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
}: {
  heading: string;
  subheading: string;
  period: string;
  bullets: string[];
  tags?: string[];
  highlight?: boolean;
}) => (
  <Card
    className={cn(
      "overflow-hidden mb-6 border-none shadow-lg transition-all duration-300 hover:shadow-xl",
      highlight ? "bg-gradient-to-br from-primary/10 to-purple-500/10" : "bg-white"
    )}
  >
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold">{heading}</h3>
          <p className="text-gray-600">{subheading}</p>
        </div>
        <p className="text-sm text-gray-500 flex items-center"><CalendarDays className="h-4 w-4 mr-1"/>{period}</p>
      </div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"/>{b}</li>
        ))}
      </ul>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t, i) => (
            <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">{t}</Badge>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

// --------------------
// Page
// --------------------
export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end end"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-gray-50 py-28 px-4 sm:px-6 lg:px-8">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[420px] h-[420px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MTgxOCIgb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* --- ABOUT ME (Top) --- */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I’m a final‑year CSE (Business Systems) student at VIT Vellore (CGPA 9.29) who loves turning ambiguous problems into small, reliable systems.
            I care about clean interfaces, safety in deployment, and docs that make adoption effortless. When something breaks, I enjoy walking the stack,
            instrumenting first, and letting data—not hunches—drive fixes. Outside code, I tinker with dev tools and read about behavior and learning.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Button asChild size="sm" className="shadow-sm">
              <a href="mailto:vishnuadithya7@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </motion.div>

        {/* --- INTERNSHIPS --- */}
        <Section title="Internships" icon={<Briefcase className="w-6 h-6"/>} colorClass="from-primary to-purple-500">
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
        <Section title="Research & Publications" icon={<BookOpen className="w-6 h-6"/>} colorClass="from-emerald-500 to-green-400">
          <TimelineItem
            heading="Cross‑Domain Transfer Learning for WSN Anomaly Detection"
            subheading="PLOS ONE — Submitted"
            period="2025"
            bullets={[
              "Authored and submitted a research paper detailing a novel anomaly‑detection framework to the PLOS ONE journal.",
              "Developed a hybrid Isolation Forest/LSTM model to address cross‑domain transfer learning challenges in IoT/WSN networks.",
            ]}
            tags={["PLOS ONE (submitted)", "Isolation Forest", "LSTM", "IoT", "Transfer Learning"]}
            highlight
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

        {/* --- EDUCATION ONLY (no skills) --- */}
        <Section title="Education" icon={<GraduationCap className="w-6 h-6"/>} colorClass="from-blue-500 to-cyan-400">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">VIT Vellore</h3>
                  <p className="text-gray-600">B.Tech — Computer Science & Engineering (Business Systems)</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Final Year</div>
                  <div className="text-sm font-semibold">CGPA 9.29</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>

      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
    </div>
  );
}
