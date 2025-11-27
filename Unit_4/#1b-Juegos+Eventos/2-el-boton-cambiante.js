/*2. El botón cambiante
Objetivo: Un botón cambia de color o 
texto al pasar el ratón o hacer clic.
Interfaz: Un solo botón grande.
JS:
mouseover: cambia de color.
mouseout: vuelve a su color original.
click: cambia su texto (“¡Me hiciste 
clic!”).
Eventos: mouseover, mouseout, click */
windows.onload = ()=> {
    let boton = document.getElementById("boton");
    boton.addEventListener("mouseover", ()=> {
        boton.style.backgroundColor = "lightgrey";
    })
    boton.addEventListener("mouseout", ()=> {
        boton.style.backgroundColor = "initial";
    })
    boton.addEventListener("click", ()=> {
        boton.textContent = "¡Me hiciste clic!";
    })
}