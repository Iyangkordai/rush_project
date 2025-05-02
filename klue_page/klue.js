const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navmenu");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

const munu = document.querySelector("#menu_icon");
const navbar = document.querySelector(".navbar");

munu.addEventListener("click", () =>{
    munu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})