import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { RESUME_URL } from "@/lib/site";

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
  location,
  period,
  description,
  tech,
}: {
  role: string;
  company: string;
  location?: string;
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

    <h4 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">
      {company}
      {location && (
        <span className="ml-2 font-mono text-sm font-normal text-zinc-400">
          · {location}
        </span>
      )}
    </h4>

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
  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24">
      {/* Hero Bio */}
      <section className="mb-32">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.8]">
          ABOUT
          <span className="text-red-500">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 text-xl md:text-2xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-8">
            <p>
              I’m a software engineer and machine learning builder with a B.Tech in Computer Science and Engineering from <span className="font-bold text-black dark:text-white">VIT Vellore</span> (CGPA: 9.22/10.0).
            </p>
            <p>
              I build reliable systems across embedded networking, NLP, Salesforce automation, and modern web and AI products. My recent work includes Cisco router software, RoBERTa-based classification, browser-native peer-to-peer file transfer, and an AI tutor with semantic learner memory. I care about clean interfaces, careful deployments, and documentation that makes systems easier to use and maintain.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 font-mono text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>India</span>
            </div>
            <a href="mailto:vishnuadithya7@gmail.com" className="flex items-center gap-3 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4 text-red-500" />
              <span className="break-all">vishnuadithya7@gmail.com</span>
            </a>
            <a href="tel:+919176376376" className="flex items-center gap-3 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4 text-red-500" />
              <span>9176376376</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
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
            role="Software Development Engineer Intern"
            company="EmbedUR Systems"
            location="Chennai, Tamil Nadu"
            period="Jan 2026 – Present"
            description={[
              "Develop and test embedded software components for Cisco router platforms as part of a cross-functional systems team, working across hardware and software layers.",
              "Implement and validate networking protocol features in C/C++, debugging low-level packet-handling logic and partnering with senior engineers on code reviews to ensure correctness before release.",
            ]}
            tech={["C", "C++", "Embedded Systems", "Networking Protocols", "Cisco"]}
          />

          <ExperienceItem
            role="Business Analyst and Developer Intern"
            company="Bank of New York Mellon"
            location="Chennai, Tamil Nadu"
            period="May 2025 – Jul 2025"
            description={[
              "Designed and shipped Salesforce automation solutions by analyzing client requirements, boosting operational efficiency by 30% and cutting manual processing time for internal workflows.",
              "Managed zero-downtime deployments for critical Salesforce updates and resolved functional issues for internal teams, maintaining system uptime through release cycles.",
            ]}
            tech={["Salesforce", "Automation", "Zero-Downtime Deployments", "Process Improvement"]}
          />

          <ExperienceItem
            role="Machine Learning Intern, CTY Program"
            company="Hewlett Packard Enterprise"
            location="Remote"
            period="Jan 2025 – May 2025"
            description={[
              "Architected an NLP pipeline for a Query Classification System that routed complex, unstructured queries from financial reports, cutting manual triage effort for the analytics team.",
              "Engineered the classification engine with fine-tuned RoBERTa and ML ensemble models, achieving 97.3% accuracy on automated sentiment and topic analysis.",
            ]}
            tech={["NLP", "RoBERTa", "Transformers", "Ensemble Learning", "Model Evaluation"]}
          />
        </div>
      </section>

      {/* Research */}
      <section className="mb-32">
        <SectionHeader title="Research" number="02" />
        <div className="space-y-12">
          <ExperienceItem
            role="Cross-Domain Transfer Learning for WSN Anomaly Detection"
            company="PLOS ONE"
            period="Under review"
            description={[
              "Authored a research paper proposing a hybrid Isolation Forest/LSTM framework to address cross-domain transfer learning challenges in IoT wireless sensor networks.",
            ]}
            tech={["Isolation Forest", "LSTM", "IoT", "Transfer Learning"]}
          />
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader title="Education" number="03" />
        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border border-black dark:border-white">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
            <div>
              <h3 className="text-3xl font-black mb-2">VIT Vellore</h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                B.Tech — Computer Science and Engineering
              </p>
              <p className="mt-2 font-mono text-sm text-zinc-500">
                Vellore, India · Aug 2022 – May 2026
              </p>
            </div>
            <div className="md:text-right">
              <div className="font-mono text-sm text-zinc-500 mb-1">CGPA</div>
              <div className="text-4xl font-black text-red-500">
                9.22<span className="text-lg text-zinc-500">/10</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
