/*
    7. Menú de opciones
    👉 Escribe un programa que:

        Guarde un número del 1 al 3 en una variable.
        Use switch para mostrar:
            1 → "Opción A seleccionada"
            2 → "Opción B seleccionada"
            3 → "Opción C seleccionada"
            Otro → "Opción no válida"
*/

var num = prompt("Introduce un numero");
num = parseInt(num);

switch(num)
{
    case 1:
        console.log("Opcion A seleccionada");
    break;
    case 2:
        console.log("Opcion B seleccionada");
    break;
    case 3:
        console.log("Opcion C seleccionada");
    break;
    default:
        console.log("Opcion no valida");
    break;
}
