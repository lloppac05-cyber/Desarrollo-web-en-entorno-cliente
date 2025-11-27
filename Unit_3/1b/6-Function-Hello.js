/*
6. Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old. */
let nombre = "Laura";
let edad = 20;
const salida = (nombre,edad) => {return "Hello, I am " + nombre + ", and I am ${edad} years old."};
console.log(salida);