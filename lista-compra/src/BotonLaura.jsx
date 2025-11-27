import { useState } from "react";

//boton que solo se puede pulsar un limite que le pasamos como parametro
function BotonLaura({limite}){
    let resultado;
    let [contador, setContador] = useState(0);
    function incrementaContador(){
        setContador(contador + 1);
        console.log(contador);
    }
    if(contador >= 3){
        resultado = <button disabled>No puedes pulsar</button>
    }
    else{
        resultado = <button onClick={incrementaContador}>Pulsame</button>
    }

    return resultado;
}
export default BotonLaura