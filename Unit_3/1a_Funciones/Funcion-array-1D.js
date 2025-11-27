/*
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */
function flatArray(arr){
    let arraySalida = [];
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            arraySalida.push(arr[i][j]);
        }
    }
    return arraySalida;
}
console.log(flatArray([[1,5,4], [3,10], [2,5]]));