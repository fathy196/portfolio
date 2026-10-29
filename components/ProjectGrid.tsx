"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} headingLevel={2} />
        ))}
      </div>
    </>
  );
}
