import { CONTACT } from "../data";

const icons = {
  email: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
};

const LINKS = [
  { label: "Email", href: CONTACT.emailLink, icon: icons.email },
  { label: "GitHub", href: CONTACT.github, icon: icons.github },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: icons.linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-500/30 bg-page px-4 pb-6 pt-12 text-center font-poppins text-txt">
      {/* logo + big name */}
      <img
        src="/assets/logo.png"
        alt="CA logo"
        className="mx-auto h-14 w-14 object-contain"
      />
      <h2 className="gradient-text mt-3 inline-block font-outfit text-4xl font-bold md:text-5xl">
        Chirag Agarwal
      </h2>

      {/* links with icon + label */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-lg opacity-70 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-sec hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {l.icon}
            </svg>
            {l.label}
          </a>
        ))}
      </div>

      {/* bottom line */}
      <div className="mx-auto mt-10 max-w-[900px] border-t border-gray-500/30 pt-6 text-sm opacity-70">
        &copy; 2026 Chirag Agarwal | Built with React &amp; Tailwind CSS
      </div>
    </footer>
  );
}