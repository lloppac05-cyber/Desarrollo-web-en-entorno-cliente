/**
Duplicar los valores de un array numérico.

Método: map().
 */
let arrayDuplicar = [2,8,5,3];
console.log(arrayDuplicar.map(function(x){
    return x*2;
}));
//funcion y no lo guarda, solo lo devueelve
//arrayDuplicar.map((a)=>a*2)