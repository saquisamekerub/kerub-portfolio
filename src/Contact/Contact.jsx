import { FiInfo, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import './Contact.css';

const contactItems = [
  {
    label: 'Email',
    value: 'saquisamekerubm@gmail.com',
    href: 'mailto:saquisamekerubm@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '09477804783',
    href: 'tel:09477804783',
    icon: FiPhone,
  },
  {
    label: 'Location',
    value: 'Imus, Cavite, Philippines',
    icon: FiMapPin,
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <span className="contact__pill">
          <FiMail />
          Contact
        </span>

        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__lead">Have a question or want to work together? Let&apos;s connect.</p>

        <article className="contact__card">
          <header className="contact__card-header">
            <FiInfo className="contact__card-title-icon" />
            <h3>Contact Info</h3>
          </header>

          <div className="contact__list">
            {contactItems.map((item) => {
              const IconComponent = item.icon;
              const itemBody = (
                <>
                  <span className="contact__item-label">{item.label}</span>
                  <span className="contact__item-value">{item.value}</span>
                </>
              );

              return (
                <div key={item.label} className="contact__item">
                  <div className="contact__item-icon">
                    <IconComponent />
                  </div>
                  {item.href ? (
                    <a className="contact__item-content" href={item.href}>
                      {itemBody}
                    </a>
                  ) : (
                    <div className="contact__item-content">{itemBody}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="contact__social">
            <p>Connect with me</p>
            <a
              className="contact__social-link"
              href="https://www.facebook.com/kerubmarfil.saquisame.54"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Facebook profile"
            >
              <FaFacebookF />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;