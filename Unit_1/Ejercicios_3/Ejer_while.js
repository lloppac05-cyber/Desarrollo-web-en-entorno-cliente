/*
Parte 2: while
4. Contador descendente
👉 Escribe un programa que:

Use un bucle while para contar de 10 a 1.
Muestra cada número en consola.*/
let y = 10;
while(y >= 1)
{
    console.log(y);
    y--;
}

/*5. Suma hasta 20
👉 Escribe un programa que:

Use un bucle while para sumar números comenzando desde 1 hasta que la suma sea mayor o igual a 20.
Muestra la suma final.
*/
let nume = 1;
let resul = 0;
while(resul < 20)
{
    resul += nume;
    nume++;
}
console.log(resul);