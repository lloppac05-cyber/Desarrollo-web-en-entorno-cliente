/*Nivel 1 – Creación y lectura de fechas
Fecha actual
Crea un objeto Date que represente la fecha y hora actual.*/
const date1 = new Date();
console.log(date1);


/*Fecha específica
Crea un objeto Date con tu fecha de nacimiento (año, mes, día).*/
const date2 = new Date("2005/04/06");
console.log(date2);


/*Obtener partes de una fecha
Dado un objeto Date, muestra:
Año (getFullYear)
Mes (getMonth)
Día (getDate)
Día de la semana (getDay)
Hora, minutos y segundos (getHours, getMinutes, getSeconds)*/
console.log("Año: " + date1.getFullYear());
console.log("Mes: " + date1.getMonth());
console.log("Día: " + date1.getDate());
console.log("Día de la semana: " + date1.getDay());
console.log("Hora: " + date1.getHours());
console.log("Minutos: " + date1.getMinutes());
console.log("Segundos: " + date1.getSeconds());


/*Convertir a string
Muestra la fecha actual en formato legible usando .toDateString() y .toTimeString().*/
console.log(date1.toDateString());
console.log(date1.toTimeString());


/*Nivel 2 – Operaciones con fechas
Sumar días
Escribe una función que reciba una fecha y un número de días, y devuelva la nueva fecha resultante.*/
function sumarDias(date3, numDias){
    const dateFinal = new Date(date3);
    //COGEMOS EL DIA DE LA FECHA Y LE SUMAMOS LOS DIAS
    dateFinal.setDate(dateFinal.getDate() + numDias)
    return dateFinal;
}
console.log("Sumar dias a una fecha: " + sumarDias(date1, 4));


/*Diferencia entre dos fechas
Calcula cuántos días faltan desde hoy hasta el próximo 31 de diciembre.*/
function diasFinAnio(){
    const hoy = new Date();
    const ultimoDia = new Date("2025/12/31");
    //calculamos lo que falta en milisegundos
    const quedanMili = ultimoDia - hoy;
    //convertimos el resultado anterior a dias
    const quedanDias = Math.ceil(quedanMili/(1000*3600*24));
    return quedanDias;
}
console.log("Quedan " + diasFinAnio() + " días para el 31 de diciembre del 2025");


/*Comparar fechas
Dadas dos fechas, determina cuál es anterior y cuál posterior.*/
const date4 = new Date("2025-09-24");
const date5 = new Date("2024-06-31");
if (date4 < date5) {
    console.log(date4.toDateString() + " es anterior a " + date5.toDateString());
} else if (date4 > date5) {
    console.log(date4.toDateString() + " es posterior a " + date5.toDateString());
} else {
    console.log("Son iguales");
}


/*Primer día del mes
Crea una función que, dado un año y un mes, devuelva qué día de la semana fue el primer día de ese mes.*/
function diaSemana(anio, mes){
    //al mes le restamos 1 ya que no llega hasta 12 sino hasta 11, desde el 0
    const date6 = new Date(anio, mes - 1, 1);
    //creamos un array para que al mostrarlo en la consola
    //no nos aparezca el numero, sino el dia
    const dia = ["Domingo", "Lunes", "Marte", "Miercoles", "Jueves", "Viernes", "Sabado0"];
    return dia[date6.getDay()];
}
console.log(diaSemana(2025,9));


/*Nivel 3 – Formateo y zonas horarias
ISO string
Convierte la fecha actual a formato ISO (.toISOString()).*/
console.log(date1.toISOString());


/*Fecha local y UTC
Muestra la misma fecha en hora local y en UTC.*/
console.log(date1.toISOString());
console.log(date1.toLocaleString());


/*Formateo personalizado
Escribe una función que reciba un objeto Date y devuelva un string con el formato:
DD/MM/YYYY HH:mm:ss*/
//con padstart hacemos que tenga 2 digitos y sino los rellena con 0
function formatoFecha(date7){
    const fechaformat = new Date();
    let dia = String(fechaformat.getDate()).padStart(2, "0");
    let mes = String(fechaformat.getMonth() + 1).padStart(2, "0");
    let anio = fechaformat.getFullYear();
    let horas = String(fechaformat.getHours()).padStart(2, "0");
    let minutos = String(fechaformat.getMinutes()).padStart(2, "0");
    let segundos = String(fechaformat.getSeconds()).padStart(2, "0");
    return dia + "/" + mes + "/" + anio + " " + horas + ":" + minutos + ":" + segundos;
}
console.log(formatoFecha(date1));


/*Internacionalización
Usa Intl.DateTimeFormat para mostrar la fecha actual en:
Español (España)
Inglés (EE.UU.)
Japonés*/
//ESPAÑA
const fechaEspaña = new Intl.DateTimeFormat('es-ES');
console.log(fechaEspaña.format(date1));
//EE.UU
const fechaEeuu = new Intl.DateTimeFormat('en-US');
console.log(fechaEeuu.format(date1));
//JAPON
const fechaJapon = new Intl.DateTimeFormat('ja-JP');
console.log(fechaJapon.format(date1));


/*Nivel 4 – Retos aplicados
Cuenta atrás
Crea un programa que muestre en consola los días, horas, minutos y segundos que faltan para Año Nuevo.*/
function anioNuevo(){
    const today = new Date();
    const fin = new Date("2025/12/31 23:59:59");
    //calculamos lo que falta en milisegundos
    const quedan = fin - today;
    let hora = fin.getHours() - today.getHours();
    let mes = fin.getMonth() - today.getMonth();
    let dia = fin.getDate() - today.getDate();
    let min = fin.getMinutes() - today.getMinutes();
    let seg = fin.getSeconds() - today.getSeconds();
    return "Faltan " + mes + " meses, " + dia + " dias, " + "horas " + hora + " minutos " + min + " segundos " + seg + " para AÑO NUEVO!!!!!!!";
    //convertimos
    /*const quedanDias = Math.ceil(quedan/(1000*3600*24));
    const quedanHoras = (quedanDias%(1000*3600*24))/(1000*3600);
    const quedanMin = (quedanHoras%(1000*3600*24)) / (1000*60);
    const quedanSeg = (quedanMin%(1000*3600*24)) / 1000;
    let cadena = "Quedan " + quedanDias + " dias, " + quedanHoras + " horas, " + quedanMin + " minutos, " + quedanSeg + " segundos para AÑO NUEVO!!!!!!!";
    return cadena;*/
}
console.log(anioNuevo());


/*Edad exacta
Escribe una función que reciba una fecha de nacimiento y calcule la edad exacta en años, meses y días.*/
function edad(nacimiento){
    const fechaNacimiento = new Date(nacimiento);
    const fechaHoy = new Date();
    let año = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaHoy.getMonth() - fechaNacimiento.getMonth();
    let dia = fechaHoy.getDate() - fechaNacimiento.getDate();
    return "Tienes " + año + " años, " + mes + " meses, " + dia + " dias";
}
console.log(edad("2002-06-18"));


/*Calendario simple
Genera un array con todas las fechas de un mes específico (ej. septiembre 2025).*/
const anio = 2025;
const mes = 9; 
const fechasMes = [];
// Obtenemos cuántos días tiene el mes
const diasEnMes = new Date(anio, mes, 0).getDate();
for (let i = 1; i <= diasEnMes; i++) {
    // Creamos un objeto Date para cada día
    // mes-1 porque enero=0 entonces el mes 9 seria el 8
    const fecha = new Date(anio, mes - 1, i);
    fechasMes.push(fecha);
}
console.log(fechasMes + "\n");


/*Próximo viernes 13
Escribe un programa que encuentre la próxima fecha que sea viernes 13.*/
//DEVUELVE LA FECHA DEL SIGUIENTE VIERNES 13
function encuentraViernes13() {
    let resultado = new Date();
    let encontrado = false;
    while (!encontrado) {
        if (resultado.getDate() == 13 && resultado.getDay() == 5) {
            encontrado = true;
        } else {
            resultado.setDate(resultado.getDate() + 1);
        }
    }
    return resultado;
}
console.log(encuentraViernes13().toDateString());