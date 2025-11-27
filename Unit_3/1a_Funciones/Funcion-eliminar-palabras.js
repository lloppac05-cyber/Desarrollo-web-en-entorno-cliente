/*
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string 
 * sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
function removeWords(str, words){
    let arrayPalabras = str.split(" ");
    for(let i = 0; i < arrayPalabras.length; i++){
        for(let j = 0; j < words.length; j++){
            if(arrayPalabras[i] == words[j]){
                arrayPalabras.splice(i,1);
            }
        }
    }
    return arrayPalabras.join(" ");
}
console.log(removeWords("This is a really bad test", ["really", "bad"]));