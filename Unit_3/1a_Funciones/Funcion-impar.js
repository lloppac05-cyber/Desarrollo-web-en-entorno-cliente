/*
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */
function isOdd(x){
    impar = false;
    if(x % 2 != 0){
        impar = true;
    }
    return impar;
}
console.log(isOdd(2));
console.log(isOdd(3));