import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/lib/portfolio-data";
import { RESUME_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__rule" />
      <div className="site-footer__topline">
        <span>VISHNU ADITHYA</span>
        <span>SOFTWARE / ML / SYSTEMS</span>
        <span>2026</span>
      </div>
      <div className="site-footer__main">
        <div>
          <p className="eyebrow">CONTACT / 04</p>
          <h2 className="footer-statement">Let&apos;s make<br /><em>something</em><br />interesting.</h2>
        </div>
        <div className="site-footer__links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="footer-link">
              <span>{link.label}</span>
              <span>{link.value}</span>
              <ArrowUpRight size={16} strokeWidth={1.25} />
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="footer-link">
            <span>Resume</span>
            <span>View CV</span>
            <ArrowUpRight size={16} strokeWidth={1.25} />
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>Built with curiosity.</span>
        <Link href="/notes">Field notes ↗</Link>
        <span>© {new Date().getFullYear()} Vishnu Adithya</span>
      </div>
    </footer>
  );
}
