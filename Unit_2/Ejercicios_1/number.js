/*Nivel 1 – Conversión y propiedades básicas
Conversión a número
Convierte las cadenas "123", "3.14" y "abc" en números usando Number(), parseInt() y parseFloat(). 
Explica la diferencia en los resultados.*/
let a = parseInt("123");
let b = parseFloat("3.14");
let c = Number("abc");
console.log(a);
console.log(b);
console.log(c);
//la diferencia es que 123 te lo pasa a numero, 3.14 al ser decimal utilizamos float y te lo pasa tambien
//y en la c al ser letras y querer pasarlo a numero aparece NaN que es Not a Number.


/*Comprobar si es entero
Escribe una función que reciba un valor y devuelva true si es un número entero (Number.isInteger) 
y false en caso contrario.*/
function esEntero(num)
{
    let salida = true;
    if (!Number.isInteger(num))
        salida = false;
    
    return salida;
}
//ENTERO
console.log("¿El numero es entero? " + esEntero(4));
//DECIMAL
console.log("¿El numero es entero? " +  esEntero(4.5));
//TEXTO
console.log("¿El numero es entero? " +  esEntero("HOLA"));


/*Not a Number
Prueba qué devuelve Number.isNaN con los valores: NaN, "hello", undefined, 0/0, parseInt("abc").*/
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(parseInt("abc")));


/*Valores infinitos
Divide 1 entre 0 y comprueba si el resultado es infinito (Number.isFinite).*/
let division = 1/0;
console.log(Number.isFinite(division));


/*Nivel 2 – Métodos de instancia
Número con decimales fijos
Dado el número 3.141592, muéstralo con 2, 4 y 6 decimales usando .toFixed.*/
console.log(Math.PI.toFixed(2));
console.log(Math.PI.toFixed(4));
console.log(Math.PI.toFixed(6));


/*Representación exponencial
Convierte 123456 a notación científica con .toExponential(2).*/
let notacion = 123456;
console.log(notacion.toExponential(2));


/*Conversión a string con base
Convierte el número 255 a:
Binario
Octal
Hexadecimal
usando .toString(base).*/
let num = 255;
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));


/*Precisión controlada
Usa .toPrecision para representar 123.456789 con 4 y 7 cifras significativas.*/
let num1 = 123.456789;
console.log(num1.toPrecision(4));
console.log(num1.toPrecision(7));


/*Nivel 3 – Retos aplicados
Validador de números
Escribe una función que reciba una cadena y devuelva:
Si es un número válido
Si es entero o decimal*/
function validarNumeros(cadena){
    //declaramos una variable donde guardaremos si es valido o no
    let valido = "";
    //comprobamos si no es un numero valido
    if(isNaN(cadena))
        valido = "No es un numero valido";
    else
    {
        //comprobamos si es entero o decimal
        if(Number.isInteger(cadena))
            valido = "Si es entero";
        else
            valido = "Si es decimal";
    }
    return valido;
}
//CADENA
console.log(validarNumeros("hola"));
//ENTERO
console.log(validarNumeros(4));
//DECIMAL
console.log(validarNumeros(4.5));
