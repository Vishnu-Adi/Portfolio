import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Capabilities — Vishnu Adithya",
  description: "A capability index across systems, intelligence, products, infrastructure and practice.",
};

export default function SkillsPage() {
  return (
    <div className="capabilities-page">
      <section className="capabilities-intro page-frame">
        <p className="capabilities-intro__index">CAPABILITIES / 04</p>
        <div>
          <h1 className="capabilities-intro__title display">Show what you can <em>do.</em></h1>
          <p className="capabilities-intro__copy">
            A working index of the domains I use to turn an idea into a system. The list is intentionally smaller than the stack — capability matters more than collection.
          </p>
        </div>
      </section>

      <section className="capability-list page-frame" aria-label="Capabilities">
        {capabilities.map((capability) => (
          <article className="capability" key={capability.index}>
            <p className="capability__index">{capability.index}</p>
            <div>
              <h2 className="capability__title">{capability.title}</h2>
              <p className="capability__statement">{capability.statement}</p>
            </div>
            <div>
              <p className="capability__items">
                {capability.items.map((item) => <span key={item}>{item}</span>)}
              </p>
              <p className="capability__evidence">EVIDENCE / {capability.evidence}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="capability-note page-frame">
        <p className="eyebrow">A NOTE ON TOOLS</p>
        <p>Tools are useful because they give an idea a <em>shape.</em> The judgment is in choosing which ones to keep.</p>
      </section>

      <section className="page-frame pb-24">
        <div className="section-heading">
          <h2 className="display">Keep reading.</h2>
          <span className="section-heading__count">THE CONTEXT MATTERS</span>
        </div>
        <div className="intro-links">
          <Link className="text-link" href="/about">Profile and experience <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
          <Link className="text-link" href="/notes">Field notes <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
        </div>
      </section>
    </div>
  );
}
