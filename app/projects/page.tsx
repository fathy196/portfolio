import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import { ogImages, projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Laravel & PHP Backend Work",
  description: `${projects.length} backend projects by ${site.name}: Laravel REST APIs, e-commerce, payment integrations, real-time chat, and admin dashboards.`,
  alternates: { canonical: "./" },
  openGraph: { url: "./", title: `Projects | ${site.name}`, images: ogImages },
};

export default function ProjectsPage() {
  return (
    <section className="section" aria-labelledby="projects-title">
      <p className="eyebrow">Portfolio</p>
      <h1 id="projects-title">Projects</h1>
      <p className="lead">
        Backend systems I&apos;ve designed and built — REST APIs, e-commerce platforms, payment integrations, real-time
        features, and admin dashboards, mostly with Laravel and MySQL.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
