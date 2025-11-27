/*
3. Sigue la instrucción
Objetivo: Responder con el teclado a 
una instrucción.
Interfaz: Texto que dice: “Presiona la 
tecla A”.
JS: Detectar la tecla presionada y 
mostrar si fue la correcta.
Eventos: keydown*/
window.onload = ()=> {
    let instruccion = document.getElementById("instruccion");
    instruccion.textContent = "Presiona la tecla A";
    document.addEventListener("keydown", (e) => {
        if(e.key == "a" || e.key == "A"){
            document.writeln("Has acertado");
        }
        else{
            document.writeln("Error");
        }
    })
}