import {useState} from "react";
import BotonLaura from "./BotonLaura";

function Cabecera(){
    const [Titulo, setTitulo] = useState("Lista de la compra");
    return(
        <>
            <h1>{Titulo}</h1>
            <input type="text" />
            <button>Añadir</button>
        </>
    );
}
export default Cabecera