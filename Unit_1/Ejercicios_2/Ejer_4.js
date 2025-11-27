/*
    Escribe un programa que:
        Guarde una calificacion del 0 al 10
        Use if-else para mostrar:
            Aprobado si es 5 o mas
            Reprobado si es menor a 5
*/

var nota = Number(prompt("Introduce tu nota para saber si estas aprobado o no"));

if(nota < 5 && nota >= 0)
{
    console.log("Reprobado");
}
else
{ 
    if(nota => 5 && nota <= 10)
    {
        console.log("Aprobado");
    }
    else
    {
        console.log("Tu nota no puede ser mayor a 10 ni menor a 0");
    }
}