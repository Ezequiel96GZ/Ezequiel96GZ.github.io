// scripts.js

// Script para alternar entre modos oscuro y claro
const body = document.body;
const toggleButton = document.getElementById("mode-toggle");

// Función para alternar modos
function updateMode() {
    if (body.classList.contains("dark-mode")) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Cambiar a Modo Claro';
        localStorage.setItem("mode", "dark"); // Guardar preferencia en localStorage
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Cambiar a Modo Oscuro';
        localStorage.setItem("mode", "light"); // Guardar preferencia en localStorage
    }
}

// Evento de clic para alternar el modo
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    updateMode(); // Actualiza el botón
});

// Verificar la preferencia guardada en localStorage o iniciar en modo oscuro
const preferredMode = localStorage.getItem("mode");
if (preferredMode === "light") {
    body.classList.add("light-mode");
} else {
    body.classList.add("dark-mode");
}

// Inicializar el estado del botón
updateMode();

// Funciones para el panel deslizante
function toggleSlide() {
    const panel = document.getElementById('sliding-panel');
    const content = document.getElementById('about-content');

    panel.classList.toggle('hide'); // Oculta o muestra el sliding-panel
    content.classList.toggle('show'); // Mueve el about-content dentro de la vista
}

function toggleSlideBack() {
    const panel = document.getElementById('sliding-panel');
    const content = document.getElementById('about-content');

    panel.classList.toggle('hide'); // Restaura el panel a su posición original
    content.classList.toggle('show'); // Oculta el about-content
}

// Funciones para la animación de los videos
function playGif(element) {
    const gif = element.querySelector(".project-video");
    gif.style.display = "block";
}

function stopGif(element) {
    const gif = element.querySelector(".project-video");
    gif.style.display = "none";
}

const slider = document.querySelector('.slider');
slider.innerHTML += slider.innerHTML; // Duplica el contenido del slider

// Cambiar entre íconos de "+" y "-"
document.getElementById("floating-main-btn").addEventListener("click", function () {
    const options = document.querySelector(".floating-options");
    const cv = document.querySelector(".floating-cv");
    const icon = document.getElementById("floating-icon");

    options.classList.toggle("show");
    cv.classList.toggle("show");

    // Cambiar icono
    if (icon.classList.contains("fa-plus")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    }
});

// Funciones de acción
function openWhatsApp() {
    window.open("https://wa.me/5491158422609", "_blank"); // Reemplaza con tu número
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/ezequielgz/", "_blank");
}

function openGitHub() {
    window.open("https://github.com/Ezequiel96GZ", "_blank");
}

function downloadCV() {
    window.open("https://drive.google.com/file/d/1aVK1nbHqHfXtSbiRTrdqlw_IY3_xqYOn/view?usp=sharing", "_blank");
}

// Variable para el botón principal y el menú flotante

document.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    const scrollTop = window.scrollY; // Distancia recorrida hacia abajo
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total del documento
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Porcentaje del scroll

    progressBar.style.width = `${scrollPercentage}%`; // Ajusta el ancho de la barra
});

// Mostrar/ocultar el botón según el scroll
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Volver al inicio al hacer clic
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
