import { useEffect, useRef, useState } from "react";
import { content } from "./content";
import type { Content, Language, Project } from "./content";

const anchors = ["projects", "about", "background", "contact"];
const languagePaths: Record<Language, string> = {
  it: import.meta.env.BASE_URL,
  en: `${import.meta.env.BASE_URL}en/`,
};
const email = "minni.code@icloud.com";
type ExternalLink = { label: string; href: string };

function getAdditionalLinks(value: unknown): ExternalLink[] {
  if (!value || typeof value !== "object" || !("links" in value)) {
    return [];
  }
  const links = (value as { links?: unknown }).links;
  return Array.isArray(links) ? (links as ExternalLink[]) : [];
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M3 12h18m-7-7 7 7-7 7"} />
    </svg>
  );
}

function ProjectVisual({ id }: { id: string }) {
  return (
    <div className={`project-visual visual-${id}`} aria-hidden="true">
      {id === "giano" && (
        <>
          <img
            src={`${import.meta.env.BASE_URL}images/giano-trentino.jpg`}
            alt=""
            width="1200"
            height="675"
            loading="lazy"
          />
          <span className="giano-wordmark">Giano</span>
        </>
      )}
      {id === "fyre" && (
        <>
          <img
            className="fyre-icon"
            src={`${import.meta.env.BASE_URL}images/fyre-dark.png`}
            alt=""
            width="1024"
            height="1024"
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}

function ProjectDetails({
  project,
  language,
  idPrefix,
}: {
  project: Project;
  language: Language;
  idPrefix: string;
}) {
  const c = content[language];
  const ResultsHeading = idPrefix === "dialog" ? "h3" : "h5";
  const ResultHeading = idPrefix === "dialog" ? "h4" : "h6";
  return (
    <>
      <div className="dialog-role">
        <span className="eyebrow">{c.role}</span>
        <p>{project.role}</p>
      </div>
      {project.paragraphs.map((paragraph) => (
        <p className="dialog-paragraph" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {project.results && (
        <section
          className="project-results"
          aria-labelledby={`${idPrefix}-results-title`}
        >
          <ResultsHeading
            className="project-results-title"
            id={`${idPrefix}-results-title`}
          >
            {c.resultsTitle}
          </ResultsHeading>
          {project.results.map((result) => (
            <div className="result-group" key={result.title}>
              <ResultHeading className="result-title">{result.title}</ResultHeading>
              <p>{result.description}</p>
              <dl>
                {result.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </section>
      )}
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {project.links.length > 0 && (
        <div className="dialog-links">
          {project.links.map((link) => (
            <a
              className="text-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              key={link.href}
            >
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function ProjectDialog({
  project,
  language,
  onClose,
}: {
  project: Project;
  language: Language;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const c: Content = content[language];
  useEffect(() => {
    const element = dialog.current;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    element?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      element?.close();
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="dialog-content">
        <div className="dialog-top">
          <span className="eyebrow">{project.category}</span>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
            autoFocus
          >
            {c.close} <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 id="dialog-title">{project.name}</h2>
        <p className="dialog-period">{project.period}</p>
        <ProjectDetails project={project} language={language} idPrefix="dialog" />
      </div>
    </dialog>
  );
}

function App({ initialLanguage = "it" }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [languageReady, setLanguageReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const c = content[language];
  const selectedProject = c.projects.find(
    (project) => project.id === activeProject && project.paragraphs.length > 0,
  );

  useEffect(() => {
    // Match the prerendered language first; browser preferences apply after hydration.
    let preferredLanguage: Language = navigator.language.toLowerCase().startsWith("it")
      ? "it" : "en";
    try {
      const savedLanguage = localStorage.getItem("portfolio-language");
      if (savedLanguage === "it" || savedLanguage === "en") {
        preferredLanguage = savedLanguage;
      }
    } catch {
      /* Browser language remains available when storage is disabled. */
    }
    if (
      window.location.pathname.replace(/\/$/, "") ===
      languagePaths.en.replace(/\/$/, "")
    ) {
      preferredLanguage = "en";
    }
    setLanguage(preferredLanguage);
    setLanguageReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = "Gabriele Mininni — Portfolio";
    document
      .querySelectorAll('meta[name="description"], meta[property="og:description"]')
      .forEach((meta) => meta.setAttribute("content", c.bio));
    if (!languageReady) return;
    if (window.location.pathname !== languagePaths[language]) {
      window.history.replaceState(
        window.history.state,
        "",
        `${languagePaths[language]}${window.location.search}${window.location.hash}`,
      );
    }
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* The site also works without storage. */
    }
  }, [language, c.bio, languageReady]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#top"
            aria-label={
              language === "it"
                ? "Gabriele Mininni — Torna all’inizio"
                : "Gabriele Mininni — Back to top"
            }
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-name">Gabriele Mininni</span>
            <span className="brand-initials" aria-hidden="true">
              GM
            </span>
          </a>
          <nav
            aria-label={
              language === "it" ? "Navigazione principale" : "Main navigation"
            }
            id="main-nav"
            className={menuOpen ? "navigation is-open" : "navigation"}
          >
            {c.nav.map((label, index) => (
              <a
                href={`#${anchors[index]}`}
                key={anchors[index]}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              aria-label={language === "it" ? "Lingua" : "Language"}
            >
              {(["it", "en"] as const).map((value) => (
                <a
                  key={value}
                  href={languagePaths[value]}
                  lang={value}
                  aria-label={value === "it" ? "Italiano" : "English"}
                  aria-current={language === value ? "page" : undefined}
                  onClick={(event) => {
                    if (
                      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
                    ) return;
                    event.preventDefault();
                    setLanguage(value);
                  }}
                >
                  {value.toUpperCase()}
                </a>
              ))}
            </div>
            <button
              className="menu-toggle"
              type="button"
              aria-label={
                menuOpen
                  ? language === "it"
                    ? "Chiudi menu"
                    : "Close menu"
                  : language === "it"
                    ? "Apri menu"
                    : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <div className="page-container">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <h1 id="hero-title">
              {c.headline[0]}
              <br />
              <span>{c.headline[1]}</span>
            </h1>
            <div className="hero-lower">
              <div>
                <p className="hero-bio">{c.bio}</p>
                <div className="hero-links">
                  <a className="primary-link" href="#projects">
                    {c.explore}
                    <Arrow />
                  </a>
                  <a className="text-link" href={`mailto:${email}`}>
                    {c.contact}
                    <Arrow diagonal />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            className="projects section"
            id="projects"
            aria-labelledby="projects-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">{c.selected}</p>
                <h2 id="projects-title">{c.projectsTitle}</h2>
              </div>
            </div>
            <h3 className="project-group-title">{c.featuredProjectsTitle}</h3>
            <div className="project-grid">
              {c.projects.map((project) => (
                <article
                  className={`project-card card-${project.id}`}
                  key={project.id}
                >
                  <a
                    href={`#project-details-${project.id}`}
                    className="visual-button"
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveProject(project.id);
                    }}
                    aria-label={`${c.details}: ${project.name}`}
                    aria-haspopup={languageReady ? "dialog" : undefined}
                  >
                    <ProjectVisual id={project.id} />
                    <span className="visual-arrow">
                      <Arrow diagonal />
                    </span>
                  </a>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.number}</span>
                    </div>
                    <div className="project-title-row">
                      <h4>{project.name}</h4>
                      <span className="project-period">{project.period}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-bottom">
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={`#project-details-${project.id}`}
                        className="detail-button"
                        onClick={(event) => {
                          event.preventDefault();
                          setActiveProject(project.id);
                        }}
                        aria-label={`${c.details}: ${project.name}`}
                        aria-haspopup={languageReady ? "dialog" : undefined}
                      >
                        <span>{c.details}</span>
                        <Arrow diagonal />
                      </a>
                    </div>
                  </div>
                  <details className="project-fallback">
                    <summary>{c.details}</summary>
                    <div id={`project-details-${project.id}`}>
                      <ProjectDetails
                        project={project}
                        language={language}
                        idPrefix={`static-${project.id}`}
                      />
                    </div>
                  </details>
                </article>
              ))}
            </div>
            <section
              className="other-projects"
              aria-labelledby="other-projects-title"
            >
              <h3 id="other-projects-title">{c.otherProjectsTitle}</h3>
              <ul>
                {c.otherProjects.map((project) => (
                  <li key={project.id}>
                    <div>
                      <h4>{project.name}</h4>
                      <span className="other-project-status">
                        {project.status}
                      </span>
                    </div>
                    <p>{project.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </section>

          <section
            className="about section"
            id="about"
            aria-labelledby="about-title"
          >
            <p className="eyebrow">{c.aboutLabel}</p>
            <div className="about-grid">
              <div className="about-copy">
                <h2 id="about-title">{c.aboutTitle}</h2>
                {c.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="toolkit">
                <h3>{c.toolkit}</h3>
                <dl>
                  {c.skills.map((skill) => (
                    <div key={skill.label}>
                      <dt>{skill.label}</dt>
                      <dd>{skill.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section
            className="background section"
            id="background"
            aria-labelledby="background-title"
          >
            <div className="background-heading">
              <p className="eyebrow">{c.journeyLabel}</p>
              <h2 id="background-title">{c.journeyTitle}</h2>
            </div>
            <div className="journey">
              <ol>
                {c.journey.map((item) => (
                  <li key={item.title}>
                    <span className="journey-date">{item.date}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="journey-place">{item.place}</p>
                      <p className="journey-description">{item.description}</p>
                      {item.link && (
                        <a
                          className="journey-link text-link"
                          href={item.link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.link.label}
                          <Arrow diagonal />
                        </a>
                      )}
                      {getAdditionalLinks(item).map((link) => (
                        <a
                          className="journey-link text-link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={link.href}
                        >
                          {link.label}
                          <Arrow diagonal />
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="activities section"
            id="activities"
            aria-labelledby="activities-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">{c.activitiesLabel}</p>
                <h2 id="activities-title">{c.activitiesTitle}</h2>
              </div>
            </div>
            <div className="activity-list">
              {c.activities.map((item) => (
                <article className="activity" key={item.title}>
                  <p className="activity-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="activity-context">{item.context}</p>
                  <p className="activity-description">{item.description}</p>
                  {item.link && (
                    <a
                      className="activity-link text-link"
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.link.label}
                      <Arrow diagonal />
                    </a>
                  )}
                  {getAdditionalLinks(item).map((link) => (
                    <a
                      className="activity-link text-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      key={link.href}
                    >
                      {link.label}
                      <Arrow diagonal />
                    </a>
                  ))}
                </article>
              ))}
            </div>
          </section>

          <section
            className="contact section"
            id="contact"
            aria-labelledby="contact-title"
          >
            <p className="eyebrow">{c.contactLabel}</p>
            <div className="contact-grid">
              <h2 id="contact-title">{c.contactTitle}</h2>
              <div>
                <p>{c.contactText}</p>
                <a className="email-link" href={`mailto:${email}`}>
                  {email}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
          </section>
          <footer className="footer">
            <nav
              className="footer-links"
              aria-label={
                language === "it" ? "Link di fine pagina" : "Footer links"
              }
            >
              <a href={`mailto:${email}`}>
                Email <Arrow diagonal />
              </a>
              <a
                href="https://github.com/itsminni"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
              <a href="#top">
                {c.top} <span aria-hidden="true">↑</span>
              </a>
            </nav>
          </footer>
        </div>
      </main>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          language={language}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

export default App;
