/*
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
function getRockPaperScissor (){
    let juego = ["rock", "paper", "scissor"];
    return (juego[Math.floor(Math.random() * juego.length)]);
}
console.log(getRockPaperScissor());