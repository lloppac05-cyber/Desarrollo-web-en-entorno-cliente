import { useState } from "react";
import "./ejercicio6.css";
function Ejercicio6() {
    const animales = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

    return (
        <div>
            <h2>Ejercicio 6: Componentes Customizados y Reutilización</h2>
            
            <h3>Lista de Animales</h3>
            <AnimalList animalsList={animales}/>
        </div>
    );
}

export default Ejercicio6