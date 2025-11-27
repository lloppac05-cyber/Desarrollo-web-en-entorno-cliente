import { useState } from "react";
import './ejercicio2.css'
//boton que al pulsarlo salta una alerta
function Ejercicio2(){
    function alerta(){
        alert("Haz clickado");
    }

    let boton = <button id="ejercicio2" onClick = {alerta}>Click me</button>
    return boton;
}
export default Ejercicio2