document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".welcome-hero-txt h2");
    const paragraphs = document.querySelectorAll(".welcome-hero-txt p");

    // Separar el texto del h2 en dos partes
    const textParts = title.innerHTML.split("<br>");
    title.innerHTML = `
        <span class="title-line first">${textParts[0]}</span><br>
        <span class="title-line second">${textParts[1]}</span>
    `;

    // Animación para el título con efecto "scale-up" y "fade-in"
    function animateTitle() {
        document.querySelector(".first").classList.add("animate-title");
        setTimeout(() => {
            document.querySelector(".second").classList.add("animate-title");
        }, 600); // Pequeño retraso entre la primera y segunda línea
    }

    // Fade-in + desplazamiento suave para los párrafos
    function fadeInElements(elements, delay = 1000) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("fade-in");
            }, delay + index * 400);
        });
    }

    // Iniciar animaciones
    setTimeout(animateTitle, 500);
    setTimeout(() => fadeInElements(paragraphs), 1200);
});


