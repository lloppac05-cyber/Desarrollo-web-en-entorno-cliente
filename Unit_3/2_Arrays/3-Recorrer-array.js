/*Recorrer un array e imprimir sus elementos.

Métodos: for, for...of, forEach(). */
let arrayRecorrer = ["Hoy", "Mañana","Ayer"];
for(let i = 0; i < arrayRecorrer.length; i++){
    console.log(arrayRecorrer[i]);
}
for (const dia of arrayRecorrer) {
    console.log(dia);
}
arrayRecorrer.forEach(dia => {
    console.log(dia);
});