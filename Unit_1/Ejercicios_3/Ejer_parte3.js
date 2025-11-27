/*
    6. Pedir contraseña
👉 Escribe un programa que:

Pida un valor (puede ser una variable simulando entrada).
Use un bucle do-while para repetir hasta que la contraseña sea "1234".
Muestra un mensaje "Contraseña correcta" cuando termine.*/

do
{
    var contrase = Number(prompt("Introduce la contraseña"));
    console.log("Contraseña incorrecta");
}while(contrase != 1234);
console.log("Contraseña correcta");

/*7. Contador con do-while
👉 Escribe un programa que:

Use un bucle do-while para contar del 1 al 5.
Muestra los números en consola.
*/
var num1 = 1;
do
{
    console.log(num1);
    num1 ++;
}while(num1 < 6);