import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaFacebookF,
} from "react-icons/fa";

import "./Contact.css";

const contacts = [
  {
    title: "Email",
    value: "saquisamekerubm@gmail.com",
    icon: <FiMail />,
    href: "mailto:saquisamekerubm@gmail.com",
  },

  {
    title: "Phone",
    value: "0947 780 4783",
    icon: <FiPhone />,
    href: "tel:09477804783",
  },

  {
    title: "Location",
    value: "Imus, Cavite, Philippines",
    icon: <FiMapPin />,
  },

  {
    title: "Facebook",
    value: "Kerub M. Saquisame",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/kerubmarfil.saquisame.54",
  },
];

function Contact() {

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="contact__container">

        <div className="contact__header">

          <span className="contact__badge">

            CONTACT

          </span>

          <h2>

            Get In Touch

          </h2>

          <p>

            I'm always open to discussing new opportunities,
            collaborating on exciting projects,
            or simply connecting.
            Feel free to reach out anytime.

          </p>

        </div>

        <div className="contact__grid">

          {contacts.map((item) => (

            <a

              key={item.title}

              href={item.href || "#"}

              className={`contact__card ${
                !item.href
                  ? "contact__card--static"
                  : ""
              }`}

              target={
                item.href?.startsWith("http")
                  ? "_blank"
                  : undefined
              }

              rel="noreferrer"

            >

              <div className="contact__icon">

                {item.icon}

              </div>

              <div className="contact__content">

                <span>

                  {item.title}

                </span>

                <h3>

                  {item.value}

                </h3>

              </div>
                            {item.href && (
                <div className="contact__arrow">
                  <FiArrowUpRight />
                </div>
              )}

            </a>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Contact;