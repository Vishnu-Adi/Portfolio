"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Phone,
  Award,
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 bg-white/80 backdrop-blur-sm">
    {children}
  </span>
);

// --------------------
// Page
// --------------------
export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end end"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skills = useMemo(
    () => ({
      Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
      Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui"],
      Backend: ["Flask", "Node.js", "Express", "REST APIs"],
      Data_Cloud: ["Power BI", "Firebase", "MySQL"],
      Platforms: ["Salesforce (Apex, Flows, LWC)", "CI/CD"],
      Practices: ["Testing & Observability", "Clean APIs", "Docs-first"],
    }),
    []
  );

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
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-purple-500 text-white grid place-items-center shadow-md">
                <span className="text-3xl font-bold">VA</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Vishnu Adithya
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              Final‑year CSE (Business Systems) @ VIT Vellore — CGPA 9.29. I build reliable, developer‑first products with clean APIs, strong abstractions, and great DX.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="sm" className="shadow-sm">
                <a href="mailto:vishnuadithya7@gmail.com" aria-label="Email Vishnu"><Mail className="h-4 w-4 mr-1"/> Email</a>
              </Button>
              <Button asChild variant="secondary" size="sm" className="shadow-sm">
                <a href="https://www.linkedin.com/in/vishnu-adithya-261477255" target="_blank" rel="noreferrer noopener"><Linkedin className="h-4 w-4 mr-1"/> LinkedIn</a>
              </Button>
              <Button asChild variant="outline" size="sm" className="shadow-sm">
                <a href="https://github.com/Vishnu-Adi" target="_blank" rel="noreferrer noopener"><Github className="h-4 w-4 mr-1"/> GitHub</a>
              </Button>
              <Pill><Phone className="h-4 w-4 mr-1"/> +91 91763 76376</Pill>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
              {[{label: "CGPA", value: "9.29"}, {label: "Internships", value: "3"}, {label: "Programs", value: "1"}, {label: "Papers", value: "—"}].map((s, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience - Internships */}
        <Section title="Internships" icon={<Briefcase className="w-6 h-6"/>} colorClass="from-primary to-purple-500">
          <TimelineItem
            heading="BNY Mellon — Salesforce (BA + Developer) Intern"
            subheading="Enterprise automations & platform reliability"
            period="Summer 2025"
            bullets={[
              "Analyzed requirements and shipped Salesforce automations; improved resolution/ops efficiency by ~30%.",
              "Planned & executed a zero‑downtime destructive deployment: dependency matrix, rollback plan, and CI/CD scripts.",
              "Built custom objects, Apex triggers, and Lightning flows; collaborated across product/engineering."
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
              "Worked with Power Automate and MySQL for data workflows."
            ]}
            tags={["Flask", "Python", "Power BI", "Power Automate", "MySQL"]}
          />

          <TimelineItem
            heading="Nereus Technologies — Web/App Developer Intern"
            subheading="Shipped company website; React Native app front‑end"
            period="Jul 2024"
            bullets={[
              "Built nereustechnologies.com with React, Tailwind, and TypeScript.",
              "Contributed to a cross‑platform React Native app; integrated Firebase for multi‑platform data sync."
            ]}
            tags={["React", "Tailwind", "TypeScript", "React Native", "Firebase"]}
          />
        </Section>

        {/* Research */}
        <Section title="Research & Programs" icon={<BookOpen className="w-6 h-6"/>} colorClass="from-emerald-500 to-green-400">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">HPE CTY Program — NLP Lead</h3>
                  <p className="text-gray-600">Query‑classification system (RoBERTa + ensemble)</p>
                </div>
                <p className="text-sm text-gray-500 flex items-center"><CalendarDays className="h-4 w-4 mr-1"/>2024–2025</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start"><ArrowRight className="h-5 w-5 text-emerald-600 mr-2 mt-0.5"/>Led model design and evaluation; reached ~97.3% classification accuracy.</li>
                <li className="flex items-start"><ArrowRight className="h-5 w-5 text-emerald-600 mr-2 mt-0.5"/>Built an ensemble around RoBERTa; documented metrics and instrumentation.</li>
                <li className="flex items-start"><ArrowRight className="h-5 w-5 text-emerald-600 mr-2 mt-0.5"/>Focused on clarity, safety, and reproducibility with well‑structured experiments.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["NLP", "RoBERTa", "Ensembles", "Evaluation"].map((t) => (
                  <Badge key={t} variant="secondary" className="bg-gray-100 text-gray-800">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Education & Skills */}
        <Section title="Education & Skills" icon={<GraduationCap className="w-6 h-6"/>} colorClass="from-blue-500 to-cyan-400">
          <div className="grid md:grid-cols-2 gap-6">
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
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {Object.entries(skills).map(([k, vals]) => (
                    <div key={k}>
                      <div className="text-sm font-semibold text-gray-700 mb-2">{k.replace("_", " & ")}</div>
                      <div className="flex flex-wrap gap-2">
                        {vals.map((v) => (
                          <Badge key={v} variant="outline" className="text-gray-700">{v}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2"><Award className="h-5 w-5"/><h3 className="text-xl font-semibold">What I optimize for</h3></div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><Sparkles className="h-5 w-5 text-blue-600 mr-2 mt-0.5"/>Developer Experience: clean APIs, great docs, and fast onboarding.</li>
                  <li className="flex items-start"><Sparkles className="h-5 w-5 text-blue-600 mr-2 mt-0.5"/>Reliability: tests, observability, and safe deployments.</li>
                  <li className="flex items-start"><Sparkles className="h-5 w-5 text-blue-600 mr-2 mt-0.5"/>Learning velocity: new stacks, clear interfaces, and measurable impact.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* About me (personal) */}
        <Section title="About Me" icon={<Award className="w-6 h-6"/>} colorClass="from-violet-500 to-purple-500">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                I like turning ambiguous problems into small, composable systems and writing the docs and tests that make them easy to adopt. I’m comfortable reading unfamiliar APIs, debugging tricky edge‑cases, and collaborating with product & customers. Outside of work, I enjoy exploring new dev tools, fine‑tuning my editor/keyboard setup, and reading about behavioral science and languages.
              </p>
            </CardContent>
          </Card>
        </Section>
      </div>

      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
    </div>
  );
}
