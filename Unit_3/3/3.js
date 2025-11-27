/*
Treasure hunt

                  +-------------------------+
                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
                  +----+----+----+----+-----¦
                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
                  +----+----+----+----+-----¦
                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
                  +----+----+----+----+-----¦
                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
                  +----+----+----+----+-----¦
                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
                  +-------------------------+
Do you like treasure hunts? In this problem you are to write a program to explore 
the above array for a treasure. The values in the array are clues. Each cell contains
an integer between 11 and 55; for each value the ten's digit represents the row 
number and the unit's digit represents the column number of the cell containing the 
next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search 
of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is 
the same as its coordinates. Your program must first read in the treasure map data into a 
5 by 5 array. Your program should output the cells it visits during its search, and a message 
indicating where you found the treasure. */
let matrix = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];
let tabla = "";
let solucion = "";
// 1. Mostrar la línea de encabezado superior
    console.log(`+-----+-----+-----+-----+\n`);

// 2. Recorrer la matriz para generar cada fila
for (let i = 0; i < matrix.length; i++) {
    // Recorrer las columnas
    for (let j = 0; j < matrix[i].length; j++) {
        //mostrar en la consola
        tabla += "¦ " + matrix[i][j].toString() + " " ; 
    }
    console.log(tabla + "¦ ");
    tabla = "";
}
// 3. Mostrar la línea divisoria
console.log(`+-----+-----+-----+-----+\n`);

//solucion
let arrayColumnaFila = [];
let encontrado = false;
let columna = 1;
let fila = 1;
//mientras que no se haya encontrado la solucion
while (encontrado == false) {
  arrayColumnaFila.push(fila,columna);
  //empezamos en la posicion 0,0 de la matriz que seria la 1,1
  const valor = matrix[fila - 1][columna - 1]; 
  const filaSiguiente = Math.floor(valor / 10);
  const columnaSiguiente = valor % 10;

  if (valor == fila * 10 + columna) {
    console.log("Has ganado, solucion:" + fila + columna);
    encontrado = true;
  }
  else{
    // Eliminar bucle infinito
    if (arrayColumnaFila.includes(filaSiguiente , columnaSiguiente)) {
        console.log("Buscando...");
    }
  }
  fila = filaSiguiente;
  columna = columnaSiguiente;
}

console.log("Fila y columna: ", arrayColumnaFila);

