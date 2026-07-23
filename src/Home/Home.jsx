import './Home.css';

function Home() {
  return (
    <main className="home" id="home">
      <section className="home__hero">
        <div className="home__hero-copy">
          <span className="home__status">Available for work</span>

          <div className="home__headline-wrap">
            <span className="home__spark" aria-hidden="true">
              ✦
            </span>
            <h1 className="home__title">
              <span>Hi, I&apos;m</span>
              <span>Kerub M. Saquisame</span>
            </h1>
          </div>

          <p className="home__role">Web & Mobile Developer | Software Developer </p>

          <p className="home__description">
            Web and mobile developer passionate about creating real-world digital experiences, streamlining business processes, and optimizing workflows. From low-code enterprise platforms to full-stack web solutions, I focus on building scalable, efficient, and user-centered applications.
          </p>

          <div className="home__actions">
            <a className="home__button home__button--primary" href="#works">
              View my Work
            </a>
            <a className="home__button home__button--secondary" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="home__portrait" aria-label="Portrait showcase">
          <img
            className="home__portrait-image"
            src="/img1.jpg"
            alt="Portrait of Kerub M. Saquisame"
          />
        </div>
      </section>

      <section className="home__content">
        <article id="about" className="home__card">
          <p className="home__eyebrow">About Me</p>
          <h2>Creative developer with a visual-first mindset.</h2>
          <p>
            I enjoy building interfaces that feel expressive, practical, and polished across
            both screen sizes and interaction states.
          </p>
        </article>

        <article id="experiences" className="home__card">
          <p className="home__eyebrow">Experiences</p>
          <h2>Projects, internships, and collaborative work.</h2>
          <p>
            Use this space to highlight the work that best shows your growth, problem-solving,
            and design sense.
          </p>
        </article>

        <article id="works" className="home__card">
          <p className="home__eyebrow">Works</p>
          <h2>Selected portfolio pieces with strong visual impact.</h2>
          <p>
            Showcase the projects you want visitors to remember first, especially the ones that
            combine clean engineering with thoughtful presentation.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
