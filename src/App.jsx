import { useEffect, useState } from "react";
import AOS from "aos";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") !== "light"; // dark by default
    } catch {
      return true;
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <hr />
      <Footer />
      <Analytics />
    </>
  );
}
