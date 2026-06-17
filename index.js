document.querySelector(".three").addEventListener("click", () => {
    document.querySelector(".projects-section").scrollIntoView({ behavior: "smooth" })
});
document.querySelector("#home").addEventListener("click", () => {
    document.querySelector(".intro").scrollIntoView({ behavior: "smooth" })
});
document.querySelector("#about").addEventListener("click", () => {
    document.querySelector(".about-section").scrollIntoView({ behavior: "smooth" })
});
document.querySelector("#projects").addEventListener("click", () => {
    document.querySelector(".projects-section").scrollIntoView({ behavior: "smooth" })
});
document.querySelector("#skills").addEventListener("click", () => {
    document.querySelector(".skills-section").scrollIntoView({ behavior: "smooth" })
});
document.querySelector("#contact").addEventListener("click", () => {
    document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" })
});

document.querySelector(".toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const circle = document.querySelector(".circle");

    if (document.body.classList.contains("dark-theme")) {
        circle.style.transform = "translateX(20px)";
        circle.style.backgroundColor = "rgb(0,123,255)";
        circle.style.transition = "all 0.2s ease-in-out";
    } else {
        circle.style.transform = "translateX(-1.5px)";
        circle.style.backgroundColor = "var(--seccolor)";
    }
});
