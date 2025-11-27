//matriz de 3x3
let tablero = [];
const fila = 3;
const columna = 3;

// Llenamos la matriz con celdas aleatorias entre 1 y 0
function crearMatriz(){
    for (let i = 0; i < fila; i++) {
        // Crear cada fila
        tablero[i] = [];
        for (let j = 0; j < columna; j++) {
            //inicializar como vacio
            tablero[i][j] = Math.round(Math.random(0,1));
            if(tablero[i][j] == 1){
                tablero[i][j] = "X";
            }
            else{
                tablero[i][j] = "O";
            }
        }
    }
    mostrarMatriz(tablero);
    console.log(ganadorJuego(tablero));
}

// Mostrar la matriz en consola
function mostrarMatriz(tablero){
    //recorremos las filas, 3
    for (let i = 0; i < fila; i++) {
        //separamos cada elemento de la fila por una linea
        console.log(tablero[i].join("  |  "));
        //despues de cada fila la separamos de la siguiente con rayas
        if (i < fila - 1) console.log("-------------");
    }
}

//funcion para comprobar el ganador
function ganadorJuego(tablero){
    //salida
    let salida = "Empate";
    // Combinaciones ganadoras
    const combinaciones = [
        // Filas
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        // Columnas
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        // Diagonales
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ];
//recorremos las posiciones que pueden ganar
    combinaciones.forEach(posicion => {
        //inicializamos a las 3 posiciones de combinacion
        let posicion1 = posicion[0];
        let posicion2 = posicion[1];
        let posicion3 = posicion[2];
        //Cogemos el simbolo de la primera posicion
        let simbolo = tablero[posicion1[0]][posicion1[1]];
        //si no esta vacia y son iguales que el simbolo de la posicion 1
        if(simbolo !== " " &&
            simbolo === tablero[posicion2[0]][posicion2[1]] && simbolo === tablero[posicion3[0]][posicion3[1]]){
                salida = "Ha ganado, " + simbolo;
            }
    });
    return salida;
}
console.log(crearMatriz());
