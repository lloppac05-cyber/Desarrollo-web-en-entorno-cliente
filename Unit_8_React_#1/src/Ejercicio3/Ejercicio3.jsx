import { useState } from "react";
import "./ejercicio3.css";

function Ejercicio3() {

    // Esta función recibe el número del botón y lo muestra
    function alerta(numero) {
        alert("Has pulsado el botón " + numero);
    }

    return (
        <div id="ejercicio3">
            <button onClick={() => alerta(1)}>Boton 1</button>
            <button onClick={() => alerta(2)}>Boton 2</button>
            <button onClick={() => alerta(3)}>Boton 3</button>
        </div>
    );
}

export default Ejercicio3; 