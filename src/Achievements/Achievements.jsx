import { useEffect, useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    year: "2025",
    title: "ICODSA Certification",
    description:
      "Completed an industry certification as part of continued professional development.",
    category: "Professional",
    image: "/icodsa.jpg",

    // Replace this with your actual IEEE / publication URL
    publicationUrl: "https://ieeexplore.ieee.org/document/11157022",
  },

  {
    year: "2025",
    title: "Dean's Lister",
    description:
      "Recognized as a Dean's Lister for outstanding academic performance across multiple semesters.",
    category: "Education",
    image: "/acad.jpg",
  },

];

function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  /* ==========================================
     CLOSE LIGHTBOX WITH ESC KEY
  ========================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  /* ==========================================
     PREVENT BODY SCROLL WHEN LIGHTBOX IS OPEN
  ========================================== */

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);


  return (
    <>
      {/* ==========================================
          ACHIEVEMENTS SECTION
      ========================================== */}

      <section
        id="achievements"
        className="achievements-section"
      >

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="section-header simple-header">

          <div>

            <span className="section-number">
              04
            </span>

            <h2>
              Academic Achievements
            </h2>

          </div>

        </div>


        {/* ==========================================
            ACHIEVEMENTS GRID
        ========================================== */}

        <div className="achievements-grid">

          {achievements.map((achievement) => (

            <article
              className="achievement-card"
              key={achievement.title}
            >

              {/* ======================================
                  IMAGE
              ====================================== */}

              {achievement.image ? (

                <button
                  type="button"
                  className="achievement-image-button"
                  onClick={() =>
                    setSelectedImage({
                      src: achievement.image,
                      title: achievement.title,
                    })
                  }
                  aria-label={`View ${achievement.title}`}
                >

                  <div className="achievement-image">

                    <img
                      src={achievement.image}
                      alt={`${achievement.title} certificate`}
                    />

                  </div>

                </button>

              ) : (

                /* ======================================
                   PLACEHOLDER
                ====================================== */

                <div className="achievement-placeholder">

                  <div className="placeholder-icon">

                    {achievement.category === "Academic" && "✦"}

                    {achievement.category === "Education" && "◆"}

                  </div>

                  <span>
                    {achievement.category}
                  </span>

                </div>

              )}


              {/* ======================================
                  CARD INFORMATION
              ====================================== */}

              <div className="achievement-info">

                {/* CATEGORY */}

                <div className="achievement-top">

                  <span className="achievement-category">
                    {achievement.category}
                  </span>

                </div>


                {/* DETAILS */}

                <div className="achievement-details">

                  <span className="achievement-year">
                    {achievement.year}
                  </span>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.description}
                  </p>


                  {/* ==================================
                      VIEW PUBLICATION
                  ================================== */}

                  {achievement.publicationUrl && (
                    <a
                      href={achievement.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-publication-button"
                    >
                      View Publication
                      <span>↗</span>
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==========================================
          IMAGE LIGHTBOX
      ========================================== */}

      {selectedImage && (

        <div
          className="achievement-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="achievement-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>


          {/* IMAGE */}

          <div
            className="achievement-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="achievement-lightbox-image"
            />

          </div>

        </div>

      )}

    </>
  );
}

export default Achievements;