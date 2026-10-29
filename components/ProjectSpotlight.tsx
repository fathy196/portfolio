import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowIcon } from "./Icons";

export default function ProjectSpotlight({ project }: { project: Project }) {
  return (
    <article className="spotlight">
      <div className="spotlight-head">
        <p className="card-kicker">
          {project.company} · {project.tagline}
        </p>
        <h3 className="spotlight-title">
          <Link href={`/projects/${project.slug}/`}>{project.name}</Link>
        </h3>
        <p className="card-text">{project.summary}</p>
      </div>
      <ul className="spotlight-points">
        {project.highlights.slice(0, 4).map((h) => (
          <li key={h.title}>
            <strong>{h.title}</strong>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>
      <ul className="tags" aria-label="Tech stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="actions">
        <Link href={`/projects/${project.slug}/`} className="btn">
          Read the case study <ArrowIcon width={18} height={18} />
        </Link>
        <a href={project.liveUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
          Visit live site
        </a>
      </div>
    </article>
  );
}
