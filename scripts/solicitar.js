function enviarWhatsApp() {
    let estructura = document.querySelector(".structure-select").value;
    let departamento = document.querySelector(".department-select").value;

    if (!estructura || !departamento) {
        alert("Por favor, seleccione una estructura y un departamento.");
        return;
    }

    let mensaje = `Hola, me gustaría solicitar ${estructura}. Le escribo desde el departamento de ${departamento}.`;
    let telefono = "50488313413"; // Número de WhatsApp
    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
