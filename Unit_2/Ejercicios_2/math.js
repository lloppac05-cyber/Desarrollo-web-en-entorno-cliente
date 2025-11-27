/*Nivel 1 – Básicos
Número absoluto
Escribe una función que reciba un número y devuelva su valor absoluto usando Math.abs.*/
function numeroAbsoluto (numero){
    console.log(Math.abs(numero));
}
console.log(numeroAbsoluto(4));

/*Redondeo simple
Pide al usuario un número decimal y muestra:
Su valor redondeado (Math.round)
Su redondeo por exceso (Math.ceil)
Su redondeo por defecto (Math.floor)*/
let num = Number(prompt("Dime un numero"));
console.log("Su valor redondeado " + Math.round(num));
console.log("Su redondeo por exceso " + Math.ceil(num));
console.log("Su redondeo por defecto " + Math.floor(num));


/*Potencias y raíces
Calcula ( 5^3 ) con Math.pow.
Calcula la raíz cuadrada de 81 con Math.sqrt.*/
console.log("5^3 = " + (Math.pow(5, 3)));
console.log("La raiz cuadrada de 81 es " + (Math.sqrt(81)));


/*Valor máximo y mínimo
Dado el array [10, -5, 3, 99, 42], encuentra el número más grande y el más pequeño 
usando Math.max y Math.min.*/
let array = [12, -5, 3, 99, 42];
console.log("Mayor: " + (Math.max(...array)));
console.log("Menor: " + (Math.min(...array)));


/*Nivel 2 – Aleatoriedad
Número aleatorio entre 0 y 1
Genera un número aleatorio con Math.random y muéstralo.*/
console.log(Math.random() * 1);


/*Dado virtual (1–6)
Usa Math.random y Math.floor para simular el lanzamiento de un dado que devuelva 
un número del 1 al 6.*/
let dado = Math.floor(Math.random() * (7 - 1)) + 1;
console.log("El resultado del dado es: " + dado);


/*Número aleatorio en un rango
Crea una función que reciba dos números (min, max) y devuelva un 
número entero aleatorio en ese rango.*/
function numAleatorio(min, max){
    let aleatorio = Math.round(Math.random() * (max - min)) + min;
    return aleatorio;
}
console.log(numAleatorio(2, 5));


/*Nivel 3 – Trigonometría y logaritmos
Seno y coseno
Calcula el seno y coseno de 45° (recuerda que Math.sin y Math.cos 
trabajan en radianes, no en grados).*/
//FORMULA PARA PASAR DE GRADOS A RADIANES
let radianes = (45 * (Math.PI/180));
console.log("Seno de 45º: " + (Math.sin(radianes)));
console.log("Coseno de 45º: " + (Math.cos(radianes)));


/*Tangente y arco tangente
Calcula la tangente de 60°.
Convierte un valor usando Math.atan a grados.*/
//FORMULA PARA PASAR DE GRADOS A RADIANES
radian = 60 * (Math.PI/180);
console.log("Tangente de 60: " + Math.tan(radian));
console.log("Arco tangente de 60: " + Math.atan(radian));


/*Logaritmos
Calcula el logaritmo natural de 10 (Math.log).*/
console.log("Logaritmo natural de 10: " + (Math.log(10)));


/*Nivel 4 – Retos aplicados
Juego: adivina el número
Genera un número aleatorio entre 1 y 100 y pide al usuario adivinarlo. 
Indica si el número ingresado es mayor o menor hasta que acierte.*/
let numAlea = Math.floor(Math.random() * (101 - 1) + 1);
let numIngresado = Number(prompt("Ingresa el numero que creas que es"));

while (numIngresado !== numAlea) {
    if (numIngresado < numAlea) {
        console.log("El número que has ingresado es menor");
    } else {
        console.log("El número que has ingresado es mayor");
    }
    numIngresado = Number(prompt("Ingresa el número que creas que es"));
}
console.log("Has acertado, el número es " + numAlea);



/*Distancia entre dos puntos
Dadas las coordenadas (x1, y1) y (x2, y2), calcula la distancia usando la fórmula:
[ \sqrt{(x2 - x1)^2 + (y2 - y1)^2} ]*/
let x1 = Number(prompt("Dime la coordenada x1"));
let y1 = Number(prompt("Dime la coordenada y1"));
let x2 = Number(prompt("Dime la coordenada x2"));
let y2 = Number(prompt("Dime la coordenada y2"));
let distancia = Math.sqrt(Math.pow((x2 - x1),2) + (Math.pow((y2 - y1), 2)));
console.log("La distancia es: " + distancia);


/*Simulación de ruleta
Simula una ruleta que tenga 36 números. Usa Math.random para elegir el número ganador.*/
let ruleta = Math.round(Math.random() * (36-1) + 1);
console.log("El numero ganador es: " + ruleta);


/*Generador de contraseñas simples
Usa Math.random y un conjunto de caracteres para crear una contraseña aleatoria de 8 caracteres.*/
let contraseña = Math.round(Math.random() * (9999999) + 1000000);
let cadena = "L";
console.log("La contraseña es: " + contraseña + cadena);