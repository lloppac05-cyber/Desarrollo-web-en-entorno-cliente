/*
6. Simón dice (versión simple)
Objetivo: Repetir una secuencia de colores.
Interfaz: 4 botones de colores.
JS:
Mostrar un color que “parpadea”.
El usuario debe hacer clic en ese color.
Si acierta, pasa al siguiente nivel.
Eventos: click, setTimeout */
window.onload = ()=> {
    // variables
    colores = ["rosa", "cian", "naranja", "verde"];
    secuencia = rellenarSecuencia();
    nivel = 0;
    clickar = false;
    mensaje = document.getElementById("mensaje");

    parpadearColor([secuencia[nivel]]);
    clickar = true;
}
// genera una secuencia aleatoria de 4 colores
function rellenarSecuencia(){
    let colores = ["rosa", "cian", "naranja", "verde"];
    let secuencia = [];
    for(let i = 0; i < 4; i++){
        let numAlea = Math.floor(Math.random() * colores.length);
        secuencia.push(colores[numAlea]);
    }
    return secuencia;
}

//hacer parpadear el color
function parpadearColor(secuencia){
    for(let i = 0; i < secuencia.length; i++){
        let boton = document.getElementById(secuencia[i]);
        setTimeout(() => {
            boton.style.opacity = "1";
        }, i * 1000);
        setTimeout(() => {
            boton.style.opacity = "0.25";
        }, i * 1000+500);
    }
}

// pasa al siguiente nivel
function siguienteNivel() {
    clickar = false;
    mensaje.textContent = "Nivel " + (nivel + 1);
    let colorActual = secuencia[nivel];
    clickar = false;
    setTimeout(() => {
      parpadearColor(colorActual);
      clickar = true;
    }, 800);
}

// eventos de clic para los botones
colores = ["rosa", "cian", "naranja", "verde"];
colores.forEach(color => {
    let boton = document.getElementById(color);
    boton.addEventListener("click", () => {
        if (!clickar) return; // si aún no puede hacer clic, ignorar
        let colorCorrecto = secuencia[nivel];
        if (color == colorCorrecto) {
            mensaje.textContent = "✅ Bien";
            nivel++;
            if (nivel < secuencia.length) {
                setTimeout(siguienteNivel, 1000);
            } else {
                mensaje.textContent = "¡Ganaste!";
                clickar = false;
            }
        } else {
            mensaje.textContent = "❌ Error";
            clickar = false;
        }
    });
});