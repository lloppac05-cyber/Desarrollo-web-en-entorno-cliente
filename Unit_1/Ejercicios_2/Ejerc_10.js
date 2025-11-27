/*
    10. Mini-reto 🎯
    👉 Escribe un programa que:

        Guarde una nota escolar (A, B, C, D, F).
        Use switch para mostrar un mensaje:
            "Excelente" si es A
            "Muy bien" si es B
            "Bien" si es C
            "Suficiente" si es D
            "Reprobado" si es F
*/

var nota = prompt("Introduce una nota A, B, C, D, F");
//pasamos a mayuscula
nota = nota.toUpperCase();
switch(nota)
{
    case "A":
        console.log("Excelente");
    break;
    case "B":
        console.log("Muy bien");
    break;
    case "C":
        console.log("Bien");
    break;
    case "D":
        console.log("Suficiente");
    break;
    case "F":
        console.log("Reprobado");
    break;
    default:
        console.log("No has introducido una letra valida");
    break;
}