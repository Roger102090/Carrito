const name = document.getElementById("user");
const pass = document.getElementById("pass");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const username = user.value;
    const password = pass.value;

    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Credenciales incorrectas, intenta de nuevo.");
    }
});

