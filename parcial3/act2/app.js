const nameUser = document.getElementById("user");
const pass = document.getElementById("pass");
const button = document.getElementById("button");
const recoverButton = document.getElementById("recoverButton");
const backToLogin = document.getElementById("backToLogin");

const recoverContainer = document.getElementById("recoverContainer");
const recoverEmail = document.getElementById("recoverEmail");
const recoverButtonAction = document.getElementById("recoverButtonAction");

const changePasswordContainer = document.getElementById("changePasswordContainer");
const changePasswordButton = document.getElementById("changePasswordButton");
const newPasswordInput = document.getElementById("newPasswordInput");
const backToLoginFromChange = document.getElementById("backToLoginFromChange");

// Lista de usuarios
const users = [
    { username: "admin", password: "1234", role: "admin", email: "admin@example.com" },
    { username: "editor", password: "1234", role: "editor", email: "editor@example.com" },
    { username: "viewer", password: "1234", role: "viewer", email: "viewer@example.com" }
];

// Ocultar contenedores al inicio
recoverContainer.style.display = "none";
changePasswordContainer.style.display = "none";

let tempUser = null;

// Función para ocultar todos los contenedores
function hideAllContainers() {
    document.querySelector(".logInContainer").style.display = "none";
    recoverContainer.style.display = "none";
    changePasswordContainer.style.display = "none";
}

// Inicio de sesión
button.addEventListener("click", function () {
    const username = nameUser.value;
    const password = pass.value;

    const user = users.find(user =>
        (user.username === username || user.email === username) && user.password === password
    );

    if (user) {
        alert("Inicio de sesión exitoso");
        hideAllContainers();
        displaySection(user.role);
    } else {
        alert("Credenciales incorrectas, intenta de nuevo.");
    }
});

// Mostrar formulario de recuperación de cuenta
recoverButton.addEventListener("click", function () {
    hideAllContainers();
    recoverContainer.style.display = "block";
});

// Enviar recuperación de contraseña
recoverButtonAction.addEventListener("click", function () {
    const emailInput = recoverEmail.value;

    if (!emailInput) {
        alert("Por favor, ingresa tu correo electrónico.");
        return;
    }

    const user = users.find(user => user.email === emailInput);

    if (user) {
        alert("Correo válido. Ingresa tu nueva contraseña.");
        hideAllContainers();
        changePasswordContainer.style.display = "block";
        tempUser = user;
    } else {
        alert("El correo ingresado no está registrado.");
    }
});

// Cambiar contraseña
changePasswordButton.addEventListener("click", function () {
    const newPassword = newPasswordInput.value;

    if (!newPassword || newPassword.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (tempUser) {
        tempUser.password = newPassword;
        alert("Contraseña actualizada con éxito.");
        hideAllContainers();
        document.querySelector(".logInContainer").style.display = "block";
        tempUser = null;
    }
});

// Navegación de regreso al inicio
backToLogin.addEventListener("click", function () {
    hideAllContainers();
    document.querySelector(".logInContainer").style.display = "block";
});

backToLoginFromChange.addEventListener("click", function () {
    hideAllContainers();
    document.querySelector(".logInContainer").style.display = "block";
});

// Mostrar sección según el rol
function displaySection(role) {
    const sections = {
        admin: document.getElementById("adminSection"),
        editor: document.getElementById("editorSection"),
        viewer: document.getElementById("viewerSection")
    };

    for (let section in sections) {
        sections[section].style.display = "none";
    }
    sections[role].style.display = "block";
}
