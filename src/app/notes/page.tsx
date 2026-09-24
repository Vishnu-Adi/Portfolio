import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notes } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Field Notes — Vishnu Adithya",
  description: "Short observations from the space between building a system and understanding why it behaves the way it does.",
};

export default function NotesPage() {
  return (
    <div className="notes-page">
      <section className="notes-hero page-frame">
        <p className="notes-hero__index">03 / FIELD NOTES</p>
        <div>
          <h1 className="display">Things I keep <em>thinking about.</em></h1>
          <p className="notes-hero__copy">
            Short observations from the space between building a system and understanding why it wants to behave the way it does. Not a blog. A working notebook.
          </p>
        </div>
      </section>

      <section className="notes-list page-frame">
        {notes.map((note) => (
          <article className="note-entry" key={note.index}>
            <p className="note-entry__index">{note.index}</p>
            <div>
              <h2 className="note-entry__title display">{note.title}</h2>
              <p className="note-entry__dek">{note.dek}</p>
            </div>
            <div>
              <div className="note-entry__body">
                {note.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="note-entry__meta">
                <p className="note-entry__tags">{note.tags.join(" / ")}</p>
                <span>{note.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="page-frame pb-24">
        <div className="section-heading">
          <h2 className="display">The archive continues.</h2>
          <span className="section-heading__count">MORE SIGNAL / 04</span>
        </div>
        <div className="intro-links">
          <Link className="text-link" href="/projects">Read the work <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
          <Link className="text-link" href="/#contact">Continue the conversation <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
        </div>
      </section>
    </div>
  );
}
