// All editable content lives here.

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "Web Developer",
    org: "ISTE Students' Chapter, MANIT Bhopal",
    period: "June 2026 – Present",
    location: "Bhopal, MP",
    points: [
      "Part of the web team building and maintaining the web presence of ISTE SC MANIT.",
      "Developed the Version Beta 9.0 hackathon website, a 36-hour MLH-powered hackathon at MANIT.",
    ],
  },
];

// demo / source are optional – the button is hidden when a link is missing.
export const PROJECTS = [
  {
    emoji: "🤖",
    title: "Sovereign On-Premise AI Workbench",
    description:
      "An air-gapped agentic AI workbench built for MRPL with automatic model selection per task. A secure Node.js gateway (JWT, RBAC, audit logs) links the React UI to FastAPI model services, with offline document search (RAG) and on-device OCR/vision.",
    tech: ["React", "Node.js", "MongoDB", "FastAPI"],
    demo: "https://sovereignai-workbench.vercel.app/",
    source: "https://github.com/Chiraga0411/SIH-2026",
  },
  {
    emoji: "🗺️",
    title: "Land Stack: GIS Land Platform",
    description:
      "A ULPIN-based land platform with a 2D/3D map, role-based dashboards and a trilingual UI. Features email-OTP login, server-side consent and privacy, and an explainable Trust Score across 150 parcels in three pilot states.",
    tech: ["React", "MapLibre GL", "Node.js", "MongoDB"],
    demo: "https://land-stack-sih.vercel.app/",
    source: "https://github.com/Chiraga0411/SIH-2026-2.0",
  },
  {
    emoji: "📢",
    title: "Nagrik Sahayak",
    description:
      "A multilingual grievance lodging and tracking chatbot (SIH1516, Ministry of Housing and Urban Affairs). Citizens file complaints in their own language; classification-only AI routes, de-duplicates and prioritises them, with SLA escalation and a JWT-secured admin dashboard.",
    tech: ["MongoDB", "JWT", "Bhashini", "IndicBERT"],
    demo: "https://nagrik-sahayak01.vercel.app/",
    source: "https://github.com/Chiraga0411/sih-backend",
  },
  {
    emoji: "🚀",
    title: "Version Beta 9.0 Hackathon Website",
    description:
      "The official responsive website of ISTE SC MANIT's flagship 36-hour MLH hackathon (Oct 30 – Nov 1, 2026).",
    tech: [],
    demo: "https://versionbeta.istemanit.in/",
  },
  {
    emoji: "🔐",
    title: "Secured Profile Registry To-Do App",
    description:
      "A profile registry application that saves and retrieves user data from local storage.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://chiraga0411.github.io/Secured-Profile-Registry-To-Do-App/",
    source: "https://github.com/Chiraga0411/Secured-Profile-Registry-To-Do-App",
  },
  {
    emoji: "📽️",
    title: "Netflix Clone (UI/UX Focus)",
    description:
      "A high-fidelity frontend reproduction of the Netflix landing page, focusing on pixel-perfect CSS execution and dynamic content delivery.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://legendary-biscotti-a29c84.netlify.app/",
  },
  {
    emoji: "🧮",
    title: "Faulty Calculator (Logic Focus)",
    description: "\"The Chaos Calc\" – A Faulty Logic Engine.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://ornate-sunburst-91589f.netlify.app/",
  },
];

const dev = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

// invert: icon is black, so flip it in dark mode
export const SKILLS = [
  { name: "HTML5", icon: dev("html5") },
  { name: "CSS3", icon: dev("css3") },
  { name: "JavaScript", icon: dev("javascript") },
  { name: "React", icon: dev("react") },
  { name: "Tailwind CSS", icon: dev("tailwindcss") },
  { name: "Node.js", icon: dev("nodejs") },
  { name: "Express.js", icon: dev("express"), invert: true },
  { name: "MongoDB", icon: dev("mongodb") },
  { name: "FastAPI", icon: dev("fastapi") },
  { name: "Python", icon: dev("python") },
  { name: "C++", icon: dev("cplusplus") },
  { name: "C", icon: dev("c") },
  { name: "Git", icon: dev("git") },
  { name: "GitHub", icon: dev("github"), invert: true },
];

export const CONTACT = {
  email: "chiraga0411@gmail.com",
  emailLink:
    "https://mail.google.com/mail/?view=cm&fs=1&to=chiraga0411@gmail.com",
  github: "https://github.com/Chiraga0411",
  linkedin: "https://www.linkedin.com/in/chirag-agarwal-785771363",
};
