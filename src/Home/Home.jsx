import { useEffect, useState } from "react";
import "./Home.css";
import cvFile from "../assets/Kerub_M_Saquisame_CV.pdf";

const techStack = [
  {
    category: "Programming Languages",
    technologies: ["JavaScript", "PHP", "Dart"],
  },
  {
    category: "Frontend",
    technologies: ["React.js", "HTML", "CSS"],
  },
  {
    category: "Mobile & Low-Code",
    technologies: ["Flutter", "Microsoft Power Apps"],
  },
  {
    category: "CMS & Platforms",
    technologies: ["WordPress", "SharePoint"],
  },
  {
    category: "Databases",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Firestore",
    ],
  },
  {
    category: "Automation",
    technologies: ["Power Automate"],
  },
  {
    category: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "Firebase",
      "Figma",
      "VS Code",
      "Vercel",
      "Postman",
      "phpMyAdmin",
      "Microsoft Power Platform",
    ],
  },
];

const timeline = [
  {
    type: "internship",
    title: "Software Developer Intern",
    company: "A. Magsaysay, Inc.",
    year: "2025 — 2026",
    description:
      "Developed enterprise applications, collaborated with cross-functional teams, and improved internal business workflows.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    company: "National University Dasmariñas",
    year: "2022 — 2026",
    description:
      "Specialization in Mobile and Web Applications.",
  },
  {
    type: "education",
    title: "Senior High School",
    company: "St. Edward School",
    year: "2020 — 2022",
  },
];

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main id="home" className="home">

      {/* ==========================================
          SCROLL PROGRESS INDICATOR
      ========================================== */}

      <div
        className="scroll-progress"
        aria-hidden="true"
      >
        <div
          className="scroll-progress-bar"
          style={{
            width: `${scrollProgress}%`,
          }}
        ></div>
      </div>


      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="bg-gradient bg-gradient-1"></div>
      <div className="bg-gradient bg-gradient-2"></div>


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="hero">

        {/* LEFT CONTENT */}

        <div className="hero-left">

          <span className="status">
            <span className="status-dot"></span>
            Available for Work
          </span>


          <div className="hero-title-wrap">

            <p className="hero-kicker">
              SOFTWARE DEVELOPER
            </p>

            <h1>
              Building{" "}
              <span>modern web</span>{" "}
              & mobile experiences.
            </h1>

          </div>


          {/* MOBILE PROFILE */}

          <div className="profile-card mobile-only">
            <img
              src="/img1.jpg"
              alt="Kerub Saquisame"
            />
          </div>


          <p className="hero-description">
            I'm <strong>Kerub M. Saquisame</strong>, a Software Developer
            passionate about building modern applications that combine
            performance, beautiful interfaces, and real-world functionality.
          </p>


          <div className="hero-buttons">

            <a
              href="#works"
              className="btn-primary"
            >
              View Projects
              <span>↗</span>
            </a>


            <a
              href={cvFile}
              download="Kerub_M_Saquisame_CV.pdf"
              className="btn-secondary"
            >
              Download CV
            </a>

          </div>

        </div>


        {/* RIGHT PROFILE */}

        <div className="hero-right">

          <div className="profile-wrapper">

            <div className="profile-glow"></div>

            <div className="profile-card desktop-only">
              <img
                src="/img1.jpg"
                alt="Kerub Saquisame"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          TECH STACK
      ========================================== */}

      <section className="tech-section">

        <div className="section-header">

          <div>

            <span className="section-number">
              01
            </span>

            <h2>
              Tech Stack
            </h2>

          </div>

        </div>


        <div className="tech-grid">

          {techStack.map((stack) => (

            <div
              className="tech-card"
              key={stack.category}
            >

              <h3>
                {stack.category}
              </h3>

              <div className="tech-list">

                {stack.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ==========================================
          ABOUT
      ========================================== */}

      <section className="about-section">

        <div className="section-header simple-header">

          <div>

            <span className="section-number">
              02
            </span>

            <h2>
              About
            </h2>

          </div>

        </div>


        <div className="about-grid">

          {/* ABOUT ME */}

          <article className="glass-card">

            <span className="card-number">
              01
            </span>

            <h2>
              About Me
            </h2>

            <p>
              I build scalable web and mobile applications focused on
              clean architecture, modern UI, and exceptional user experience.
            </p>

          </article>


          {/* EXPERIENCE */}

          <article className="glass-card">

            <span className="card-number">
              02
            </span>

            <h2>
              Experience
            </h2>

            <p>
              Completed my Software Developer Internship at
              A. Magsaysay Inc., building enterprise applications
              used in real business environments.
            </p>

          </article>


          {/* PORTFOLIO */}

          <article className="glass-card">

            <span className="card-number">
              03
            </span>

            <h2>
              Portfolio
            </h2>

            <p>
              Passionate about designing applications that
              solve practical problems through technology.
            </p>

          </article>


          {/* ACHIEVEMENTS */}

          <article className="glass-card">

            <span className="card-number">
              04
            </span>

            <h2>
              Achievements
            </h2>

            <p>
              BSIT graduate specializing in Mobile and Web Applications, with Dean’s List recognition and additional industry certifications and training.
            </p>

          </article>

        </div>

      </section>


      {/* ==========================================
          JOURNEY
      ========================================== */}

      <section id="journey" className="journey">

        <div className="section-header simple-header">

          <div>

            <span className="section-number">
              03
            </span>

            <h2>
              Journey
            </h2>

          </div>

        </div>


        <div className="timeline">

          {timeline.map((item) => (

            <div
              className="timeline-item"
              key={item.title}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.company}
                </h4>

                {item.description && (
                  <p>
                    {item.description}
                  </p>
                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ==========================================
          BACK TO TOP
      ========================================== */}

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}

    </main>
  );
}

export default Home;