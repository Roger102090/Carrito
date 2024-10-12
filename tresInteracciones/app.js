document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".buttonI1");
    const dropdown = document.querySelector(".dropdown");

    // Agregar evento para mostrar y ocultar el menú
    menu.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const cubo = document.querySelector(".ef2")
    const button = document.querySelector(".buttonI2");
    button.addEventListener("click", function () {
        function colGen() {
            let letras = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letras[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        cubo.style.color = (colGen())
        cubo.style.background = (colGen())
        cubo.style.bordercolor = (colGen())
    } )
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".buttonI3");
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    function generarSonido(frecuencia, duracion) {

        const oscilador = audioContext.createOscillator();
        oscilador.type = "sine"; 
        oscilador.frequency.setValueAtTime(frecuencia, audioContext.currentTime); 
        
        oscilador.connect(audioContext.destination);
        
        oscilador.start();

        oscilador.stop(audioContext.currentTime + duracion);
    }

    button.addEventListener("click", function() {
        generarSonido(440, 1);
    });
});
