import { CONTACT } from "../data";

const link = "text-txt transition-all duration-300 ease-in-out hover:text-[1.3rem]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] scroll-mt-[70px] bg-page p-[50px] text-center font-poppins max-md:p-5"
    >
      <h2 data-aos="zoom-in" className="text-[2rem] font-bold text-txt">Let's Connect</h2>
      <p data-aos="zoom-in" className="text-2xl text-txt">
        Reach out to me via email or on social media.
      </p>
      <ul className="text-[1.4em] text-txt">
        <li data-aos="zoom-in" className="list-none">
          Email-{" "}
          <a href={CONTACT.emailLink} target="_blank" rel="noopener noreferrer" className={link}>
            {CONTACT.email}
          </a>
        </li>
        <li data-aos="zoom-in" className="list-none">
          Github-{" "}
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className={link}>
            Chirag's_github
          </a>
        </li>
        <li data-aos="zoom-in" className="list-none">
          LinkedIn-{" "}
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
            Chirag's_LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
