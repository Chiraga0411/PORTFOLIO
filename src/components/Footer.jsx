import { CONTACT } from "../data";

const icon =
  "mx-2.5 my-5 h-[30px] w-[30px] transition-all duration-200 ease-in-out hover:h-[35px] hover:w-[35px] hover:opacity-70 dark:invert";

export default function Footer() {
  return (
    <footer className="flex items-center justify-evenly bg-page text-txt max-md:flex-col max-md:gap-5 max-md:py-5">
      <div>&copy; 2026 | All rights reserved</div>
      <div className="flex items-center">
        <a href={CONTACT.emailLink} target="_blank" rel="noopener noreferrer">
          <img src="/assets/mail.png" alt="Email" className={icon} />
        </a>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons8-github-30.png" alt="GitHub" className={icon} />
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin.png" alt="LinkedIn" className={icon} />
        </a>
      </div>
    </footer>
  );
}
