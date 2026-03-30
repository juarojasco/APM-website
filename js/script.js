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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Detecta todas las imágenes clickeables
document.querySelectorAll(".sim-grid img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

// Cerrar
closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

// Cerrar haciendo click afuera
lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};
