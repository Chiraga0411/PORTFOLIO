import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { scrollToSection } from "../utils";

export default function Hero() {
  const line1 = useRef(null);
  const line2 = useRef(null);

  useEffect(() => {
    let second;
    const first = new Typed(line1.current, {
      strings: ["Hi, I'm <span class='gradient-text font-outfit'>Chirag Agarwal</span>."],
      typeSpeed: 50,
      showCursor: true,
      onComplete: (self) => {
        self.cursor.style.display = "none";
        second = new Typed(line2.current, {
          strings: ["I'm a Programmer", "and a Web Developer."],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1000,
          loop: true,
        });
      },
    });
    return () => {
      first.destroy();
      second?.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen bg-sec text-txt max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:text-center"
    >
      <div>
        <div className="pb-[35px] pl-[25px] pt-[250px] font-poppins text-5xl font-medium text-txt max-md:pl-0 max-md:pt-[60px] max-md:text-[2rem]">
          <span ref={line1}></span>
          <br />
          <span ref={line2}></span>
        </div>
        <div className="pl-[25px] text-[1.3rem] max-md:pl-0 max-md:text-[1.1rem]">
          Full-Stack Developer & Designer | Building Digital Experiences
        </div>
        <div className="animate-fade-up pl-[25px] pt-[25px] max-md:pl-0">
          <button
            onClick={() => scrollToSection("projects")}
            className="orbit-btn group relative inline-block h-14 w-[220px] cursor-pointer rounded-full transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            {/* orbiting ring: a faint track + a short line travelling around it */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 220 56"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4dabf7" />
                  <stop offset="100%" stopColor="#e874ff" />
                </linearGradient>
              </defs>
              <rect className="orbit-track" x="1" y="1" width="218" height="54" rx="27" />
              <rect
                className="orbit-beam"
                x="1"
                y="1"
                width="218"
                height="54"
                rx="27"
                pathLength="100"
              />
            </svg>

            {/* button face */}
            <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-page text-[1.15rem] font-medium tracking-wide text-txt transition-colors duration-300 group-hover:text-[#e874ff]">
              View My Work
              <svg
                className="h-5 w-5 animate-nudge transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="m-auto">
        <img
          src="/assets/Gemini_Generated_Image_6vr02n6vr02n6vr0.png"
          alt="Chirag Agarwal"
          className="h-[350px] w-[350px] rounded-full border-[5px] border-sec object-cover outline outline-[9px] outline-txt max-md:mt-5 max-md:h-[250px] max-md:w-[250px] max-md:border-4 max-md:outline-[7px]"
        />
      </div>
    </section>
  );
}
