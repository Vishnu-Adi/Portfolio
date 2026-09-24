import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { featuredProjects, getProject } from "@/lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found — Vishnu Adithya" };

  return {
    title: `${project.title} — Vishnu Adithya`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="case-page">
      <header className="case-hero page-frame">
        <div className="case-hero__topline">
          <Link href="/projects" className="back-link"><ArrowLeft size={14} strokeWidth={1.25} /> Back to work</Link>
          <span>{project.number} / 03 — SELECTED WORK</span>
          <span>{project.year}</span>
        </div>
        <p className="eyebrow">{project.category}</p>
        <h1 className="case-hero__title display">
          {project.titleLines.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <p className="case-hero__summary">{project.summary}</p>
        <div className="case-hero__visual">
          <ProjectVisual project={project.visual} />
        </div>
        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Focus</span>
            <span className="case-meta__value">System + interface</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Year</span>
            <span className="case-meta__value">{project.year}</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Surface</span>
            <span className="case-meta__value">Browser-native system</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Status</span>
            <span className="case-meta__value">Selected work</span>
          </div>
        </div>
      </header>

      <div className="case-body page-frame">
        <section className="case-section">
          <p className="case-section__label">01 / THE IDEA</p>
          <div>
            <h2 className="case-section__title">Make the system’s intent visible.</h2>
            <p className="case-section__copy">{project.detail.idea}</p>
          </div>
        </section>

        <section className="case-section">
          <p className="case-section__label">02 / THE PROBLEM</p>
          <div>
            <h2 className="case-section__title">Start with the friction.</h2>
            <p className="case-section__copy">{project.detail.problem}</p>
          </div>
        </section>

        <section className="case-section">
          <p className="case-section__label">03 / THE APPROACH</p>
          <div>
            <h2 className="case-section__title">A small set of decisions.</h2>
            <p className="case-section__copy">{project.detail.approach}</p>
            <div className="architecture" aria-label={`${project.title} architecture`}>
              {project.detail.architecture.map((step, index) => (
                <div className="architecture__step" key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="case-section__label">04 / THE HARD PART</p>
          <div>
            <h2 className="case-section__title">The interesting part is underneath.</h2>
            <p className="case-section__copy">{project.detail.hardPart}</p>
          </div>
        </section>

        <section className="case-section">
          <p className="case-section__label">05 / TRADE-OFFS</p>
          <div>
            <h2 className="case-section__title">Nothing is free.</h2>
            <p className="case-section__copy">{project.detail.tradeOff}</p>
          </div>
        </section>

        <section className="case-section">
          <p className="case-section__label">06 / WHAT I WOULD CHANGE</p>
          <div>
            <h2 className="case-section__title">Leave a clearer trace.</h2>
            <p className="case-section__copy">{project.detail.change}</p>
          </div>
        </section>

        <section className="case-section case-section--reflection">
          <p className="case-section__label">07 / WHAT I LEARNED</p>
          <div>
            <h2 className="case-section__title">A useful final note.</h2>
            <p className="case-section__copy">{project.detail.learned}</p>
            <div className="case-links">
              <span className="case-links__label">Technologies / {project.technologies.length} in the stack</span>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={15} strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
