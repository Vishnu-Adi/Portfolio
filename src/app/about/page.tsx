import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ResearchVisual } from "@/components/research-visual";
import { timeline } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Profile — Vishnu Adithya",
  description: "The profile, experience, research and education of software engineer and machine learning builder Vishnu Adithya.",
};

const experience = [
  {
    period: "JAN 2026 — PRESENT",
    role: "Software Development Engineer Intern",
    company: "EmbedUR Systems · Chennai, Tamil Nadu",
    detail: "Develop and test embedded software components for Cisco router platforms as part of a cross-functional systems team, working across hardware and software layers. Implement and validate networking protocol features in C/C++, debugging low-level packet-handling logic and partnering with senior engineers on code reviews before release.",
    tags: ["C / C++", "EMBEDDED SYSTEMS", "NETWORKING PROTOCOLS", "CISCO"],
  },
  {
    period: "MAY 2025 — JUL 2025",
    role: "Business Analyst and Developer Intern",
    company: "Bank of New York Mellon · Chennai, Tamil Nadu",
    detail: "Designed and shipped Salesforce automation solutions by analyzing client requirements, improving operational efficiency by 30% and cutting manual processing time. Managed zero-downtime deployments for critical updates and resolved functional issues across release cycles.",
    tags: ["SALESFORCE", "AUTOMATION", "ZERO-DOWNTIME DEPLOYMENTS", "PROCESS IMPROVEMENT"],
  },
  {
    period: "JAN 2025 — MAY 2025",
    role: "Machine Learning Intern, CTY Program",
    company: "Hewlett Packard Enterprise · Remote",
    detail: "Architected an NLP pipeline for a query classification system routing complex, unstructured queries from financial reports. Engineered the classification engine with fine-tuned RoBERTa and ML ensemble models, reaching 97.3% accuracy on sentiment and topic analysis.",
    tags: ["NLP", "ROBERTA", "TRANSFORMERS", "ENSEMBLE LEARNING"],
  },
];

export default function AboutPage() {
  return (
    <div className="profile-page">
      <section className="profile-hero page-frame">
        <p className="profile-hero__index">02 / PROFILE</p>
        <div>
          <h1 className="profile-hero__statement display">I like understanding <em>how things work.</em></h1>
          <p className="profile-hero__copy">
            I&apos;m a software engineer and machine learning builder with a B.Tech in Computer Science and Engineering from VIT Vellore. My work moves between embedded networking, NLP pipelines, Salesforce automation, browser-native systems and AI products.
          </p>
          <p className="profile-meta mono">
            <span>VIT VELLORE / CSE</span>
            <span>CGPA 9.22 / 10.0</span>
            <span>CHENNAI — INDIA</span>
          </p>
          <div className="intro-links">
            <Link className="text-link" href="/projects">See selected work <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
            <Link className="text-link" href="/#contact">Get in touch <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
          </div>
        </div>
      </section>

      <section className="timeline-section page-frame">
        <div className="section-heading">
          <h2 className="display">A timeline, not a CV.</h2>
          <span className="section-heading__count">THE ROUTE HERE / 2023 — NOW</span>
        </div>
        <div className="timeline">
          {timeline.map((entry) => (
            <article className="timeline-entry" key={entry.year + entry.title}>
              <p className="timeline-entry__year">{entry.year}</p>
              <div>
                <h3 className="timeline-entry__title">{entry.title}</h3>
                <p className="timeline-entry__role">{entry.role}</p>
                <p className="timeline-entry__detail">{entry.detail}</p>
                <p className="timeline-entry__tags">
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section page-frame">
        <div className="section-heading">
          <h2 className="display">Research in progress.</h2>
          <span className="section-heading__count">SCIENTIFIC COMMUNICATION / 03</span>
        </div>
        <div className="research-layout">
          <ResearchVisual />
          <div className="research-copy">
            <p className="eyebrow">PLOS ONE / UNDER REVIEW</p>
            <h3 className="display">Cross-Domain Transfer Learning for WSN Anomaly Detection</h3>
            <p>
              A research paper proposing a hybrid Isolation Forest / LSTM framework to address cross-domain transfer learning challenges in IoT wireless sensor networks.
            </p>
            <p>
              The visual language here is deliberately close to the model: source domains, target domains and the transfer path between them. It is a small poster for a question that is still open.
            </p>
            <div className="research-spec">
              <span><span>DOMAINS</span><strong>IoT / WSN</strong></span>
              <span><span>MODELS</span><strong>Isolation Forest + LSTM</strong></span>
              <span><span>STATUS</span><strong>Under review</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section page-frame">
        <div className="section-heading">
          <h2 className="display">The work behind the timeline.</h2>
          <span className="section-heading__count">SELECTED DETAILS</span>
        </div>
        <div className="experience-disclosures">
          {experience.map((item) => (
            <details className="experience-disclosure" key={item.period}>
              <summary>
                <span className="experience-disclosure__period">{item.period}</span>
                <span className="experience-disclosure__role">{item.role}</span>
                <span className="experience-disclosure__company">{item.company}</span>
                <ChevronDown size={18} strokeWidth={1.25} />
              </summary>
              <div className="experience-disclosure__body">
                <p>{item.detail}</p>
                <p className="experience-disclosure__tags">{item.tags.join(" / ")}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="education-strip page-frame">
        <p className="eyebrow">EDUCATION / 04</p>
        <div>
          <h2 className="display">VIT Vellore</h2>
          <p>B.Tech — Computer Science and Engineering</p>
          <p className="education-strip__meta mono">
            <span>Vellore, India</span>
            <span>Aug 2022 — May 2026</span>
            <span>CGPA 9.22 / 10.0</span>
          </p>
        </div>
      </section>
    </div>
  );
}
