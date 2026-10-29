import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ArrowIcon, DownloadIcon, MailIcon, PinIcon } from "@/components/Icons";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import { asset, courses, education, experience, fmtMonth, projects, site, skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section id="about" className="section hero" aria-labelledby="about-title">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 id="about-title">
          {site.name}
          <span className="h1-sub">{site.role} — PHP &amp; Laravel</span>
        </h1>
        <p className="lead">{site.summary}</p>
        <p className="meta">
          <span>
            <PinIcon width={16} height={16} /> {site.location}
          </span>
          <span>
            Currently at <strong>{experience[0].company}</strong>
          </span>
        </p>
        <div className="actions">
          <Link href={`/projects/${projects[0].slug}/`} className="btn">
            See my work <ArrowIcon width={18} height={18} />
          </Link>
          <a href={asset(site.cv)} download className="btn btn-ghost">
            <DownloadIcon width={18} height={18} /> Download CV
          </a>
        </div>
        <dl className="stats">
          <div>
            <dt>Years of experience</dt>
            <dd>3+</dd>
          </div>
          <div>
            <dt>Live travel integrations</dt>
            <dd>3</dd>
          </div>
          <div>
            <dt>Feature test files</dt>
            <dd>100+</dd>
          </div>
        </dl>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company + job.start}>
              <div className="tl-head">
                <h3>
                  {job.title} <span className="at">· {job.company}</span>
                </h3>
                <p className="tl-meta">
                  <time dateTime={job.start}>{fmtMonth(job.start)}</time> – {job.end ? <time dateTime={job.end}>{fmtMonth(job.end)}</time> : "Present"}
                  <span> · {job.location}</span>
                </p>
              </div>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">{projects.length > 1 ? "Projects" : "Featured project"}</h2>
        {projects.map((p) => (
          <ProjectSpotlight key={p.slug} project={p} />
        ))}
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills &amp; technologies</h2>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <h3>{g.group}</h3>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section" aria-labelledby="education-title">
        <h2 id="education-title">Education &amp; courses</h2>
        <div className="edu">
          <div>
            <h3>{education.degree}</h3>
            <p className="tl-meta">
              {education.school} · {education.period}
            </p>
            <p>{education.note}</p>
          </div>
          <ul className="courses">
            {courses.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>
                  {c.org}
                  {c.period && ` · ${c.period}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <h2 id="contact-title">Let&apos;s work together</h2>
        <p className="lead">
          Hiring a backend developer or need an API built? Send a message or email me at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <div className="contact">
          <ContactForm />
          <ul className="contact-list">
            <li>
              <MailIcon /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <PinIcon /> {site.location}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
