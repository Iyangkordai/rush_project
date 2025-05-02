const munu = document.querySelector("#menu_icon");
const navbar = document.querySelector(".navbar");

munu.addEventListener("click", () =>{
    munu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})