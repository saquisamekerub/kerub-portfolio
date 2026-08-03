import './Home.css';

const timeline = [
  {
    type: 'internship',
    label: 'INTERNSHIP',
    title: 'Software Developer Intern',
    org: 'A. Magsaysay, Inc.',
    period: '2025 — 2026',
  },
  {
    type: 'education',
    label: 'EDUCATION',
    title: 'Bachelor of Science in Information Technology',
    org: 'National University Dasmariñas',
    detail: 'Specialization: Mobile and Web Applications',
    period: '2022 — 2026',
  },
  {
    type: 'education',
    label: 'EDUCATION',
    title: 'Senior High School',
    org: 'St. Edward School, Lancaster New City',
    period: '2020 — 2022',
  },
];

function Home() {
  return (
    <main className="home" id="home">
      <section className="home__hero-wrap">
        <div className="home__panel">
          <span className="home__panel-tag">INTRO</span>

          <div className="home__hero">
            {/* Main Text Content */}
            <div className="home__hero-copy">
              <div className="home__status-wrapper">
                <span className="home__status">Available for work</span>
              </div>

              <div className="home__headline-wrap">
                <span className="home__spark" aria-hidden="true">
                  ✦
                </span>
                <h1 className="home__title">
                  <span>Hi, I&apos;m</span>
                  <span>Kerub M. Saquisame</span>
                </h1>
              </div>

              <p className="home__role">
                Web &amp; Mobile Developer | Software Developer
              </p>

              <p className="home__description">
                Web and mobile developer passionate about creating real-world
                digital experiences, streamlining business processes, and
                optimizing workflows. From low-code enterprise platforms to
                full-stack web solutions, I focus on building scalable,
                efficient, and user-centered applications.
              </p>

              {/* CTAs */}
              <div className="home__actions">
                <a
                  className="home__button home__button--primary"
                  href="#works"
                >
                  View my Work
                </a>
                <a
                  className="home__button home__button--accent"
                  href="/CV (1).pdf"
                  download="Kerub_M_Saquisame_CV.pdf"
                >
                  Download Resume
                </a>
                <a
                  className="home__button home__button--secondary"
                  href="#contact"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Portrait Polaroid */}
            <div
              className="home__portrait"
              aria-label="Polaroid portrait of Kerub M. Saquisame"
            >
              <figure className="home__polaroid">
                <span
                  className="home__polaroid-tape home__polaroid-tape--left"
                  aria-hidden="true"
                />
                <span
                  className="home__polaroid-tape home__polaroid-tape--right"
                  aria-hidden="true"
                />
                <img
                  className="home__portrait-image"
                  src="/img1.jpg"
                  alt="Portrait of Kerub M. Saquisame"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="home__content-wrap">
        <div className="home__panel">
          <span className="home__panel-tag">HIGHLIGHTS</span>

          <div className="home__content">
            <article id="about" className="home__card">
              <p className="home__eyebrow">About Me</p>
              <h2>Creative developer with a visual-first mindset.</h2>
              <p>
                I enjoy building interfaces that feel expressive, practical,
                and polished across both screen sizes and interaction states.
              </p>
            </article>

            <article id="experiences" className="home__card">
              <p className="home__eyebrow">Experiences</p>
              <h2>Projects, internship, and collaborative work.</h2>
              <p>
                Completed my internship as a Software Developer Intern at
                A. Magsaysay, Inc., where I gained hands-on experience
                developing enterprise applications, collaborating with
                cross-functional teams, and applying modern web and mobile
                development technologies in real-world business environments.
              </p>
            </article>

            <article id="highlighted-works" className="home__card">
              <p className="home__eyebrow">Works</p>
              <h2>Selected portfolio pieces with strong visual impact.</h2>
              <p>
                Showcase the projects you want visitors to remember first,
                especially the ones that combine clean engineering with
                thoughtful presentation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE SECTION */}
      <section className="home__timeline-wrap" id="journey">
        <div className="home__panel">
          <span className="home__panel-tag">JOURNEY</span>

          <div className="home__timeline">
            {timeline.map((item, index) => (
              <div
                className="home__timeline-item"
                key={`${item.org}-${index}`}
              >
                <div className="home__timeline-marker">
                  <span
                    className={`home__timeline-dot home__timeline-dot--${item.type}`}
                    aria-hidden="true"
                  />
                  {index !== timeline.length - 1 && (
                    <span
                      className="home__timeline-line"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="home__timeline-card">
                  <div className="home__timeline-top">
                    <span
                      className={`home__timeline-tag home__timeline-tag--${item.type}`}
                    >
                      {item.label}
                    </span>
                    <span className="home__timeline-period">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="home__timeline-title">{item.title}</h3>

                  <p className="home__timeline-org">{item.org}</p>

                  {item.detail && (
                    <p className="home__timeline-detail">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;