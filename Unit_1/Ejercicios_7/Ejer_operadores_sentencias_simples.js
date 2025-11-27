/*Ejercicio 1: Suma de números
Objetivo: Practicar operadores aritméticos.
Enunciado: Crea un programa que pida al usuario dos números y muestre la suma, 
resta, multiplicación y división de ambos.*/
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
// Tu código aquí para mostrar suma, resta, multiplicación y división
console.log(num1 + " + " + num2 + "= " + (num1+num2));
console.log(num1 + " - " + num2 + "= " + (num1-num2));
console.log(num1 + " * " + num2 + "= " + (num1*num2));
console.log(num1 + " / " + num2 + "= " + (num1/num2));


/*Ejercicio 2: Determinar par o impar
Objetivo: Practicar operadores de módulo (%) y condicionales.
Enunciado: Pide al usuario un número e indica si es par o impar.*/
let nume = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar
if(nume%2 == 0)
    console.log("Par");
else
    console.log("Impar");


/*Ejercicio 3: Mayor de tres números
Objetivo: Practicar operadores de comparación y condicionales.
Enunciado: Pide al usuario tres números e indica cuál es el mayor.*/
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor
if(a > b && a > c)
    console.log("El mayor es " + a);
else
{
    if(b > a && b > c)
        console.log("El mayor es " + b);
    else
        console.log("El mayor es " + c);
}

/*Ejercicio 4: Tabla de multiplicar
Objetivo: Practicar bucles y operadores.
Enunciado: Pide un número y muestra su tabla de multiplicar del 1 al 10.*/
let numTabla = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar
for(let i = 0; i<=10; i++)
{
    console.log(numTabla + " * " + i + "= " + (numTabla*i));
    document.writeln(numTabla + " * " + i + "= " + (numTabla*i) + "<br></br>");
    //document.writeln(`)
}


/*Ejercicio 5: Suma de números del 1 al N
Objetivo: Practicar bucles y acumuladores.
Enunciado: Pide un número N e imprime la suma de todos los números del 1 hasta N.*/
let num3 = Number(prompt("Ingrese un número"));
var resultado = 0;
// Usa un bucle for y una variable acumuladora para sumar
for(let i = 0; i<= num3;i++)
    resultado = resultado + i;
console.log(resultado);


/*Ejercicio 6: Contador de números positivos y negativos
Objetivo: Practicar condicionales dentro de bucles.
Enunciado: Pide 5 números y cuenta cuántos son positivos y cuántos negativos.*/
let positivos = 0;
let negativos = 0;
for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    if(num < 0)
        negativos ++;
    else
        positivos ++;
}
console.log("Negativos: " + negativos);
console.log("Positivos: " + positivos);


/*Ejercicio 7: Número primo
Objetivo: Practicar bucles anidados y operadores.
Enunciado: Pide un número e indica si es primo o no.*/
let num = Number(prompt("Ingrese un número"));
// Usa un bucle para verificar si es divisible por algún número menor que él
var i = 2;
var continua = true;
while(num%i !=0 && i < num && continua == true)
{
    i++;
    if(num%i == 0)
    {
        console.log("Es primo");
        continua = false;
    }
    else
    console.log("Es no primo");
}


/*Ejercicio 8: Factorial de un número
Objetivo: Practicar bucles y operadores de multiplicación.
Enunciado: Pide un número y calcula su factorial usando un bucle for.*/
let numero = Number(prompt("Ingrese un número"));
let factorial = 1;
// Calcula el factorial con un bucle
for(let i = 1; i <= numero; i++)
{
    factorial *= i;
}
console.log(factorial);


/*Ejercicio 9: Números pares hasta N
Objetivo: Practicar bucles y operadores.
Enunciado: Pide un número N e imprime todos los números pares desde 1 hasta N.*/
let N = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares
for(let i = 1; i <= N; i++)
{
    if(i%2 == 0)
        console.log(i);
}


/*Ejercicio 10: Adivina el número
Objetivo: Practicar bucles while y condicionales.
Enunciado: El programa genera un número aleatorio entre 1 y 10. El usuario intenta adivinarlo hasta acertar. 
Indica si su intento es mayor o menor que el número.*/
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto
    if(intento > numeroSecreto)
        alert("El intento es mayor al numero");
}
