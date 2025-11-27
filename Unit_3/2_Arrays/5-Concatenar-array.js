/*
Concatenar arrays y mostrar el resultado.

Métodos: concat(), spread operator .... */
let array1 = ["Hoy", "es"];
let array2 = ["un","dia","precioso"];
//concat()
array1 = array1.concat(array2);
console.log(array1);
//spread operator
let result = [...array1,...array2];
console.log(result);