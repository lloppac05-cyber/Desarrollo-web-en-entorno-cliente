import { useState } from "react";
import "./ejercicio4.css";
//boton que vaya sumando y lo muestre por pantalla
function Ejercicio4(){
    const [contador, setContador] = useState(0);
    return (
        <>
            <p>Has pulsado el boton {contador} veces</p>
            <button id="ejercicio4" onClick={() => setContador(contador + 1)}>Pulsame</button>
        </>
    );
}
export default Ejercicio4