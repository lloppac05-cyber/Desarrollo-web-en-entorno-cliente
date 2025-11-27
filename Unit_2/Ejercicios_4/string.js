/*Nivel 1 – Manipulación básica
Longitud de un string
Declara la cadena "JavaScript" y muestra cuántos caracteres
 tiene usando .length.*/
let cadena1 = "JavaScript";
console.log(cadena1.length);


/*Acceso a caracteres
Obtén el primer y último carácter de la cadena "Hola mundo".*/
let cadena3 = "Hola mundo";
console.log(cadena3.charAt(0));
console.log(cadena3.charAt(cadena3.length - 1));


/*Mayúsculas y minúsculas
Convierte la frase "Programar es divertido" a:
Mayúsculas (.toUpperCase())
Minúsculas (.toLowerCase())*/
let fras = "Programar es divertido";
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


/*Concatenación
Une las cadenas "Hola" y "Mundo" usando el operador + y el 
método .concat.*/
let saludo1 = "Hola";
let saludo2 = "Mundo";
console.log(saludo1 + " " + saludo2);
console.log(saludo1.concat(" ", saludo2));


/*Nivel 2 – Búsqueda y extracción
Índices de caracteres
Encuentra en qué posición aparece la primera y la última 
vez la letra "o" en "Hola mundo".*/
let frase4 = "Hola mundo";
console.log(frase4.indexOf("o"));
console.log(frase4.lastIndexOf("o"));


/*Subcadenas
Dada la cadena "JavaScript es genial", extrae "JavaScript" 
y "genial" usando .substring o .slice.*/
let cadena = "JavaScript es genial";
//inicio y final
let subcadena1 = cadena.substring(0, 10);
//hace un corte desde el final, -6 es decir que coja los 6 ultimos caracteres
let subcadena2 = cadena.slice(-6);
console.log(subcadena1);
console.log(subcadena2);


/*Reemplazo de texto
Reemplaza "perro" por "gato" en la frase "El perro corre 
rápido".*/
let frase = "El perro corre rápido";
let nuevaFrase = frase.replace("perro", "gato");
console.log(nuevaFrase);


/*Incluye o empieza con
Verifica si la cadena "Frontend Developer":
Incluye "end" (.includes)
Empieza con "Front" (.startsWith)
Termina con "per" (.endsWith)*/
let frase2 = "Frontend Developer";
console.log(frase.includes("end"));
console.log(frase.startsWith("Front"));
console.log(frase.endsWith("per"));


/*Nivel 3 – Transformaciones avanzadas
Dividir un string
Convierte la frase "rojo,verde,azul,amarillo" en un array 
usando .split.*/
let colores = "rojo,verde,azul,amarillo";
let arrayColores = colores.split(",");
console.log(arrayColores);


/*Repetir texto
Repite la palabra "Hola" 5 veces con .repeat.*/
let palabra = "Hola. ";
console.log(palabra.repeat(5));


/*Eliminar espacios
Elimina los espacios al inicio y al final de la cadena "  
Hola mundo   " usando .trim.*/
let saludo = "   Hola mundo   ";
console.log(saludo.trim());


/*Padding
Rellena el número "7" a la izquierda con ceros hasta tener 
"007" usando .padStart.*/
let numero = "7";
console.log(numero.padStart(3, "0"));


/*Nivel 4 – Retos aplicados
Contar vocales
Escribe una función que cuente cuántas vocales hay en una
cadena.*/
function contarVocales(cadena){
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for(let i = 0; i < cadena.length; i++){
        if(vocales.includes(cadena[i])){
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Laura LoperA"));


/*Palíndromo
Crea una función que verifique si una palabra (ej. "radar")
 es un palíndromo.*/
function esPalindromo(palabra){
    let palabraInvertida = palabra.split("").reverse().join("");
    let salida = ""
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] !== palabraInvertida[i]){
            salida = "No es palindromo " + palabraInvertida;
        }
        let resultado = (palabraInvertida == palabra);
        salida = resultado + " " + palabraInvertida;
    }
    return salida;
}
console.log(esPalindromo("radar"));
console.log(esPalindromo("Laura"));


/*Invertir string
Invierte la cadena "JavaScript" para que quede "tpircSavaJ".*/
let cadena2 = "JavaScript";
console.log(cadena.split("").reverse().join(""));


/*Capitalizar frase
Escribe una función que convierta "hola mundo desde 
javascript" en "Hola Mundo Desde Javascript".*/
function capitalizarFrase(frase){
    let palabras = frase.split(" ");
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
}
console.log(capitalizarFrase("Hola mundo desde Javascript"));


/*Ocultar parte de un string
Dado un número de tarjeta "1234567812345678", muéstralo 
como "************5678".*/
let tarjeta = "1234567812345678";
let ultimaParte = tarjeta.slice(-4);
let oculto = "*".repeat(tarjeta.length - 4) + ultimaParte;
console.log(oculto);


/*Contador de palabras
Dada la frase "El lenguaje JavaScript es muy poderoso", 
cuenta cuántas palabras tiene.*/
let frase3 = "El lenguaje JavaScript es muy poderoso";
//con trim eliminamos los espacios en blanco al principio y al final
//con split separamos la cadena en un array por las palabras, separadas por espacio
let palabras = frase3.trim().split(" ");
console.log(palabras.length);