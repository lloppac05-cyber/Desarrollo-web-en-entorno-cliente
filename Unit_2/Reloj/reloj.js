let miDiv = document.getElementById("tiempo");
function intervalo(){
    //creamos un objeto de la clase para guardar la fecha
    //donde se guardara la hora actual
    tiempo = new Date();
    //creamos una variable para cada apartado del reloj
    //convertimos a string y con gethoras..., cojemos cada apartado y lo 
    //guardamos en su variable, luego con padstart le decimos que si es menor
    //de 2 caracteres, que añada un 0 delante para que siempre tenga 2
    //caracteres
    let horas, minutos, segundos;
    horas = String(tiempo.getHours()).padStart(2, "0");
    minutos = String(tiempo.getMinutes()).padStart(2, "0");
    segundos = String(tiempo.getSeconds()).padStart(2, "0");
    //mostramos por pantalla
    miDiv.textContent = horas + " : " + minutos + " : " + segundos;
}
//el intervalo sera de 1000 milisegundos, es decir, 1 segundo;
setInterval(intervalo, 1000);
//creamos un objeto date para guardar la fecha actual y le damos formato
//para que se muestre en formato de España, y en vez de mostrarla en 
//la consola, la mostraremos como podemos ver en la ultima linea
//creamos un elemento donde vamos a guardar la fecha
let mDiv = document.getElementById("fecha");
const fechaActual = new Date();
const fechaFormato = new Intl.DateTimeFormat('es-ES');
// Mostramos la fecha
mDiv.textContent = fechaFormato.format(fechaActual);
