import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ConnectionMotif } from "@/components/connection-motif";
import ChatInterface from "@/components/chat-interface";
import { ProjectVisual } from "@/components/project-visual";
import { capabilities, featuredProjects, notes } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="home-page">
      <section className="cover page-frame">
        <div className="cover__topline mono">
          <span>VOLUME 01 / PERSONAL SYSTEMS</span>
          <span>CHENNAI — INDIA / 2026</span>
        </div>

        <div className="cover__grid">
          <p className="cover__index">01 — 03<br />SOFTWARE / ML / SYSTEMS</p>
          <h1 className="cover__title">
            <span className="cover__title-line">VISHNU</span>
            <span className="cover__title-line cover__title-line--serif">ADITHYA</span>
          </h1>
          <div className="cover__descriptor">
            <strong>SOFTWARE ENGINEER</strong>
            <span>MACHINE LEARNING</span>
            <span>SYSTEMS / INTERFACES</span>
          </div>
        </div>

        <div className="cover__motif">
          <ConnectionMotif />
        </div>

        <p className="cover__statement">
          I like understanding <em>how things work.</em>
        </p>

        <div className="cover__footer mono">
          <span className="cover__scroll">Scroll to read the work</span>
          <span>Selected systems, experiments<br />and field notes</span>
        </div>
      </section>

      <section className="home-intro page-frame">
        <div className="intro-grid">
          <div className="section-marker">PROFILE / 01</div>
          <div className="intro-copy">
            <h2 className="display">A practical kind of <em>curiosity.</em></h2>
            <p>
              I build software across embedded networking, machine learning, Salesforce automation, and modern web and AI products. The common thread is not a framework — it is wanting to understand the system beneath the surface.
            </p>
            <p>
              My work moves between low-level packet handling and browser-native file transfer; between a carefully measured model and an interface that makes it understandable. I care about clear choices, useful constraints, and the part of a system that only shows up when it fails.
            </p>
            <div className="intro-links">
              <Link className="text-link" href="/about">Read the profile <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
              <a className="text-link" href="mailto:vishnuadithya7@gmail.com">Start a conversation <ArrowUpRight size={15} strokeWidth={1.25} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="selected-work page-frame">
        <div className="section-heading">
          <h2 className="display">Selected work</h2>
          <span className="section-heading__count">01 — 03 / FEATURED SYSTEMS</span>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className="project-entry" key={project.slug}>
              <p className="project-entry__number">{project.number} / {project.year}</p>
              <div className="project-entry__content">
                <p className="eyebrow">{project.category}</p>
                <h3 className="project-entry__title display">
                  {project.titleLines.map((line) => <span key={line}>{line}</span>)}
                </h3>
                <p className="project-entry__description">{project.description}</p>
                <p className="project-entry__meta">
                  <span>{project.year}</span>
                  <span>{project.technologies.slice(0, 3).join(" / ")}</span>
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
                <ProjectVisual project={project.visual} compact />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-section page-frame">
        <div className="practice-grid">
          <div className="section-marker">PRACTICE / 02</div>
          <div>
            <div className="section-heading">
              <h2 className="display">The work sits between.</h2>
              <span className="section-heading__count">CAPABILITIES / NOT A LIST</span>
            </div>
            <div className="practice-lines">
              {capabilities.slice(0, 4).map((capability) => (
                <div className="practice-line" key={capability.index}>
                  <span className="practice-line__number">{capability.index}</span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.statement}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link className="text-link notes-preview__link" href="/skills">See the capability index <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
          </div>
        </div>
      </section>

      <section className="notes-preview page-frame">
        <div className="section-heading">
          <h2 className="display">Field notes</h2>
          <span className="section-heading__count">THINKING / IN PROGRESS</span>
        </div>
        <div>
          {notes.slice(0, 2).map((note) => (
            <Link href="/notes" className="note-preview" key={note.index}>
              <span className="note-preview__index">{note.index}</span>
              <h3>{note.title}</h3>
              <p>{note.dek}</p>
            </Link>
          ))}
        </div>
        <Link className="text-link notes-preview__link" href="/notes">Read the notes <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
      </section>

      <section className="home-ask page-frame">
        <ChatInterface />
      </section>

      <div className="page-frame" aria-hidden="true">
        <div className="flex items-center gap-3 border-t border-line py-4 text-muted">
          <ArrowDown size={14} strokeWidth={1.25} />
          <span className="mono">END OF COVER / THE WORK CONTINUES IN THE ARCHIVE</span>
        </div>
      </div>
    </div>
  );
}
