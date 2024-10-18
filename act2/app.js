//Efecto 1
const slider = document.getElementById("myRange");
const output = document.getElementById("value");
const colorBox = document.getElementById("colorBox");

output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
    const colorValue = Math.floor((this.value / 100) * 255);
    colorBox.style.backgroundColor = `rgb(${colorValue}, ${255 - colorValue}, 150)`;
}
//Efecto 2
const ruleta = document.getElementById("ruleta");
const ruletaButton = document.getElementById("ruletaButton");
const numeroDisplay = document.getElementById("numero");

ruletaButton.addEventListener("click", () => {
    const randomDegree = Math.floor(Math.random() * 3600) + 360; 
    ruleta.style.transform = `rotate(${randomDegree}deg)`;

    
    setTimeout(() => {
        const finalDegree = randomDegree % 360; 
        const numero = Math.ceil((finalDegree / 360) * 100); 
        numeroDisplay.textContent = numero;
    }, 4000); 
});
//Efecto 3
const contador = document.getElementById("contador");
const startButton = document.getElementById("startButton");

let count = 0;
let interval;

startButton.addEventListener("click", () => {
    count += 10;
    contador.textContent = count;

  
    if (!interval) {
        interval = setInterval(() => {
            if (count > 0) {
                count--;
                contador.textContent = count;
            } else {
                clearInterval(interval);
                interval = null; 
                alert("¡Tiempo terminado!");
            }
        }, 1000);
    }
});