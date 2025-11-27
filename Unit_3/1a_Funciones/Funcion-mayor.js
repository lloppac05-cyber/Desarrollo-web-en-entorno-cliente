/*
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
function getBiggestNumber(number){
    numbers = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] < number [i+1]){
            numbers = number[i+1];
        }
    }
    return "El numero mas grande del array es " + numbers;
}
console.log(getBiggestNumber([3,8,2,1,10]));