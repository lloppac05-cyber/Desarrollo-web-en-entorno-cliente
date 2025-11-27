import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function Item({nombre, onDelete, onNuevoTexto}){
    const [modoEdicion, setmodoEdicion] = useState (false);
    const [nombreEditado, setnombreEditado] = useState (nombre);
    let jsxResultado;

    function entraEnEdicion(){
        setmodoEdicion(true);
    }

    function avisaGuardarCambios(){
        setmodoEdicion(false);
        onNuevoTexto(nombreEditado);
    }

    function cancelarEdicion(){
        setmodoEdicion(false);
        setnombreEditado(nombre);
    }

    if(!modoEdicion){
        jsxResultado = <li >{nombre} 
            <button onClick={entraEnEdicion}>Editar</button>
            <button onClick={onDelete}>Borrar</button>
        </li>
    }
    else{
        jsxResultado = <li>
            <input value={nombreEditado} onChange={e => setnombreEditado(e.target.value)}/>
            <button onClick={avisarGuardarCambios}>Guardar Cambios</button>
            <button onClick={cancelarEdicion}>Cancelar</button>

        </li>
    }
    return jsxResultado;
}
export default Item