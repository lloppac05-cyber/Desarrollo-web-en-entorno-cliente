/*
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates (arr){
    let resultado = [];
    //elimina duplicados del array que le pasamos como parametro
    resultado = [...new Set(arr)];
    return resultado;
}
console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));