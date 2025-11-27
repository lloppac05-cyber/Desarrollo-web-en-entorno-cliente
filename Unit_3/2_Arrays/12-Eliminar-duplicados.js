/*
Eliminar duplicados de un array.
Métodos: filter(), indexOf(), o Set. */
let arrayDuplicado=["gato","perro","gato","cobaya"];
//filter y indexOf
console.log(arrayDuplicado.filter((elemento, indice) => {
    return arrayDuplicado.indexOf(elemento) == indice
}));
//Set
console.log([...new Set(arrayDuplicado)]);