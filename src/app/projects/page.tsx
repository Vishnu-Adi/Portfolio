"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectVisual } from "@/components/project-visual";
import { archiveProjects, featuredProjects } from "@/lib/portfolio-data";

const filters = ["All", "Web", "Intelligence", "Systems", "Data"] as const;
type Filter = (typeof filters)[number];

function matchesFilter(tags: string[], filter: Filter) {
  if (filter === "All") return true;
  const normalized = tags.join(" ").toLowerCase();
  if (filter === "Web") return /react|next|mern|flask|open library|chrome|fastapi/.test(normalized);
  if (filter === "Intelligence") return /ai|nlp|ml|tensorflow|bert|xgboost|machine/.test(normalized);
  if (filter === "Systems") return /crypt|optim|genetic|pso|flutter|hive/.test(normalized);
  return /data|tensor|random|finance|visual/.test(normalized);
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredProjects = useMemo(
    () => archiveProjects.filter((project) => matchesFilter(project.tags, activeFilter)),
    [activeFilter],
  );

  return (
    <div className="work-page">
      <section className="work-hero page-frame">
        <p className="work-hero__index">01 / SELECTED WORK</p>
        <div>
          <h1 className="work-hero__title display">Things I made to understand the <em>edges.</em></h1>
          <p className="work-hero__copy">
            Selected systems from the space between embedded software, machine learning and the browser. The archive below is less curated, but still part of the practice.
          </p>
        </div>
      </section>

      <section className="work-feature page-frame">
        <div className="section-heading">
          <h2 className="display">Featured case studies</h2>
          <span className="section-heading__count">01 — 03 / READ THE SYSTEM</span>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className="project-entry" key={project.slug}>
              <p className="project-entry__number">{project.number} / {project.year}</p>
              <div className="project-entry__content">
                <p className="eyebrow">{project.category}</p>
                <h2 className="project-entry__title display">
                  {project.titleLines.map((line) => <span key={line}>{line}</span>)}
                </h2>
                <p className="project-entry__description">{project.description}</p>
                <p className="project-entry__meta">
                  <span>{project.year}</span>
                  <span>{project.technologies.length} technologies</span>
                </p>
                <p className="project-entry__tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </p>
                <div className="project-entry__links">
                  <Link href={`/projects/${project.slug}`}>Read case study <ArrowUpRight size={14} strokeWidth={1.25} /></Link>
                  {project.links[0] && (
                    <a href={project.links[0].href} target="_blank" rel="noreferrer">
                      {project.links[0].label} <ArrowUpRight size={14} strokeWidth={1.25} />
                    </a>
                  )}
                </div>
              </div>
              <Link href={`/projects/${project.slug}`} className="project-entry__visual" aria-label={`Read the ${project.title} case study`}>
                <ProjectVisual project={project.visual} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section page-frame">
        <div className="archive-head">
          <span>ARCHIVE / 02</span>
          <span>{filteredProjects.length} OF {archiveProjects.length} EXPERIMENTS</span>
        </div>
        <div className="archive-filter" aria-label="Filter archive">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div>
          {filteredProjects.map((project) => (
            <a className="archive-row" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
              <span className="archive-row__meta">{project.year}</span>
              <h3 className="archive-row__title">{project.title}</h3>
              <p className="archive-row__description">{project.description}</p>
              <ArrowUpRight className="archive-row__arrow" size={18} strokeWidth={1.25} />
              <p className="archive-row__tags">{project.tags.join(" / ")}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-8 text-muted">
          <ArrowDownToLine size={15} strokeWidth={1.25} />
          <span className="mono">THE ARCHIVE IS A RECORD, NOT A HIERARCHY</span>
        </div>
      </section>
    </div>
  );
}
