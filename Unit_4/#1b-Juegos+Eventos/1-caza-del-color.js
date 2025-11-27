/*
Objetivo: Hacer clic en el cuadrado del color indicado.
Interfaz: 4 cuadrados de colores (HTML estático).
JS: Mostrar el texto “Haz clic en el color rojo”.

Si se hace clic en el color correcto → mensaje de acierto.
Si se falla → mensaje de error.
Eventos: click */
window.onload = () => {
    // Array con los colores
    let arrayColor = ["rojo", "magenta", "rosa", "azul"];
    // Generar color aleatorio
    let numAlea = Math.floor(Math.random() * arrayColor.length);
    let colorSeleccionado = arrayColor[numAlea];
    
    // Mostrar instrucción
    document.getElementById("color").textContent = 
    "Haz clic en el color " + colorSeleccionado;

    // Añadir eventos de clic
    arrayColor.forEach(color => {
    let colorCuadrado = document.getElementById(color);
    colorCuadrado.addEventListener("click", () => {
        if (color === colorSeleccionado) {
        document.getElementById("mensaje").textContent = "¡Has acertado!";
        } else {
        document.getElementById("mensaje").textContent = "Error";
        }
    });
    });
};