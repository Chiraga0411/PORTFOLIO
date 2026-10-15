import { PROJECTS } from "../data";

const btn =
  "flex h-10 min-w-[110px] cursor-pointer items-center justify-center rounded-[15px] bg-[rgb(58,174,213)] px-4 text-txt no-underline transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[rgba(58,174,213,0.5)]";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-[70px] bg-page px-4 pb-16 pt-12 font-poppins"
    >
      <h1 data-aos="zoom-in" className="text-center text-5xl font-bold text-txt max-md:text-[2.5rem]">
        My Projects
      </h1>

      <div className="mx-auto mt-[30px] flex max-w-[1450px] flex-wrap justify-center gap-8">
        {PROJECTS.map((p, i) => (
          <div key={p.title} data-aos="zoom-in" className="flex w-[455px] max-w-full">
            <div className="flex flex-1 flex-col items-center rounded-[15px] bg-sec p-6 text-center text-txt transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:scale-105 hover:bg-hov">
              <h1 className="text-[2rem]">{p.emoji}</h1>
              <h2 className="text-xl font-semibold">Project {i + 1}</h2>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="my-2 flex-1">{p.description}</p>

              {p.tech.length > 0 && (
                <p className="mb-2 text-sm opacity-70">{p.tech.join(" · ")}</p>
              )}

              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className={btn}>
                    View Demo
                  </a>
                )}
                {p.source && (
                  <a href={p.source} target="_blank" rel="noopener noreferrer" className={btn}>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
