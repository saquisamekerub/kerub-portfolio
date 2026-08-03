import { useEffect, useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Findlink',
    role: 'FULL-STACK DEVELOPER',
    description: 'OCR + NLP missing-person case management system for web and mobile.',
    image: '/findlinkImg.png',
    actions: [
      {
        label: 'Open Site',
        icon: <FaExternalLinkAlt />,
        link: 'https://missingperson-345a8.web.app/', // Replace with your deployed URL
      },
    ],
  },
  {
    id: 2,
    title: 'V2 Pet HUB',
    role: 'MOBILE APP DEVELOPER',
    description: 'Pet management app that helps owners track and organize pet information.',
    image: '/V2PetImg.png',
    imageClassName: 'projects__card-image--contain',
    actions: [
      {
        label: 'GitHub',
        icon: <FaGithub />,
        link: 'https://github.com/saquisamekerub/v2Pet', // Replace with your deployed URL
      },
    ],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    role: 'FRONTEND DEVELOPER',
    description: 'Personal portfolio with modern layout, responsive sections, and project highlights.',
    image: '/project3.jpg',
    actions: [
      {
        label: 'GitHub',
        icon: <FaGithub />,
        link: 'https://github.com/saquisamekerub/v2Pet', // Replace with your GitHub repo
      },
    ],
  },
];

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleViewportChange = (event) => {
      setIsMobileView(event.matches);
    };

    setIsMobileView(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  const handleShowPrevious = () => {
    setActiveProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleShowNext = () => {
    setActiveProjectIndex(
      (prevIndex) => (prevIndex + 1) % projects.length
    );
  };

  const visibleProjects = isMobileView
    ? [projects[activeProjectIndex]]
    : projects;

  return (
    <section className="projects" id="works">
      <div className="projects__panel">
        <span className="projects__domain-tag">PROJECTS</span>

        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>

          {isMobileView && (
            <div className="projects__controls">
              <button
                type="button"
                className="projects__control projects__control--active"
                onClick={handleShowPrevious}
                aria-label="Show previous project"
              >
                ‹
              </button>

              <button
                type="button"
                className="projects__control"
                onClick={handleShowNext}
                aria-label="Show next project"
              >
                ›
              </button>
            </div>
          )}
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="projects__card">
              <div
                className={`projects__card-image ${
                  project.imageClassName ?? ''
                }`.trim()}
              >
                <img src={project.image} alt={project.title} />
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-role">{project.role}</p>
                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__card-actions">
                  {project.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.link}
                      className="projects__action-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {isMobileView && (
          <div className="projects__pagination">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`projects__dot ${
                  index === activeProjectIndex
                    ? 'projects__dot--active'
                    : 'projects__dot--inactive'
                }`}
                aria-label={`Show ${project.title}`}
                onClick={() => setActiveProjectIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;