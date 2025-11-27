import { useState } from "react";
import Item from "./Item";

function ListaElemento(){

    let datosInicialesPrueba = {"items":[
    {
        "nombre": "arroz",
        "cantida":3
    }
    {
        "nombre":"pam",
        "cantidad":2
    }
]}
    const [listaCompra, setlistaCompra] = useState(datosInicialesPrueba);
    const [contenidoInput, setcontenidoInput] = useState("");

    function pulsoBoton(){
        setlistaCompra([...listaCompra, contenidoInput]);
        console.log(listaCompra);
        setcontenidoInput("");
    }

    function borraElemento(id){
        console.log("ME AVISAN DE QUE DEBO BORRAR AL ELEMENTO" + id);
    }

    function actualizaElemento(nuevoTexto, id){
        listaCompra[id] = nuevoTexto;
        setlistaCompra([...listaCompra]);
    }

    //let maquetaListaCompra = listaCompra.map((elementoDeArray, indice) => <Item key={indice}
    //nombre={elementoDeArray} onDelete={() => borraElemento(indice)} onNuevoTexto={(texto) => actualizaElemento(texto, indice)}></Item>)
}