/*
Encontrar el número mayor y menor en un array.

Métodos: Math.max(), Math.min(), spread operator .... */
let arrayMenorMayor = [1,2,5,9,0];
//max, min
console.log("MAXIMO: " + Math.max(...arrayMenorMayor));
console.log("MINIMO: " + Math.min(...arrayMenorMayor));
//spread operator
let mayor = arrayMenorMayor[0];
let menor = arrayMenorMayor[0];
for(const elemento of arrayMenorMayor){
    if(elemento > arrayMenorMayor){
        mayor = elemento;
    }
    else{
        if(elemento < arrayMenorMayor){
            menor = elemento;
        }
    }
}
console.log(mayor);
console.log(menor);