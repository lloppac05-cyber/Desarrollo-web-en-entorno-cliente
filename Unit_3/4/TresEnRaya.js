class TresEnRaya{
    tablero;
    jugador1;
    jugador2;
    turnoJugador;
    hasGanado = "Empate";

    //constructor de la clase
    constructor(jugador1, jugador2){
        //llamamos al metodo reanudar partida ya que actua de constructor
        this.reanudarPartida(jugador1,jugador2);
    }

    //metodo para reanudar partida donde le pasamos como parametro el nombre de los jugadores
    reanudarPartida(jugador1, jugador2){
        //inicializamo el tablero como un array de 3 posiciones
        this.tablero = new Array[3];
        //recorremos el array
        for(let i = 0; i < this.tablero.length; i++){
            //y cada posicion le asignamos el valor de un array de 3 posiciones
            //array de array 3x3
            this.tablero[i] = new Array[3];
        }
        //con un for anidado dentro de otro for recorremos la matriz que tenemos
        //y cada posicion la inicializamos a nada
        for(let i = 0; i < 3;i++){
            this.tablero[i] = [];
            for(let j = 0; j < 3;j++){
                //inicializar como vacio
                this.tablero[i][j] = "";
            }
        }
        //el turno del jugador tiene el valor 0
        this.turnoJugador = 0;
        //nuevo nombre de jugador 1
        this.jugador1 = jugador1;
        //nuevo nombre de jugador 2
        this.jugador2 = jugador2;
    }

    //metodo para mostrar el tablero
    mostrarMatriz(tablero){
        //recorremos las filas, 3
        for (let i = 0; i < 3; i++) {
            //separamos cada elemento de la fila por una linea
            console.log(tablero[i].join("  |  "));
            //despues de cada fila la separamos de la siguiente con rayas
            if (i < 3 - 1) {
                console.log("-------------");
            }
        }
    }

    //metodo para realizar movimiento
    mover(fila, columna) {
        // Comprobar que la posición está vacía
        if (this.tablero[fila][columna] == " ") {
            // Determinar símbolo del jugador
            let simbolo;
            if(this.turnoJugador == 0){
                simbolo = "X";
            }
            else{
                simbolo = "O";
            }
            //añadimos el simbolo a la posicion de la fila y a la columna que pasamos como parametro            
            this.tablero[fila][columna] = simbolo;

            // Mostrar tablero actualizado
            this.mostrarTablero();

            // Comprobar si hay ganador
            if (this.ganadorJuego(simbolo)) {
                if(this.turnoJugador == 0){
                    this.hasGanado = "Has ganado jugador 1";
                }
                else{
                    this.hasGanado = "Has ganado jugador 2";
                }
            }

            // Cambiar turno
            this.cambiarTurno();
        } else {
            console.log("Posicion ocupada");
        }
    }

    //metodo para cambiar el turno
    cambiarTurno() {
        let turno = "";
        if(this.turnoJugador == 0){
            this.turnoJugador = 1
            turno = "Turno de: " + this.jugador1;
        }
        else{
            turno = "Turno de: "+ this.jugador2;
        }
        return turno;
    }

    //funcion para comprobar el ganador
    ganadorJuego(simbolo){

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
        //el metodo .some, recorre el array y combrueba si hay alguna combinacion en las 3 posiciones
        //con el mismo simbolo
        return combinaciones.some(combinacion =>
            //coge el primer simbolo de la primera casilla de la fila y combrueba si los 3 de esa fila son iguales
            //para la fila 0,1,2
            //este metodo devuelve true o false
            this.tablero[combinacion[0][0]][combinacion[0][1]] == simbolo &&
            this.tablero[combinacion[1][0]][combinacion[1][1]] == simbolo &&
            this.tablero[combinacion[2][0]][combinacion[2][1]] == simbolo
        );
    }
    //metodo por si no ha ganado ninguno
    empate() {
        //convertimos la matriz en un array plano
        //comprobamos que no haya ninguna celda vacia
        if(this.tablero.flat().every(celda => celda !== "")){
            this.hasGanado = this.hasGanado;
        }
        return this.hasGanado;
    }

    //metodo para jugar
    jugar(fila, columna) {
        if (this.tableroLleno()) {
            this.empate();
        }
        else{
            this.realizarMovimiento(fila, columna);
        } 
    }
}
//nuevo objeto juego con dos jugadores
let juego = new TresEnRaya("Ana", "Luis");
//mostrar el tablero
juego.mostrarTablero();

// Simulacion
juego.jugar(0, 0); // Ana (X)
juego.jugar(1, 1); // Luis (O)
juego.jugar(0, 1);
juego.jugar(2, 2);
juego.jugar(0, 2); // Ana gana