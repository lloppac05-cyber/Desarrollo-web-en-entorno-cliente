/*
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
*/
function inRange(x, min, max){
    dentro = false;
    if(x >= min && x <= max){
        dentro = true;
    }
    return dentro;
}
console.log(inRange(2, -4, 10));
console.log(inRange(12, -4, 10));