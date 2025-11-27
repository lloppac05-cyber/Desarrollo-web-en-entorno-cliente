import { useState } from "react";

function Boton({nombre}) {
    // Esta función recibe el número del botón y lo muestra
    const alerta = () => {
        alert(`Has pulsado el  ${nombre}`);
    }

    return (
        <div id="ejercicio3">
            <button onClick={alerta}>{nombre}</button>
        </div>
    );
}

export default Boton; 