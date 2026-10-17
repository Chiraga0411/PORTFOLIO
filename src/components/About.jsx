/*
  Previous About text (from the old HTML/CSS/JS portfolio), kept for reference:

  "Hi, I'm Chirag! I'm a Computer Science engineering student at MANIT Bhopal,
  blending my academic foundation with hands-on frontend development. When I'm
  not tackling algorithmic challenges in C++ or learning new Data Structures, I
  focus on crafting responsive and interactive UIs using HTML, CSS, and
  JavaScript. I thrive on problem-solving—whether that's optimizing a
  competitive programming solution or bringing a complex web layout to life."
*/

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-[70px] bg-page text-center font-poppins text-txt"
    >
      <h1 data-aos="zoom-in" className="pt-[250px] text-[4rem] font-bold max-md:pt-[60px] max-md:text-[2.5rem]">
        About Me
      </h1>
      <p data-aos="zoom-in" className="mx-auto mt-10 max-w-[80vw] text-[1.2rem] leading-relaxed">
        Hi, I'm Chirag! I'm a second-year Computer Science student at MANIT Bhopal and a Web
        Developer at ISTE SC MANIT. I enjoy turning ideas into fast, polished web products, from
        responsive React interfaces to secure Node.js and FastAPI backends with role-based access
        and well-structured databases.
      </p>
      <p data-aos="zoom-in" className="mx-auto mb-10 mt-6 max-w-[80vw] text-[1.2rem] leading-relaxed">
        Strong fundamentals in data structures and algorithms, mostly in C++, keep my code clean and
        efficient. Whether I'm chasing down a tricky edge case or refining a layout until it feels
        right, I love the problem-solving that sits between design and engineering, and I'm always
        looking for the next thing to build and learn.
      </p>
    </section>
  );
}
