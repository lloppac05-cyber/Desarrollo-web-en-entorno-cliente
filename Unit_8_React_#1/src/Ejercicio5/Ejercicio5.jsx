import { useState } from "react";
import "./ejercicio5.css";

function Ejercicio5(){
    const animales = ["dog","cat","chicken","cow","sheep","horse"];

    return(
        <>
            <div>
                <h2>Lista de animales</h2>
                <ul>
                    {animales.map((animales, animal)=>(
                        <li key={animal}>{animales}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Ejercicio5