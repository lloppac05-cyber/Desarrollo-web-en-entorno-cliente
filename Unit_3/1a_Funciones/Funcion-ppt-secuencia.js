/*
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, 
 * con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */
function getRockPaperScissorRandomSequence(length){
    let juego = ["rock", "paper", "scissor"];
    let secuencia = [];
    for(let i = 0; i < length; i++){
        secuencia[i] = juego[Math.floor(Math.random() * juego.length)];
    }
    return secuencia;
}
console.log(getRockPaperScissorRandomSequence(4));