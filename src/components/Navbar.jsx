import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils";

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll-spy: highlight the section currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    // The last section can be too short to reach the middle of the screen
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        setActive(NAV_LINKS[NAV_LINKS.length - 1].id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-[999]">
      <nav
        className="flex h-[70px] items-center justify-around bg-white/75 text-2xl text-txt shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[12px] dark:bg-black/75 dark:shadow-[0_4px_30px_rgba(95,95,95,0.5)] max-lg:justify-between max-lg:px-5"
      >
        <div onClick={() => go("home")} className="cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="Chirag Agarwal"
            className="h-[52px] w-[52px] object-contain transition-transform duration-300 hover:rotate-[-8deg] hover:scale-110"
          />
        </div>

        {/* Links: inline on desktop, drop-down panel on mobile */}
        <div
          className={`transition-[max-height] duration-[400ms] ease-in-out max-lg:fixed max-lg:left-0 max-lg:top-[70px] max-lg:w-full max-lg:overflow-hidden max-lg:bg-page max-lg:shadow-[0_10px_15px_rgba(0,0,0,0.08)] ${
            open ? "max-lg:max-h-[400px]" : "max-lg:max-h-0"
          }`}
        >
          <ul className="flex gap-2 text-[#007bff] max-lg:flex-col max-lg:items-center max-lg:gap-0 max-lg:text-[1.1rem]">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <li
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`cursor-pointer list-none transition-colors duration-200 max-lg:w-full max-lg:py-3 max-lg:text-center ${
                    isActive ? "text-txt" : "hover:text-txt"
                  }`}
                >
                  {/* theme-aware pill + underline: dark text on grey in light mode, light text on charcoal in dark mode */}
                  <span
                    className={`relative inline-block rounded-full px-4 py-1 transition-all duration-300 after:absolute after:bottom-[3px] after:left-1/2 after:h-[2px] after:w-3/5 after:-translate-x-1/2 after:rounded-full after:bg-txt after:transition-transform after:duration-300 after:ease-out ${
                      isActive
                        ? "bg-sec shadow-[inset_0_0_0_1px_rgba(128,128,128,0.35)] after:scale-x-100"
                        : "bg-transparent after:scale-x-0"
                    }`}
                  >
                    {l.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dark / light toggle */}
        <div
          onClick={onToggle}
          role="button"
          aria-label="Toggle dark mode"
          className="relative h-[30px] w-[50px] cursor-pointer rounded-full border-2 border-gray-500"
        >
          <div
            className={`absolute left-0 top-0 m-[3px] h-5 w-5 rounded-full border-2 border-gray-500 transition-all duration-200 ${
              dark ? "translate-x-5 bg-[#007bff]" : "-translate-x-[1.5px] bg-sec"
            }`}
          />
        </div>

        {/* Hamburger (mobile only) */}
        <div
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="z-[1001] hidden h-6 w-[30px] cursor-pointer flex-col justify-center gap-[5px] max-lg:flex"
        >
          <span
            className={`block h-[3px] w-full rounded-[3px] bg-txt transition-all duration-[350ms] ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded-[3px] bg-txt transition-all duration-[350ms] ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded-[3px] bg-txt transition-all duration-[350ms] ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </nav>
    </header>
  );
}
