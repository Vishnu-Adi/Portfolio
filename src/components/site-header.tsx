"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Work", href: "/projects", number: "01" },
  { label: "Profile", href: "/about", number: "02" },
  { label: "Field notes", href: "/notes", number: "03" },
  { label: "Capabilities", href: "/skills", number: "04" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="wordmark" onClick={closeMenu} aria-label="Vishnu Adithya home">
          VISHNU<span>.</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-link ${isActive(pathname, link.href) ? "header-link--active" : ""}`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              <span className="header-link__number">{link.number}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <span className="availability-mark">
            <span className="availability-mark__dot" />
            Available for SWE / ML work
          </span>
          <ThemeToggle />
          <button
            type="button"
            className="menu-trigger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div id="site-menu" className={`site-menu ${menuOpen ? "site-menu--open" : ""}`}>
        <div className="site-menu__inner">
          <p className="eyebrow">INDEX / 2026</p>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="site-menu__link">
                <span>{link.number}</span>
                {link.label}
                <ArrowUpRight size={18} strokeWidth={1.25} />
              </Link>
            ))}
            <Link href="/#contact" onClick={closeMenu} className="site-menu__link">
              <span>05</span>
              Contact
              <ArrowUpRight size={18} strokeWidth={1.25} />
            </Link>
          </nav>
          <div className="site-menu__footer">
            <span>SOFTWARE / ML / SYSTEMS</span>
            <span>CHENNAI — INDIA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
