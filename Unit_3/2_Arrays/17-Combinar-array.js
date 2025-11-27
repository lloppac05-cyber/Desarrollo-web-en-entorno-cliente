/*
Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.

Método: map(). */
const arrayNom = ["Julia", "Mario", "Maria"];
const arrayEdad = [20,52,35];
const arrayObj = arrayNom.map((nombre, i) => ({
  nombre: nombre,
  edad: arrayEdad[i]
}));
console.log(arrayObj);