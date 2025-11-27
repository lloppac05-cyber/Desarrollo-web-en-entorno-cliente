/*
4. Juego de reflejos
Objetivo: Hacer clic en el círculo 
solo cuando cambie de color.
Interfaz: Un círculo centrado.
JS:
Cada 2–5 segundos el círculo cambia 
de gris a verde.
Si el usuario hace clic cuando está 
verde → “¡Reflejos rápidos!”.
Si hace clic antes → “Demasiado pronto”.
Eventos: click, setTimeout */
window.onload = ()=> {
    let circulo = document.getElementById("circulo");
    let tiempoCambio = 0;
    jugar();
    cambiarColor();
}
function jugar(){
    circulo.addEventListener("click", (e) => {
        if(circulo.style.backgroundColor == "green"){
            document.writeln("¡Reflejos rápidos!");
            tiempoCambio = 0;
            cambiarColor();
        }
        else{
            document.writeln("Demasiado pronto");
        }   
    })
}
function cambiarColor(){
    let tiempoAleatorio = Math.floor(Math.random() * 3000) + 2000;
    tiempoCambio = setTimeout((e) => {
        circulo.style.backgroundColor = "green";
    }, tiempoAleatorio);
    tiempoCambio = setTimeout((e) => {
        circulo.style.backgroundColor = "grey";
        cambiarColor();
    }, tiempoAleatorio + 1000);
}