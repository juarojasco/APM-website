const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

/* MENU */
toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
