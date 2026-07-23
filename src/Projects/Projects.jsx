import './Projects.css';

const projects = [
  {
    id: 1,
    title: "An OCR AND RULE-BASED NLP SYSTEM FOR ENHANCING MISSING PERSON CASES MANAGEMENT",
    description: "FINDLINK system represents a web-based and mobile applications which speeds up the process of finding missing person investigation...",
    image: '/findlinkImg.png',
    link: '#',
  },
  {
    id: 2,
    title: 'V2 Pet HUB',
    description: 'is a pet management application designed to help pet owners organize and manage their pets information in one place.',
    image: '/V2PetImg.png',
    link: '#',
    imageClassName: 'projects__card-image--contain',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/project3.jpg',
    link: '#',
  },
];

function Projects() {
  return (
    <section className="projects" id="works">
      <div className="projects__header">
        <h2 className="projects__title">My Projects Highlight</h2>
        <a className="projects__see-more" href="#">
          See More
          <span className="projects__arrow">→</span>
        </a>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="projects__card">
            <div className={`projects__card-image ${project.imageClassName ?? ''}`.trim()}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects__card-content">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__card-footer">
                <a href={project.link} className="projects__live-badge">
                  ◎ Live
                </a>
                <a href={project.link} className="projects__link">
                  See more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
