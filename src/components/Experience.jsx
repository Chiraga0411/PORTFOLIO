import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[60vh] scroll-mt-[70px] bg-page px-4 pb-16 pt-12 font-poppins"
    >
      <h1 data-aos="zoom-in" className="text-center text-5xl font-bold text-txt max-md:text-[2.5rem]">
        Experience
      </h1>
      {EXPERIENCE.map((job) => (
        <div key={job.org + job.role} data-aos="zoom-in" className="mx-auto mt-[30px] max-w-[700px]">
          <div className="rounded-[15px] bg-sec p-8 text-txt transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:scale-[1.03] hover:bg-hov">
            <h2 className="text-2xl font-semibold">{job.role}</h2>
            <h3 className="text-lg text-[#007bff]">{job.org}</h3>
            <p className="mb-4 text-sm opacity-80">
              {job.period} | {job.location}
            </p>
            <ul className="list-disc space-y-2 pl-5 text-left">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
