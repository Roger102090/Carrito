const name = document.getElementById("user");
const pass = document.getElementById("pass");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    const username = name.value;
    const password = pass.value;

    // Definimos usuarios de ejemplo con diferentes roles
    const users = [
        { username: "admin", password: "1234", role: "admin" },
        { username: "editor", password: "1234", role: "editor" },
        { username: "viewer", password: "1234", role: "viewer" }
    ];

    // Validamos el usuario
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Inicio de sesión exitoso");

// Función para mostrar la sección según el rol
        displaySection(user.role);
    } else {
        alert("Credenciales incorrectas, intenta de nuevo.");
    }
});

// Función para mostrar la sección correspondiente al rol
function displaySection(role) {
    const sections = {
        admin: document.getElementById("adminSection"),
        editor: document.getElementById("editorSection"),
        viewer: document.getElementById("viewerSection")
    };

// Oculta todas las secciones
    for (let section in sections) {
        sections[section].style.display = "none";
    }

// Muestra solo la sección del rol actual
    sections[role].style.display = "block";
}
