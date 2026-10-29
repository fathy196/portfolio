import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GitHubIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import { ogImages, projects, site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.stack[0]} Project`,
    description: p.summary,
    keywords: [...p.stack, "Laravel project", "backend project", site.name],
    alternates: { canonical: "./" },
    openGraph: { type: "article", url: "./", title: `${p.name} | ${site.name}`, description: p.summary, images: ogImages },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 2);
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: p.name,
    description: p.description,
    url: `${site.url}/projects/${p.slug}/`,
    codeRepository: p.repo,
    programmingLanguage: "PHP",
    keywords: p.stack.join(", "),
    author: { "@type": "Person", name: site.name, url: `${site.url}/` },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects/` },
      { "@type": "ListItem", position: 3, name: p.name, item: `${site.url}/projects/${p.slug}/` },
    ],
  };

  return (
    <article className="section project">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([ld, crumbs]) }} />
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Home</Link> / <Link href="/projects/">Projects</Link> / <span aria-current="page">{p.name}</span>
      </nav>
      <p className="eyebrow">
        {p.category}
        {p.period && ` · ${p.period}`}
      </p>
      <h1>{p.name}</h1>
      <p className="lead">{p.description}</p>

      <h2>Key features</h2>
      <ul className="checks">
        {p.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2>Tech stack</h2>
      <ul className="tags">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {p.repo && (
        <p className="actions">
          <a href={p.repo} className="btn" target="_blank" rel="noopener noreferrer">
            <GitHubIcon width={18} height={18} /> View source on GitHub
          </a>
        </p>
      )}

      {others.length > 0 && (
        <aside aria-labelledby="related-title" className="related">
          <h2 id="related-title">Related projects</h2>
          <div className="grid">
            {others.map((o) => (
              <ProjectCard key={o.slug} project={o} />
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
