// script.js
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show'); // Alterna la clase .show para mostrar/ocultar el menú
});

