//TD ES COLUMNA Y TR ES FILA
/*
    4.10
    Escribir un programa que muestre la frase
    "Cabecera h" seguido del numero.
    Las frases deben estar formateadas con las
    etiquetas adecuadas.
*/

var texto = "Cabecera h";
for(let x = 1; x < 7; x++)
{
    //con esto mostramos el texto en diferentes tamaños
    //h1, h2 asi hasta h7
    document.writeln("<h" + x + ">" + texto + x + "</h" + x + ">");
}
//cambiar el color de fondo
document.body.style.backgroundColor = "pink";


/*
    4.11
    Hacer un programa que pida por teclado tres valores:
    el numero de columnas de una tabla y la altura y anchura 
    (en pixels) de sus celdas. Una vez tecleados estos
    valores, el programa pintara en la pagina web una 
    tabla HTML de una fila por el nº de columns tecleadas
*/
var columna = Number(prompt("Introduce el numero de columnas de la tabla que quieres crear"));
var alto = Number(prompt("Introduce el numero de pixels de alto"));
var ancho = Number(prompt("Introduce el numero de pixels de ancho"));
//etiqueta de apertura de la tabla
document.writeln("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.writeln("<tr>");
for(let i = 0; i< columna;i++)
{
    document.writeln('<td bgcolor="white" height="{alto}" width="{ancho}">&nbsp;</td>');
}
document.writeln("</tr>");
//etiqueta de cierre de la tabla
document.writeln("</table>");


/*
    4.12
    Modifica el ejercicio anterior para que las columnas
    impares tengan un fondo negro y las pares un fondo blanco
*/
//var colum = Number(prompt("Introduce el numero de columnas de la tabla que quieres crear"));
//var altura = Number(prompt("Introduce el numero de pixels de alto"));
//var anchura = Number(prompt("Introduce el numero de pixels de ancho"));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr>");
for(let i = 0; i< columna;i++)
{
    if(i%2 == 0)
    {
        document.write('<td bgcolor="black" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
    else
    {
        document.write('<td bgcolor="white" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
}
document.write("</tr>");
document.write("</table>");


/*
    4.13
    Adapta el ejercicio 4.11 utilizando un bucle while
    en vez de un bucle for
*/
document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr>");
let i = 0;
while(i< columna)
{
    document.write('<td bgcolor="white" height="{alto}" width="{ancho}">&nbsp;</td>');
    i++;
}
document.write("</tr>");
document.write("</table>");


/*
    4.14
    Adapta el ejercicio 4.12 utilizando un bucle while
    en vez de un bucle for
*/
document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr>");
let x = 0;
while( x < columna)
{
    if(x%2 == 0)
    {
        document.write('<td bgcolor="black" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
    else
    {
        document.write('<td bgcolor="white" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
    x++;
}
document.write("</tr>");
document.write("</table>");


/*
    4.15
    Escribe un programa en JavaScript que consista en 
    adivinar un numero previamente introducido por teclado
    (jugador 1)
    El programa pedira tantos numeros como intentos erroneos
    haga el jugador 2. Solamente terminara cuando el jugador 2 
    aciert4e
    El programa dara pistas al jugador 2 indicandole si el numero
    es mayor o menor que el numero a adivinar
*/
var num_adivinar = Number(prompt("Introduce un numero para que lo adivine el jugador 2"));
var num = Number(prompt("Introduce el numero que creas que es"));
if(num == num_adivinar)
{
    alert("Numero correcto");
}
else
{
    while(num != num_adivinar)
    {
        if(num < num_adivinar)
        {
            alert("El numero es mayor");
        }
        else
        {
            alert("El numero es menor");
        }
        num = Number(prompt("Introduce el numero que creas que es"));
    }
}
    

/*
    4.16
    Adaptar el ejercicio 4.15 al bucle DO...WHILE
*/
if(num == num_adivinar)
{
    alert("Numero correcto");
}
else
{
    do
    {
        if(num < num_adivinar)
        {
            alert("El numero es mayor");
        }
        else
        {
            alert("El numero es menor");
        }
        num = Number(prompt("Introduce el numero que creas que es"));
    }while(num != num_adivinar);
}


/*
    4.17
    Hacer un programa en JavaScript que usando dos bucles
    anidados for imprima por pantalla las tablas de multiplicar
    El resultado seria algo asi
*/
for(let y = 0; y < 11; y++)
{
    console.log("Tabla del " + y);
    for(let z = 0; z < 11; z++)
    {
        console.log(z + "*" + y + "=" + (z*y));
    }
}


/*
    4.18
    Hacer un programa que pida por teclado cuatro valores: el numero
    de columnas y filas de una tabla y, la altura y anchura (en pixels)
    de sus celdas. Una vez tecleados estos valores, el programa pintara
    en la pagina web una tabla HTML del nº de filas por el nº de columnas.
*/
var colum = Number(prompt("Introduce el numero de columnas de la tabla que quieres crear"));
var fila = Number(prompt("Introduce el numero de filas de la tabla que quieres crear"));
var altura = Number(prompt("Introduce el numero de pixels de alto"));
var anchura = Number(prompt("Introduce el numero de pixels de ancho"));

document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr>");
for(let i = 1; i< columna;i++)
{
    for(let x = 0; x < fila; x++)
    {
        document.write('<td bgcolor="white" height="{alto}">&nbsp;</td>');
    }
    document.write('<td bgcolor="white" width="{ancho}">&nbsp;</td>');
}
document.write("</tr>");
document.write("</table>");


/*
    4.19
    Hacer un programa que pinte un tablero de ajedrez de 8x8
    casillas usando dos for anidados
    El programa pedira solamente el ancho de la celda que sera 
    igual que el alto
*/
num_columna = 8;
num_fila = 8;
num_ancho = Number(prompt("Dime el numero de alto y ancho"));
anchura_total = num_ancho * num_columna;
var aumento_fila_columna = 0;
var descenso_fila_columna = 0;
document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write("<tr>");
for(let i = 0; i< columna;i++)
{
    if(i%2 == 0)
    {
        document.write('<td bgcolor="black" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
    else
    {
        document.write('<td bgcolor="white" height="{alto}" width="{ancho}">&nbsp;</td>');
    }
}
document.write("</tr>");
document.write("</table>");