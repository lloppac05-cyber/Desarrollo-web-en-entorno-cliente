/*
    9. Clasificación de frutas
    👉 Escribe un programa que:

        Guarde en una variable una fruta (por ejemplo "manzana" o "plátano").
        Use switch para mostrar si es:
            "Manzana" → "Es una manzana roja"
            "Plátano" → "Es un plátano amarillo"
            "Uva" → "Es una uva morada"
            Otro caso → "Fruta no reconocida"
*/

var fruta = prompt("Introduce una fruta, manzana, platano o uva");
//pasamos a minuscula
fruta = fruta.toLowerCase();
switch(fruta)
{
    case "manzana":
        console.log("Es una manzana roja");
    break;
    case "platano":
        console.log("Es un platano amarillo");
    break;
    case "uva":
        console.log("Es una uva morada");
    break;
    default:
        console.log("Fruta no reconocida");
    break;
}