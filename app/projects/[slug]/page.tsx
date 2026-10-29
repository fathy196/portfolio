import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
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
    title: `${p.name} — ${p.tagline} (Laravel Case Study)`,
    description: p.summary,
    keywords: [...p.stack, "travel booking platform", "recommendation engine", "Laravel case study", site.name],
    alternates: { canonical: "./" },
    openGraph: { type: "article", url: "./", title: `${p.name} | ${site.name}`, description: p.summary, images: ogImages },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.tagline}`,
    description: p.description,
    url: `${site.url}/projects/${p.slug}/`,
    sameAs: [p.liveUrl, p.repo].filter(Boolean),
    keywords: p.stack.join(", "),
    creator: { "@type": "Person", name: site.name, url: `${site.url}/` },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: p.name, item: `${site.url}/projects/${p.slug}/` },
    ],
  };

  return (
    <article className="section project">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([ld, crumbs]) }} />
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/">Home</Link> / <span aria-current="page">{p.name}</span>
      </nav>
      <p className="eyebrow">
        Case study · {p.company} · {p.period}
      </p>
      <h1>
        {p.name}
        <span className="h1-sub">{p.tagline}</span>
      </h1>
      <p className="lead">{p.description}</p>
      <dl className="facts">
        <div>
          <dt>Role</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{p.company}</dd>
        </div>
        {p.integrations && (
          <div>
            <dt>Integrations</dt>
            <dd>{p.integrations.join(" · ")}</dd>
          </div>
        )}
      </dl>
      {(p.liveUrl || p.repo) && (
        <p className="actions">
          {p.liveUrl && (
            <a href={p.liveUrl} className="btn" target="_blank" rel="noopener noreferrer">
              Visit live site <ArrowIcon width={18} height={18} />
            </a>
          )}
          {p.repo && (
            <a href={p.repo} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              View source on GitHub
            </a>
          )}
        </p>
      )}

      <h2>What I built</h2>
      <div className="highlights">
        {p.highlights.map((h) => (
          <div key={h.title} className="highlight">
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </div>

      {p.engine && (
        <>
          <h2>{p.engineTitle ?? "How it works"}</h2>
          {p.engineIntro && <p>{p.engineIntro}</p>}
          <ol className="steps">
            {p.engine.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </>
      )}

      {p.weights && (
        <>
          <h3 className="weights-title">{p.weightsTitle ?? "Scoring weights"}</h3>
          <ul className="weights">
            {p.weights.map((w) => (
              <li key={w.label}>
                <span className="w-label">{w.label}</span>
                <span className="w-bar" aria-hidden="true">
                  <span style={{ width: `${w.value}%` }} />
                </span>
                <span className="w-value">{w.value}%</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Tech stack</h2>
      <ul className="tags">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </article>
  );
}
