/*
    8. Semáforo
    👉 Escribe un programa que:

        Guarde un color en una variable ("rojo", "amarillo" o "verde").
        Use switch para mostrar:
            "Alto" si es rojo.
            "Precaución" si es amarillo.
            "Avanza" si es verde.
*/

var color = prompt("Introduce un color, rojo, amarillo o verde");
//lo pasamos a minuscula para comparar en el switch y no haya problemas
color = color.toLowerCase();
switch(color)
{
    case "rojo":
        console.log("Alto");
    break;
    case "amarillo":
        console.log("Precaucion");
    break;
    case "verde":
        console.log("Avanza");
    break;
}