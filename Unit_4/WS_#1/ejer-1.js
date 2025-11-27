//captura el evento onClick del raton para que cada vez que suceda se ejecute un alert
//seria el main en java, debe ir siempre
window.onload = ()=> {clickRaton()};

function clickRaton(){
    let ratonClick = document.getElementById("click");
    ratonClick.addEventListener(onclick, alert("Has hecho click"));
}