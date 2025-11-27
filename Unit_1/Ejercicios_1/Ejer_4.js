/*
    Escribe un programa que:
        Declare una variable var x = 10 dentro de
        un bloque {} y muestrala fuera del bloque
        Declare una variable let y = 20 dentro de
        un bloque {} e intenta mostrarla fuera
        Explica la diferencia
*/
//se puede mostrar aunque este declarada entre {}
//al ser var sirve fuera del bloque
{
    var x = 10;
}
console.log(x);

//no se puede mostrar porque no esta declarada fuera de {}
//al ser let solo sirve dentro del bloque
{
    let y = 20;
}
console.log(y);