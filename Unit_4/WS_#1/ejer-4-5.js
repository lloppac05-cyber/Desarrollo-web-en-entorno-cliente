/*Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar
con nuestro raton en dos colores diferentes. Para ellos primero
simularemos que disponemos de un canvas gráfico: realmente se
tratara de una tabla con celdas de pequeño tamaño (100x100). 
Tu programa creara ese canvas una vez cargada la pagina (onLoad)
Lo siguiente sera detectar el movimiento del raton sobre las celdas
para pintarlas de un color, el cual sera rojo si se mantiene pulsada
simultaneamente la tecla Ctrl y azul si se pulsa Shift.
En otro caso no debera pintarse nada*/
window.onload = ()=> {pintarTabla(100,100);botonBorrar()};
//crear tabla y pintar
function pintarTabla(fil,col) {
    // Obtenemos el div donde pondremos la tabla
    let divTabla = document.getElementById("table");
    // Creamos la tabla
    let tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    // Bucle para filas
    for (let i = 0; i < fil; i++) {
        let fila = document.createElement("tr");
        fila.style.width = "10px";
        fila.style.height = "10px";
        fila.style.border = "0px";
        // Bucle para columnas
        for (let j = 0; j < col; j++) {
            let columna = document.createElement("td");
            columna.style.width = "10px";
            columna.style.height = "10px";
            columna.style.border = "0px";
            //evento para pintar al pasar el raton por encima de la tabla
            columna.addEventListener("mousemove", (e) => {
                if (e.ctrlKey) {
                    columna.style.backgroundColor = "red";
                } else {
                    if (e.shiftKey) {
                        columna.style.backgroundColor = "blue";
                    }  
                    // Pintar de blanco al hacer clic derecho del raton
                    //"BORRAR"
                    else{
                        if(e.altKey){
                            columna.style.backgroundColor = "white";
                        }
                    } 
                }
            });

            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    
    // Insertamos la tabla en el div
    divTabla.appendChild(tabla);
}
/*Añade las siguientes funcionalidaddes
al ejercicio anterior:
- Borrado de lineas con el raton (mediante
la pulsacion del boton que tu decidas) 
- Borrar por completo el canvas con un boton*/
// Crear botón para borrar todo el canvas
function botonBorrar() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", () => {
        let columna = document.querySelectorAll("#table td");
        columna.forEach(columna => columna.style.backgroundColor = "white");
    });
}