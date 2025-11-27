/* 1. Error de sintaxis

let nombre = "Ana
console.log(nombre);

👉 Problema: El código no se ejecuta.  
✅ Tarea: Encuentra el error y corrígelo. */

let nombre = "Ana";
console.log(nombre);


/* 2. Uso incorrecto de variables
console.log(edad);
let edad = 20;
👉 Problema: Se produce un error en la consola.
✅ Tarea: Identifica por qué y corrige el orden del código.*/
let edad = 20;
console.log(edad);


/*3. Operador incorrecto
let a = 5;
let b = 10;
if (a = b) {
  console.log("a es igual a b");
}
👉 Problema: El mensaje siempre aparece, aunque a no sea igual a b.
✅ Tarea: Corrige el operador de comparación.*/
let a = 5;
let b = 10;
if(a == b)
{
    console.log("a es igual a b");
}


/*4. Bucle infinito
let i = 0;
while (i < 5) {
  console.log(i);
}
👉 Problema: El bucle no termina.
✅ Tarea: Identifica el motivo y corrígelo.*/
let i = 0;
while(i<5)
{
    console.log(i);
    i++;
}


/*5. Error en funciones
function saludar() {
  console.log("Hola " + nombre);
}
saludar();
👉 Problema: Aparece un error si nombre no está definido.
✅ Tarea: Modifica la función para que reciba nombre como parámetro.*/
function saludar(nombre)
{
    console.log("Hola " + nombre);
}
saludar();


/*
    6. Error en arrays
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);
👉 Problema: undefined aparece en consola.
✅ Tarea: Ajusta el código para que no se acceda a un índice fuera del array.
*/
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);


/*
    7. Error con objetos
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());
👉 Problema: Se produce un error porque apellido no existe.
✅ Tarea: Corrige el código para que no falle.
*/
let persona = { nombre: "Ana", edad: 25, apellido: "Rosales" };
console.log(persona.apellido.toUpperCase());


/*
    8. Error en concatenación
let a = 5;
let b = "10";
console.log(a + b);
👉 Problema: El resultado no es el esperado (suma numérica).
✅ Tarea: Convierte correctamente los tipos de datos antes de sumar.
*/
let c = 5;
let d = Number("10");
console.log(c + d);


/*
    9. Error con if-else
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
👉 Problema: Siempre imprime "Aprobado".
✅ Tarea: Corrige la sintaxis del if para que funcione correctamente.
*/
let nota = 8;
if (nota > 5)
{
  console.log("Aprobado");
} 
else 
{
  console.log("Reprobado");
}


/*
    10. Mini-reto 🎯
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}
👉 Problema: Aparece undefined al final.
✅ Tarea: Ajusta el bucle para que solo recorra los elementos existentes.
*/
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}