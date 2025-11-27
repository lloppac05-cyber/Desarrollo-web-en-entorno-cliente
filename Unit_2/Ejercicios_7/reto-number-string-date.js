/*Aleatoriedad avanzada
#1
Generador de matrículas aleatorias
Crea un generador que devuelva matrículas tipo ABC-1234 con
letras y números aleatorios.*/
//funcion que genera matriculas
function generarMatricula(){
    //letras permitidas en las matriculas españolas
    const letras = "BCDFGHJKLMNPRSTVWXYZ";
    //numeros que puede contener la matricula
    const numeros = "0123456789";
    //inicializamos la matricula a nada (cadena vacia)
    let matricula = "";
    //bucle for que se repite 4 veces para generar 4 numeros
    for(let i = 0; i < 4; i++)
    {
        //generamos un numero aleatorio entre 0 y 9
        let num = Math.floor(Math.random() * 9);
        //añadimos el numero aleatorio a la matricula
        matricula += numeros.charAt(num);
    }
    //con otro for generamos 3 letras que iran al final de la matricula
    for(let j = 0; j < 3; j++){
    //generamos un numero aleatorio entre 0 y 20, que es la longitud de la cadena letras
    let letra = Math.floor(Math.random() * letras.length);
    //añadimos las letras a la matricula
    matricula += letras.charAt(letra);
    }
    //devolvemos la matricula
    return matricula;
}
//llamamos a la funcion
console.log(generarMatricula());


/*
#2
Simulador de dados múltiples
Simula lanzar n dados de m caras. Devuelve un string con los resultados y su suma total.
Ejemplo: 3 dados de 6 caras → "4, 2, 6 → total 12"*/
//creamos una funcion y le pasamos como parametro n que es el numero de dados y m el numero de caras
function lanzarDados(n, m){
    //declaramos la variable string donde guardaremos los resultados de los dados
    //la inicializamos a vacio
    let resultados = "";
    //declaramos la variable donde guardamos la suma de estos
    //inicializada a 0
    let suma = 0;
    //con un for generamos tantos numeros aleatorios como dados
    for(let i = 0; i < n; i++){
        //el numero lo generamos y guardamos en dado, con math.floor redondeamos
        let dado = Math.floor(Math.random() * m) + 1;
        //guardamos el resultado en la variable string, separados por una coma
        resultados += dado + ", ";
        //vamos sumando el resultado en la variable suma
        suma += dado;
    }
    //devolvemos el string
    return "El resultado de lanzar los dados es: " +  resultados + "la suma de estos resultados es: " + suma;
}
//lo mostramos por consola
console.log(lanzarDados(3, 6));
 

/*
#3
Generador de identificadores únicos
Genera un string alfanumérico aleatorio de 16 caracteres 
usando Math.random y .toString().*/
//generamos un identificador con math.random, lo convertimos a base 36 y cogemos los 16 primeros numeros
let identificador = Math.random().toString().substring(0, 16);
//lo mostramos en la consola
console.log(identificador);


/*🧠 Manipulación de Strings compleja
#4
Validador de contraseñas
Escribe una función que valide si una contraseña cumple con:
Al menos 8 caracteres
Una mayúscula
Un número
Un símbolo especial
Devuelve un string indicando si es válida o qué reglas 
no cumple.*/
function validarContrasena(contra){
    //declaramos las variables que usaremos para comprobar si la contrasena es valida
    let tieneMayuscula = false;
    let tieneNumero = false;
    let tieneSimbolo = false;
    let tieneOcho = false;
    let esValida = false;
    let valida = "";
    //comprobamos si tiene 8 caracteres
    if(contra.length >=8){
        tieneOcho = true;
    }
    //con un for recorremos para comprobar si tiene alguna mayuscula, un numero o simbolo
    for(let i = 0; i < contra.length; i++){
        //comprobamos la mayuscula
        if(contra[i] >= "A" && contra[i] <= "Z"){
            tieneMayuscula = true;
        }
        //comprobamos si tiene numero
        if(contra[i] >= 0 && contra[i] <= 9){
            tieneNumero = true;
        }
        //comprobamos el simbolo
        if(contra[i] == "!"|| contra[i] == "/" || contra[i] == "%" || contra[i] == "@" || contra[i] == "[" || contra[i] == "&" || contra[i] == "{"){
            tieneSimbolo = true;
        }
        if (tieneMayuscula == true && tieneNumero == true && tieneSimbolo == true && tieneOcho == true){
            esValida = true;
        }
    }
    if(esValida == false && tieneOcho == false){
        valida = "No valida, no tiene 8 caracteres";
    }
    else{
        if(esValida == false && tieneMayuscula == false){
            valida = "No valida, no tiene mayuscula";
        }
        else{
            if(esValida == false && tieneNumero == false){
                valida = "No valida, no tiene numero";
            }
            else{
                if(esValida == false && tieneSimbolo == false){
                    valida = "No valida, no tiene simbolo especial";
                }
                else{
                    valida = "Valida";
                }
            }
    }
    }
    return "Esta contraseña es: " + valida;
}
console.log(validarContrasena("Laura2005!"));
console.log(validarContrasena("laura25"));
console.log(validarContrasena("laura3225!"));
console.log(validarContrasena("lauraLopera!"));
console.log(validarContrasena("laura25321"));

/*
#5
Compresor de texto (RLE)
Implementa un compresor de cadenas con Run-Length Encoding:
"aaabbcddd" → "a3b2c1d3"*/
//creamos un funcion y le pasamos una cadena
function runLengthtEncoding(cadena){
    //inicializamos la variable comprimido a vacio
    let comprimido = "";
    //inicializamos el contador a 1
    let contador = 1;
    //recorremos el texto
    for(let i = 0; i < cadena.length; i++){
        //si el caracter en la posicion i es igual al siguiente, aumentamos el contador
        if(cadena[i] == cadena[i + 1]){
            contador++;
        }
        else{
            //si no es igual, añadimos el caracter y el contador a la variable comprimido
            comprimido += cadena[i] + contador;
            //volvemos a inicializar el contador a 1
            contador = 1;
        }
    }
    //devolvemos la cadena comprimida
    return comprimido;
}
console.log(runLengthtEncoding("aaabbcddd"));

/*
#6
Decodificador de texto (RLE)
Haz la función inversa:
"a3b2c1d3" → "aaabbcddd"*/
function runLengthDecoding(cadena) {
    let descomprimido = "";
    //recorremos la cadena de 2 en 2, porque supongo que tendrá solo un numero de repeticion
    //si fuera por ejemplo 12, no serviría
    //como suponemos que va a pares a3 b2 c1 d3, incrementamos i de 2 en 2
    for (let i = 0; i < cadena.length; i += 2) {
        //variable para la letra que vamos a repetir
        let letra = cadena[i];
        //variable para la cantidad (veces que se repite la letra)
        let cantidad = Number(cadena[i+1]);
        descomprimido += letra.repeat(cantidad);
    }
    return descomprimido;
}

console.log(runLengthDecoding("a3b2c1d3"));


/*
🚀 Retos combinados
#7
Juego: adivina el número con intentos limitados
Genera un número aleatorio entre 1 y 100. 
El usuario tiene 7 intentos. Devuelve mensajes en string 
indicando si debe subir o bajar, o si ganó.*/
//creamos una variable para almacenar el num de intentos permitidos
let intentos = 7;
//creamos una funcion para adivinar el numero y le pasamos el numero generado
function adivinaNumero(){
    let salida = "";
    //generamos un numero aleatorio
    let numAleatorio = Math.floor(Math.random() * 100) + 1;
    do{
        //creamos una variable que le pedimos al usuario
        adivinaUser = Number(prompt("Adivina el numero entre 1 y 100, tienes " + intentos + " intentos"));
        //si todavia quedan intentos
        if(intentos > 0){
            //si el numero es menor que el generado
            if(adivinaUser < numAleatorio){ 
                //decrementamos intentos
                intentos--;
                console.log("El numero es mayor");
            }
            // si el numero es mayor que el generado
            else if(adivinaUser > numAleatorio){
                //decrementamos intentos
                intentos--;
                console.log("El numero es menor");
            }
            //si no, has acertado
            else{
                console.log("Has acertado, el numero es " + numAleatorio);
            }
        }
        //si no quedan intentos
        else{
            console.log("No te quedan intentos, el numero es " + numAleatorio);
        }
    }while(adivinaUser != numAleatorio && intentos > 0);
    return salida;
}
console.log(adivinaNumero());


/*
#8
Generador de tarjetas de crédito falsas
Genera un número de tarjeta válido según el algoritmo de 
Luhn. Devuélvelo como string en el formato 
"####-####-####-####".*/
function generarTarjetas(){
    let tarjeta = Math.floor((Math.random() * (9999999999999999 - 1111111111111111)) + 1111111111111111);
    let suma;
    let verificar;
    for(let j = 15; j > 0; j--){
        if(j % 2 == 0){
            tarjeta[j] = tarjeta[j] * 2;
            suma += tarjeta[j];
        }
        else{
            suma += tarjeta[j];
        }
    }
    verificar = suma % 10;
    if(verificar == 0){
        tarjeta = tarjeta.slice(0,4) + "-" + tarjeta.slice(4,8) + "-" + tarjeta.slice(8,12) + "-" + tarjeta.slice(12,16);
    }
    else{
        tarjeta = "Numero generado invalido";
    }
    return tarjeta;
}
console.log(generarTarjetas());


/*
#9
Analizador de dataset en texto
Dado un string con números separados por espacios:
"10 20 30 40 50 60"
Convierte a array de números y calcula:
Promedio
Mediana
Desviación estándar (Math.sqrt y fórmulas estadísticas)*/
function analizarDataset(cadena){
    //convertimos la cadena en un array de numeros
    // con .split separamos la cadena por los espacios
    let arrayNum = cadena.split(" ");
    //convertimos los elementos en numeros
    arrayNum = arrayNum.map(Number);
    //calculamos el promedio
    let suma = 0;
    for(let i = 0; i < arrayNum.length; i++){
        suma += arrayNum[i];
    }
    let promedio = suma / arrayNum.length;
    //calculamos la mediana
    //con .sort ordenamos el array de menor a mayor
    //arrayNum.sort((a, b) => a - b);
    let mediana;
    //si el numero de elementos es par, la mediana es la media de los dos del centro
    //si es impar, es el del centro
    if(arrayNum.length % 2 == 0){
        mediana = (arrayNum[arrayNum.length / 2 - 1] + arrayNum[arrayNum.length / 2]) / 2;
    }
    else{
        mediana = arrayNum[Math.floor(arrayNum.length / 2)];
    }
    //calculamos la desviacion estandar
    let desviacion = 0;
    for(let j = 0; j < arrayNum.length; j++){
        desviacion += Math.pow(arrayNum[j] - promedio, 2);
    }
    desviacion /= arrayNum.length;
    let desviacionEstandar = Math.sqrt(desviacion);
    return "El promedio es: " + promedio.toFixed(2) + ", la mediana es: " + mediana + ", la desviacion estandar es: " + desviacionEstandar.toFixed(2);
}
console.log(analizarDataset("10 20 30 40 50 60"));


/*
#10
Juego de ahorcado simple
Implementa una versión básica del ahorcado con strings:
Palabra oculta como "javascript"
Muestra "j _ v _ s c r i p t"
Actualiza con cada intento de letra*/
function juegoAhorcado(palabra){
    //variable con la palabra que hay que adivinar
    let palabraOculta = "";
    //array para las letras usadas
    let letrasUsadas = [];
    //con un for inicializamos la palabra oculta con guiones
    //para saber el numero de letras
    for(let i = 0; i < palabra.length; i++){
        palabraOculta += "_ ";
    }
    //tiene 11
    let intentos = 11;
    while(intentos > 0 && palabraOculta.includes("_")){
        console.log("Palabra: " + palabraOculta);
        console.log("Letras usadas: " + letrasUsadas.join(", "));
        console.log("Te quedan " + intentos + " intentos.");
        let letra = prompt("Introduce una letra:").toLowerCase();
        if(letrasUsadas.includes(letra)){
            console.log("Ya has usado esa letra, prueba con otra.");
        }
        letrasUsadas.push(letra);

        if(palabra.includes(letra)){
            let nuevaPalabraOculta = "";
            for(let j = 0; j < palabra.length; j++){
                if(palabra[j] === letra){
                    nuevaPalabraOculta += letra + " ";
                } else {
                    nuevaPalabraOculta += palabraOculta[j * 2] + " ";
                }
            }
            palabraOculta = nuevaPalabraOculta;
        }
        else{
            intentos--;
            console.log("Letra incorrecta.");
        }
    }
    if(!palabraOculta.includes("_")){
        console.log("Has adivinado la palabra: " + palabra);
    }
    else{
        console.log("Has perdido. La palabra era: " + palabra);
    }
}
console.log(juegoAhorcado("javascript"));