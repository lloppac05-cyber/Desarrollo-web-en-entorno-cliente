/**
    5. El mayor de dos números
    Escribe un programa que:

        Guarde dos números en variables.
        Use if-else para mostrar cuál de los dos es mayor.
        Si son iguales, muestra "Son iguales".
*/

var num1 =  prompt("Introduce un numero");
var num2 = prompt("Introduce otro numero");

if(num1 == num2)
{
    console.log("Son iguales");
}
else
{
    if(num1 < num2)
    {
        console.log( num2 + " es mayor");
    }
    else
    {
        console.log(num1 + " es mayor");
    }
}