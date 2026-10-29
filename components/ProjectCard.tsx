import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowIcon, GitHubIcon } from "./Icons";

export default function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <article className="card">
      <p className="card-kicker">{project.category}</p>
      <H className="card-title">
        <Link href={`/projects/${project.slug}/`} className="stretched">
          {project.name}
        </Link>
      </H>
      <p className="card-text">{project.summary}</p>
      <ul className="tags" aria-label="Tech stack">
        {project.stack.slice(0, 4).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="card-foot">
        <span className="more">
          Details <ArrowIcon width={16} height={16} />
        </span>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="repo" aria-label={`${project.name} source code on GitHub`}>
            <GitHubIcon width={18} height={18} />
          </a>
        )}
      </div>
    </article>
  );
}
