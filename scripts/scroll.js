// Obtenemos todos los enlaces de navegación
const links = document.querySelectorAll('a[href^="#"]');

// Añadimos un evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del enlace

    const targetId = this.getAttribute('href').substring(1); // Obtenemos el id de la sección
    const targetElement = document.getElementById(targetId); // Encontramos el elemento con ese id

    // Desplazamos la página hasta la sección deseada con una animación suave
    targetElement.scrollIntoView({
      behavior: 'smooth', // Desplazamiento suave
      block: 'start' // Alineamos la sección al inicio de la ventana
    });
  });
});
