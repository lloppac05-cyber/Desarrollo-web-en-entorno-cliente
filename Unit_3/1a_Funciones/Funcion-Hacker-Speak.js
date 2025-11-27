/*
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las
 *  "a" en 4, las "e" en 3, las "i" en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */
function toHackerSpeak(text){
    let salida = "";
    for(let i = 0; i < text.length; i++){
        if(text.charAt(i) == "a"){
            salida += "4";
        }
        else{
            if(text.charAt(i) == "e"){
                salida += "3";
            }
            else{
                if(text.charAt(i) == "i"){
                    salida += "1";
                }
                else{
                    if(text.charAt(i) == "o"){
                        salida += "0";
                    }
                    else{
                        if(text.charAt(i) == "s"){
                            salida += "5";
                        }
                        else{
                            salida += text.charAt(i);
                        }
                    }
                }
            }
        }
    }
    return salida;
}
console.log(toHackerSpeak("I'm a hacker now"));
