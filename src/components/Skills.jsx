import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-[70px] bg-page px-4 pb-16 pt-12 text-center font-poppins text-txt"
    >
      <h1 data-aos="zoom-in" className="text-5xl font-bold max-md:text-[2.5rem]">
        Skills
      </h1>
      <div className="mx-auto mt-[30px] flex max-w-[1000px] flex-wrap justify-center gap-6">
        {SKILLS.map((s) => (
          <div key={s.name} data-aos="zoom-in">
            <div className="flex h-[110px] w-[170px] flex-col items-center justify-center gap-3 rounded-[10px] bg-sec transition-all duration-200 ease-in-out hover:scale-105 hover:bg-hov">
              <img
                src={s.icon}
                alt=""
                className={`h-[45px] ${s.invert ? "dark:invert" : ""}`}
              />
              <div>{s.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
