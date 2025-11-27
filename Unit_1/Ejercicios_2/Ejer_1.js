/*
    Escribe un programa que:
        Pida un numero (puede ser una variable fija)
        Muestre en consola si es positivo o negativo
*/
//le hacemos un casting (convertimos a numero)
var num = Number(prompt("Dime un numero"));
//num = parseInt(num);
//si es menor de 0 muestra negativo
if (num < 0)
{
    console.log("Negativo");
}
else
{
    //si es mayor muestra positivo
    if (num > 0)
    {
        console.log("Positivo");
    }
    //sino muestra 0
    else
    {
        console.log("Es el 0");
    }
}