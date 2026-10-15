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
        <div className="pl-[25px] pt-[25px] max-md:pl-0">
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer rounded-[10px] bg-[rgb(58,174,213)] px-5 py-2.5 text-[1.2rem] text-white transition-all duration-200 ease-in-out hover:scale-110 hover:bg-txt"
          >
            View My Work
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
