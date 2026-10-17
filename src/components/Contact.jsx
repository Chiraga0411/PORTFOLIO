import { CONTACT } from "../data";

const link = "text-txt transition-all duration-300 ease-in-out hover:text-[1.65rem]";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] scroll-mt-[70px] bg-page p-[50px] text-center font-poppins max-md:p-5"
    >
      <h2 data-aos="zoom-in" className="text-[3.25rem] font-bold text-txt max-md:text-[2.25rem]">Let's Connect</h2>
      <p data-aos="zoom-in" className="text-[1.65rem] text-txt max-md:text-[1.4rem]">
        Reach out to me via email or on social media.
      </p>
      <ul className="text-[1.5rem] text-txt max-md:text-[1.2rem]">
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
