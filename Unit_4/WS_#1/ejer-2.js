//capturar el movimiento del raton, para que se muestre la posicion
//en la que se encuentra en cada momento
window.onload = ()=> {movimientoRaton()};

function movimientoRaton(){
    let moverRaton = document.getElementById("mover");
    moverRaton.addEventListener("mousemove",(e)=>{
        console.log(e.clientX,e.clientY);
    });
}
