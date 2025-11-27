/*
5. Atrapa el número correcto
Objetivo: Elegir el número que diga el texto.
Interfaz: Varios botones numerados del 1 al 9.
JS:
Mostrar “Haz clic en el número 7”.
Validar el número presionado.
Eventos: click */
window.onload = ()=> {
    let num= Math.floor(Math.random() * 9) + 1;
    document.writeln("Pincha el numero " + num);
    for(let i = 1; i <= 9; i++){
        let boton = document.createElement("button");
        boton.textContent = i;
        boton.style.fontSize = "24px";
        boton.style.margin = "5px";
        boton.addEventListener("click", (e) => {
            if(i == num){
                document.writeln("Has acertado");
            }
            else{
                document.writeln("Error");
            }
        });
        document.body.appendChild(boton);
    }
}