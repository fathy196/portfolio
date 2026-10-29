import Link from "next/link";
import { asset, site } from "@/lib/data";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <header className="sidebar">
      <div className="sidebar-inner">
        <Link href="/" className="avatar-link" aria-label={`${site.name} — home`}>
          <span className="avatar monogram" aria-hidden="true">
            FA
          </span>
        </Link>
        <p className="sidebar-name">
          <Link href="/">{site.name}</Link>
        </p>
        <hr className="sidebar-rule" />
        <p className="sidebar-role">
          {site.role}
          <span>{site.tagline}</span>
        </p>

        <nav aria-label="Main" className="sidebar-nav">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="sidebar-social" aria-label="Social links">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer me" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn profile">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} aria-label="Send an email">
              <MailIcon />
            </a>
          </li>
          <li>
            <a href={asset(site.cv)} download aria-label="Download CV (PDF)">
              <DownloadIcon />
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
