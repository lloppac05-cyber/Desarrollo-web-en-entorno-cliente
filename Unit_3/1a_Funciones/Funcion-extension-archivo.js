/*
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension(file){
    let extension = "";
    for(let i = 0; i < file.length; i++){
        if(file.charAt(i) == "."){
            extension = file.substring(i+1, file.length);
        }
    }
    return extension;
}
console.log(getFileExtension("imagen.jpg"));