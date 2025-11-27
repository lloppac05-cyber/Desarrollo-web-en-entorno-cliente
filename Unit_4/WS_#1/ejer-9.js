/*
Crea una pagina web que haciendo uso
de eventos permita arrastrar una
imagen haciendo uso del raton
(al pulsar sobre la imagen la voy
arrastrando hasta que suelto el boton)*/
window.onload = () => {
    /*let Divimg = document.getElementById("puzzle");
    let clickado = false;
    let x;
    let y;
    Divimg.addEventListener("click",(e) =>{
        if(!clickado){
            clickado = true;
            x = e.clientX - Divimg.offsetLeft;
            y = e.clientY - Divimg.offsetTop;
        }
        else{
            clickado = false;
        }
    })
    document.addEventListener("mousemove", (e) => {
        if(clickado){
            //seguimiento del raton
            Divimg.style.left = (e.clientX - x) + "px";
            Divimg.style.top = (e.clientY - y) + "px";
            console.log(e.clientX,e.clientY);
        }
    })*/

        /*const source = document.getElementById("puzzle");
        source.addEventListener("puzzle", (event) => {
        // hazlo medio transparente
        event.target.classList.add("dragging");
        })
        source.addEventListener("dragend", (event) => {
        // restablecer la transparencia
        event.target.classList.remove("dragging");
        })*/

    const dragItem = document.getElementById("puzzle");
    const dropZone = document.getElementById("drop-zone");

    // Al iniciar el arrastre
    dragItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("img", event.target.id);
    })

    // Permitir soltar en la zona
    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault(); // Necesario para habilitar el drop
    })

    // Manejar el evento drop
    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData("img");
        const draggedElement = document.getElementById(draggedElementId);
        dropZone.appendChild(draggedElement); // Mover el elemento
    })
}


