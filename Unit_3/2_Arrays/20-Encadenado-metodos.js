/*
Usar encadenado de métodos: Dado un array de números, 
debes calcular la suma de los cuadrados de los números pares.

Métodos: map(), filter(), reduce() en cadena */
let arrayNum = [1,2,3,4];
let sum = 0;
let cuadrado = 0;
arrayNum.forEach(numero => {
    if(numero%2 == 0){
        sum += Math.pow(numero,2);
    }
});
console.log(sum);