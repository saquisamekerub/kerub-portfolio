import { useEffect, useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    featured: true,
    title: "FindLink",
    category: "FULL STACK WEB & MOBILE",
    description:
      "An OCR + NLP missing-person case management platform designed for both web and mobile. The system streamlines reporting, investigation, and case tracking using Firebase services and modern web technologies.",

    image: "/findlinkImg.png",

    technologies: [
      "React",
      "Firebase",
      "PHP",
      "MySQL",
      "OCR",
      "NLP",
    ],

    github:
      "https://github.com/saquisamekerub/missingperson-new",

    live:
      "https://missingperson-345a8.web.app/",
  },

  {
    id: 2,

    featured: false,

    title: "V2 Pet HUB",

    category: "MOBILE APPLICATION",

    description:
      "A Flutter-based mobile application allowing pet owners to organize records, appointments, health history, and pet information using Supabase.",

    image: "/V2PetImg.png",

    technologies: [
      "Flutter",
      "Supabase",
      "Dart",
      "Mobile",
    ],

    github:
      "https://github.com/saquisamekerub/v2Pet",

    live: "",
  },

  {
    id: 3,

    featured: false,

    title: "Portfolio Website",

    category: "FRONTEND DEVELOPMENT",

    description:
      "Modern developer portfolio showcasing projects, internship experience, technical skills, and responsive UI built with React and Vite.",

    image: "/project3.jpg",

    technologies: [
      "React",
      "Vite",
      "CSS",
      "Responsive",
    ],

    github:
      "https://github.com/saquisamekerub/kerub-portfolio",

    live: "",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [mobile, setMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width:768px)");

    const listener = (e) => setMobile(e.matches);

    setMobile(media.matches);

    media.addEventListener("change", listener);

    return () =>
      media.removeEventListener("change", listener);
  }, []);

  const featured = projects.find(
    (project) => project.featured
  );

  const others = projects.filter(
    (project) => !project.featured
  );

  const mobileProjects = mobile
    ? [projects[activeIndex]]
    : others;
      const previousProject = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    setActiveIndex(
      (prev) => (prev + 1) % projects.length
    );
  };

  return (
    <section className="projects" id="works">

      <div className="projects__container">

        <div className="projects__heading">

          <span>Featured Work</span>

          <h2>
            Selected Projects
          </h2>

          <p>
            A collection of applications that showcase my
            experience in web development, mobile development,
            enterprise software, and modern UI engineering.
          </p>

        </div>

        {/* FEATURED PROJECT */}

        {featured && (

          <article className="featured-project">

            <div className="featured-project__content">

              <span className="featured-project__badge">

                FEATURED PROJECT

              </span>

              <h2>

                {featured.title}

              </h2>

              <p>

                {featured.description}

              </p>

              <div className="featured-project__stack">

                {featured.technologies.map((tech) => (

                  <span key={tech}>

                    {tech}

                  </span>

                ))}

              </div>

              <div className="featured-project__buttons">

                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn-primary"
                >

                  <FaExternalLinkAlt />

                  Live Demo

                </a>

                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn-secondary"
                >

                  <FaGithub />

                  GitHub

                </a>

              </div>

            </div>

            <div className="featured-project__image">

              <img
                src={featured.image}
                alt={featured.title}
              />

            </div>

          </article>

        )}

        {/* OTHER PROJECTS */}

        <div className="projects__subheading">

          <h3>

            More Projects

          </h3>

          {mobile && (

            <div className="mobile-controls">

              <button
                onClick={previousProject}
              >

                ←

              </button>

              <button
                onClick={nextProject}
              >

                →

              </button>

            </div>

          )}

        </div>

        <div className="projects-grid">

          {mobileProjects.map((project) => (

            <article
              key={project.id}
              className="project-card"
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-body">

                <span>

                  {project.category}

                </span>

                <h3>

                  {project.title}

                </h3>

                <p>

                  {project.description}

                </p>

                <div className="project-stack">

                  {project.technologies.map((tech) => (

                    <small key={tech}>

                      {tech}

                    </small>

                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaGithub />

                  </a>

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >

                      <FaArrowRight />

                    </a>

                  )}

                </div>

              </div>

            </article>

          ))}

        </div>
                {mobile && (

          <div className="mobile-pagination">

            {projects.map((_, index) => (

              <button
                key={index}
                className={
                  index === activeIndex
                    ? "active-dot"
                    : ""
                }
                onClick={() =>
                  setActiveIndex(index)
                }
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Projects;