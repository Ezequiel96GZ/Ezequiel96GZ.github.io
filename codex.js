<script>
function toggleAbout() {
    var content = document.getElementById("about-content");
    var btn = document.querySelector(".btn");

    if (content.style.display === "none") {
        content.style.display = "block"; // Mostrar contenido
        btn.textContent = "Ver menos"; // Cambia el texto del botón
    } else {
        content.style.display = "none"; // Ocultar contenido
        btn.textContent = "Ver más"; // Cambia el texto del botón
    }
}
</script>
