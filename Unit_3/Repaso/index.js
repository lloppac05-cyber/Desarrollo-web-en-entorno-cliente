//seria el main en java, debe ir siempre
window.onload = ()=> {iniciarCapturaEventos()};

//funcion para eventos, NADA DE LINEAS SUELTAS
function iniciarCapturaEventos(){
    let miDiv1 = document.getElementById("div1");
    //defino eventos a este div
    miDiv1.addEventListener("mouseover", cambiarColorE);
    miDiv1.addEventListener("mouseout",cambiarColorS)

    let miDiv2 = document.getElementById("div2");
    miDiv2.addEventListener("mouseover", cambiarColorE);
    miDiv2.addEventListener("mouseout",cambiarColorS)
    document.addEventListener("mousemove", (e)=>{
        if(e.clientX > 500){
            e.target.style.backgroundColor = "pink";
        }
        else{
            e.target.style.backgroundColor = "white";
        }
    });
}
//funcion para cambiar de color de entrada
//coge el evento, en este caso mouseout
function cambiarColorE(event){
    if(event.altKey){
        event.target.style.backgroundColor = "red";
    }
    else{
        if(event.ctrlKey){
            event.target.style.backgroundColor = "yellow";
        }
        else{
            event.target.style.backgroundColor = "blue";
        }
    }
}

//funcion cambiar el color de la salida
function cambiarColorS(event){
    event.target.style.backgroundColor = "white";
}