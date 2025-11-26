const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

/* ABRIR MENÚ */
menuBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
    overlay.style.display = "block";
});

/* CERRAR AL TOCAR FUERA */
overlay.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.style.display = "none";
});

/* CERRAR AL TOCAR UN LINK */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        overlay.style.display = "none";
    });
});
