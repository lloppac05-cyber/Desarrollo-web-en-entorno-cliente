/*Ejercicio 1: Edad y permiso
Objetivo: Practicar && (AND).
Enunciado: Pide al usuario su edad y si tiene permiso de sus padres (sí/no). 
Solo puede entrar si es mayor de 18 y tiene permiso.*/
let edad1 = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
//permiso = toLowerCase(permiso);
// Usa un condicional con && para determinar si puede entrar
if(edad1 => 18 && permiso === "si")
{
    console.log("Puedes entrar, cumples los requisitos");
}
else
    console.log("No cumples los requisitos");


/*Ejercicio 2: Aprobado en materias
Objetivo: Practicar || (OR).
Enunciado: Pide si el alumno aprobó matemáticas, física y química (sí/no). 
Si aprobó al menos una materia, puede pasar al siguiente nivel.*/
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel
if(matematicas === "si" || fisica === "si" || quimica === "si")
    console.log("Puedes pasar al siguiente nivel");
else
    console.log("No puedes pasar al siguiente nivel");


/*Ejercicio 3: Contraseña correcta
Objetivo: Practicar ! (NOT).
Enunciado: Pide al usuario una contraseña. Si no es correcta, muestra “Contraseña incorrecta”.*/
let contrasena = Number(prompt("Ingrese la contraseña"));
// Usa ! para comprobar si no es correcta
if(!(contrasena == 1234))
    console.log("No es correcta");
else
    console.log("Es correcta");


/*Ejercicio 4: Número dentro de rango
Objetivo: Combinar operadores lógicos.
Enunciado: Pide un número y verifica si está entre 10 y 50 inclusive.*/
let num4 = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if(num4 => 10 && num4 <= 50)
    console.log("Si está dentro del rango");
else
    console.log("No está dentro del rango");


/*Ejercicio 5: Mayoría de edad o tutor presente
Objetivo: Practicar combinación de AND y OR.
Enunciado: Pide la edad del usuario y si tiene tutor. 
Puede entrar si es mayor de 18 o si tiene tutor presente.*/
let edad2 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda
if(edad2 > 18 || tutor === "si")
    console.log("Puedes entrar");
else
    console.log("No puedes entrar");


/*Ejercicio 6: Verificación de acceso
Objetivo: Practicar condiciones múltiples con operadores lógicos.
Enunciado: Pide usuario y contraseña. El acceso es válido si:
Usuario es “admin” y contraseña es “1234”
O usuario es “invitado” y no necesita contraseña*/
let usuario1 = prompt("Ingrese su usuario");
let contraseña1 = prompt("Ingrese su contraseña");
// Condicional usando && y ||
if(contraseña1 == 1234 && usuario1 === "admin" || usuario1 === "invitado")
    console.log("Acceso valido");
else
    console.log("Acceso no valido");


/*Ejercicio 7: Números positivos y menores que 100
Objetivo: Practicar operadores combinados.
Enunciado: Pide un número e indica si es positivo y menor que 100.*/
let numero = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones
if(numero > 0 && numero < 100)
    console.log("Es positivo y menor de 100");
else
    console.log("No es positivo");


/*Ejercicio 8: Día laborable
Objetivo: Practicar || con cadenas.
Enunciado: Pide un día de la semana y verifica si es un día laborable (lunes a viernes).*/
let dia = prompt("Ingrese un día de la semana");
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
//dia = toLowerCase(dia);
if(dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes")
    console.log("Dia laborable");
else
    console.log("Fin de semana");


/*Ejercicio 9: Votación válida
Objetivo: Practicar combinación de operadores.
Enunciado: Pide la edad del votante y su nacionalidad. 
Puede votar si tiene 18 años o más y es ciudadano del país.*/
let edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");
// Usa && y >= para verificar la condición
//nacionalidad = toLowerCase(nacionalidad);
if(edad => 18 && nacionalidad === "español" || nacionalidad === "española")
    console.log("Puede votar");
else
    console.log("No puede votar");


/*Ejercicio 10: Control de acceso con bucle
Objetivo: Practicar operadores lógicos dentro de un bucle.
Enunciado: Pide usuario y contraseña hasta que el acceso sea válido 
(usuario “admin” y contraseña “1234”). Muestra mensaje de error mientras no sea correcto.*/
let usuario, contraseña;
while (!(usuario === "admin" && contraseña === "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    alert("Usuario o contraseña incorrectos");
}
console.log("¡Acceso permitido!");
