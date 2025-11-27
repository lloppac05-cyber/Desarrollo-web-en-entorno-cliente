/*
Sumar todos los valores de un array.

Método: reduce(). */
let arraySuma = [1,23,10,12,4];
let inicio = 0;
let suma = arraySuma.reduce((accumulator, currentValue) => accumulator + currentValue,
  inicio,);
console.log(suma);