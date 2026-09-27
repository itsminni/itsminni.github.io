import { useEffect, useRef, useState } from "react";
import { content } from "./content";
import type { Content, Language, Project } from "./content";

const anchors = ["projects", "about", "background", "contact"];
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
    <span className="arrow" aria-hidden="true">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProjectVisual({ id, language }: { id: string; language: Language }) {
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
      {id === "arthint" && (
        <>
          <div className="art-frame frame-one" />
          <div className="art-frame frame-two" />
          <span className="art-letter">
            A<span>h</span>
          </span>
        </>
      )}
      {id === "telegram-bot" && (
        <span className="private-project-label">
          {language === "it" ? "Progetto privato" : "Private project"}
        </span>
      )}
    </div>
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
            aria-labelledby="project-results-title"
          >
            <h3 id="project-results-title">{c.resultsTitle}</h3>
            {project.results.map((result) => (
              <div className="result-group" key={result.title}>
                <h4>{result.title}</h4>
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
      </div>
    </dialog>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem("portfolio-language");
      if (savedLanguage === "it" || savedLanguage === "en") {
        return savedLanguage;
      }
      return navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
    } catch {
      return navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const c = content[language];
  const selectedProject = c.projects.find(
    (project) => project.id === activeProject && project.paragraphs.length > 0,
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = "Gabriele Mininni — Portfolio";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", c.bio);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* The site also works without storage. */
    }
  }, [language, c.bio]);

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
                <button
                  key={value}
                  type="button"
                  lang={value}
                  aria-label={value === "it" ? "Italiano" : "English"}
                  aria-pressed={language === value}
                  onClick={() => setLanguage(value)}
                >
                  {value.toUpperCase()}
                </button>
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
              <p className="section-intro">{c.projectsIntro}</p>
            </div>
            <div className="project-grid">
              {c.projects.map((project) => (
                <article
                  className={`project-card card-${project.id}`}
                  key={project.id}
                >
                  {project.paragraphs.length > 0 ? (
                    <button
                      type="button"
                      className="visual-button"
                      onClick={() => setActiveProject(project.id)}
                      aria-label={`${c.details}: ${project.name}`}
                      aria-haspopup="dialog"
                    >
                      <ProjectVisual id={project.id} language={language} />
                      <span className="visual-arrow">
                        <Arrow diagonal />
                      </span>
                    </button>
                  ) : (
                    <div className="project-preview">
                      <ProjectVisual id={project.id} language={language} />
                    </div>
                  )}
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.number}</span>
                    </div>
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <span className="project-period">{project.period}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    {project.paragraphs.length > 0 && (
                      <div className="project-bottom">
                        <div className="tags">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="detail-button"
                          onClick={() => setActiveProject(project.id)}
                          aria-label={`${c.details}: ${project.name}`}
                          aria-haspopup="dialog"
                        >
                          <span>{c.details}</span>
                          <Arrow diagonal />
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <a
              className="github-link text-link"
              href="https://github.com/itsminni"
              target="_blank"
              rel="noreferrer"
            >
              {language === "it" ? "Il mio GitHub" : "My GitHub"}
              <Arrow diagonal />
            </a>
          </section>

          <section
            className="about section"
            id="about"
            aria-labelledby="about-title"
          >
            <p className="eyebrow">{c.aboutLabel}</p>
            <div className="about-grid">
              <div>
                <h2 id="about-title">{c.aboutTitle}</h2>
                <div className="about-signature" aria-hidden="true">
                  Gabriele<span> / minni</span>
                </div>
              </div>
              <div className="about-copy">
                {c.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
            </div>
            <div className="working" aria-labelledby="working-title">
              <h3 id="working-title">{c.workingTitle}</h3>
              <div className="working-list">
                {c.working.map((item, index) => (
                  <div className="working-item" key={item.title}>
                    <span className="working-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
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
            <div className="activity-years">
              {[...new Set(c.activities.map((item) => item.year))]
                .sort((a, b) => Number(b) - Number(a))
                .map((year) => (
                  <section
                    className="activity-year-group"
                    key={year}
                    aria-labelledby={`activities-${year}`}
                  >
                    <h3 id={`activities-${year}`} className="activity-year">
                      {year}
                    </h3>
                    <div className="activity-list">
                      {c.activities
                        .filter((item) => item.year === year)
                        .map((item) => (
                          <article className="activity" key={item.title}>
                            <p className="activity-date">{item.date}</p>
                            <h4>{item.title}</h4>
                            <p className="activity-context">{item.context}</p>
                            <p className="activity-description">
                              {item.description}
                            </p>
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
