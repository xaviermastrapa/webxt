// Selección de elementos de la página con el id deseado
const navMenuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");
const links = navList.querySelectorAll("a");

// Constantes para los estados del menú
const MENU_ICONS = {
    OPEN: "×",
    CLOSED: "☰"
};

// Función para toggle del menú
const toggleMenu = () => {
    const isActive = navList.classList.contains("active");
    navList.classList.toggle("active");
    
    if (!isActive) {
        // Abrir menú
        navMenuBtn.innerHTML = MENU_ICONS.OPEN;
        navMenuBtn.setAttribute("aria-expanded", "true");
        navMenuBtn.style.transform = "rotate(90deg)";
    } else {
        // Cerrar menú
        navMenuBtn.innerHTML = MENU_ICONS.CLOSED;
        navMenuBtn.setAttribute("aria-expanded", "false");
        navMenuBtn.style.transform = "rotate(0deg)";
    }
};

// Función para cerrar menú
const closeMenu = () => {
    navList.classList.remove("active");
    navMenuBtn.innerHTML = MENU_ICONS.CLOSED;
    navMenuBtn.setAttribute("aria-expanded", "false");
    navMenuBtn.style.transform = "rotate(0deg)";
};

// Escuchamos al botón del menú hamburguesa
navMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Event listeners para los enlaces del menú
links.forEach(link => {
    link.addEventListener("click", () => {
        // Efecto visual simple al hacer clic
        link.style.opacity = "0.7";
        setTimeout(() => {
            link.style.opacity = "1";
        }, 200);
        
        closeMenu();
    });
    
    // Mejora de accesibilidad con teclado
    link.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            link.click();
        }
    });
});

// Cerrar menú al hacer clic fuera (solo si está abierto)
document.addEventListener("click", (e) => {
    if (navList.classList.contains("active") && 
        !navList.contains(e.target) && 
        e.target !== navMenuBtn) {
        closeMenu();
    }
});

// Cerrar menú con tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navList.classList.contains("active")) {
        closeMenu();
    }
});

// Efecto hover simple para el botón
navMenuBtn.addEventListener("mouseenter", () => {
    navMenuBtn.style.opacity = "0.8";
});

navMenuBtn.addEventListener("mouseleave", () => {
    navMenuBtn.style.opacity = "1";
});

// Asegurar que el menú esté cerrado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    closeMenu();
});

// Manejar cambios de tamaño de pantalla
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});