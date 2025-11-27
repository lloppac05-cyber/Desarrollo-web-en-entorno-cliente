/*
    3. Tabla de multiplicar
👉 Escribe un programa que:

Guarde un número en una variable.
Use un bucle for para mostrar su tabla de multiplicar del 1 al 10.
*/

var num = Number(prompt("Dime un numero para mostrar su tabla de multiplicar"));
for (let i = 0; i < 11; i++)
{
    console.log(num + " * " + i + "= " + num * i);
}