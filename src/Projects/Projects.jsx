import { useEffect, useState } from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaImage,
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
      "Regex",
      "Google Maps",
      "Jitsi Meet",
    ],

    github:
      "https://github.com/saquisamekerub/missingperson-new",

    live:
      "https://missingperson-345a8.web.app/",
  },

  {
    id: 2,

    featured: false,

    title: "INNOVEAT",

    category: "WEBSITE APPLICATION",

    description:
      "Innovative food catering and party requirements supplying company that focuses its services in providing culinary experiences in various events.",

    image: "/cater.jpg",

    galleryImages: [
      "/cater.jpg",
      "/cater1.jpg",
      "/cater2.jpg",
      "/cater3.jpg",
      "/cater4.jpg",
      "/cater5.jpg",
    ],

    technologies: [
      "React",
      "PHP",
      "MySQL",
  
    ],

    github:
      "https://github.com/saquisamekerub/CATERING",

    live: "",
  },

  {
    id: 3,

    featured: false,

    title: "",

    category: "FRONTEND DEVELOPMENT",

    description:
      "Modern developer portfolio showcasing projects, internship experience, technical skills, and responsive UI built with React and Vite.",

    image: "",

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
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryProjectId, setGalleryProjectId] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

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

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const totalOtherProjects = otherProjects.length;

  const mobileProjects = mobile
    ? totalOtherProjects
      ? [otherProjects[activeIndex % totalOtherProjects]]
      : []
    : otherProjects;

  const previousProject = () => {
    if (!totalOtherProjects) return;
    setActiveIndex(
      (prev) =>
        (prev - 1 + totalOtherProjects) % totalOtherProjects
    );
  };

  const nextProject = () => {
    if (!totalOtherProjects) return;
    setActiveIndex(
      (prev) => (prev + 1) % totalOtherProjects
    );
  };

  const openGallery = (projectId) => {
    setGalleryProjectId(projectId);
    setImageIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryProjectId(null);
    setImageIndex(0);
  };

  const previousImage = () => {
    const galleryProject = projects.find(p => p.id === galleryProjectId);
    const images = galleryProject?.galleryImages || [galleryProject?.image];
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    const galleryProject = projects.find(p => p.id === galleryProjectId);
    const images = galleryProject?.galleryImages || [galleryProject?.image];
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const galleryProject = projects.find(p => p.id === galleryProjectId);

  return (
    <section className="projects" id="works">

      <div className="projects__container">

        <div className="projects__heading">

          <span>Featured Work</span>

          <h2>
            My Projects
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

                  <button
                    className="gallery-btn"
                    onClick={() => openGallery(project.id)}
                    title="View Gallery"
                  >

                    <FaImage />

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {mobile && totalOtherProjects > 0 && (

          <div className="mobile-pagination">

            {otherProjects.map((_, index) => (

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

        {/* GALLERY MODAL */}
        {galleryOpen && galleryProject && (
          <div className="gallery-modal" onClick={closeGallery}>
            <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-modal__close" onClick={closeGallery}>
                ✕
              </button>
              
              <div className="gallery-modal__image-container">
                <img
                  src={galleryProject.galleryImages ? galleryProject.galleryImages[imageIndex] : galleryProject.image}
                  alt={`${galleryProject.title} ${imageIndex + 1}`}
                  className="gallery-modal__image"
                />
                
                {galleryProject.galleryImages && galleryProject.galleryImages.length > 1 && (
                  <>
                    <button 
                      className="gallery-modal__nav gallery-modal__nav--prev"
                      onClick={previousImage}
                      title="Previous image"
                    >
                      ‹
                    </button>
                    <button 
                      className="gallery-modal__nav gallery-modal__nav--next"
                      onClick={nextImage}
                      title="Next image"
                    >
                      ›
                    </button>
                    
                    <div className="gallery-modal__indicators">
                      {galleryProject.galleryImages.map((_, idx) => (
                        <button
                          key={idx}
                          className={`gallery-modal__dot ${idx === imageIndex ? "active" : ""}`}
                          onClick={() => setImageIndex(idx)}
                          title={`Image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="gallery-modal__info">
                <h2>{galleryProject.title}</h2>
                <p className="gallery-modal__category">
                  {galleryProject.category}
                </p>
                <p className="gallery-modal__description">
                  {galleryProject.description}
                </p>
                <div className="gallery-modal__stack">
                  {galleryProject.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="gallery-modal__buttons">
                  {galleryProject.live && (
                    <a
                      href={galleryProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="modal-btn-primary"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={galleryProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn-secondary"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>

    </section>
  );
}

export default Projects;