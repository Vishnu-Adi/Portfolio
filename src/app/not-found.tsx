import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="case-page">
      <section className="profile-hero page-frame">
        <p className="profile-hero__index">404 / FIELD NOTE</p>
        <div>
          <h1 className="profile-hero__statement display">This route wandered <em>off the map.</em></h1>
          <p className="profile-hero__copy">The page you were looking for is not part of this archive. The useful work is still close by.</p>
          <div className="intro-links">
            <Link className="text-link" href="/">Return to the cover <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
            <Link className="text-link" href="/projects">Browse the work <ArrowUpRight size={15} strokeWidth={1.25} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
