document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const dropdown = document.querySelector(".dropdown");

    // Agregar evento para mostrar y ocultar el menú
    menu.addEventListener("mouseover", function() {
        dropdown.classList.add("show");
    });
    dropdown.addEventListener("mouseover", function() {
        dropdown.classList.add("show");
    });

    menu.addEventListener("mouseout", function() {
        dropdown.classList.remove("show");
    });
    dropdown.addEventListener("mouseout", function() {
        dropdown.classList.remove("show");
    });
});



