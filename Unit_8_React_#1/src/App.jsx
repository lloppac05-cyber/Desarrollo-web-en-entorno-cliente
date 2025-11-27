import { useState } from 'react'
import './App.css'
import Ejercicio1 from './Ejercicio1/Ejercicio1'
import Ejercicio2 from './Ejercicio2/Ejercicio2'
import Ejercicio3 from './Ejercicio3/Ejercicio3'
import Ejercicio3Comp from './Ejercicio3/Ejercicio3Comp'
import Ejercicio4 from './Ejercicio4/Ejercicio4'
import Ejercicio5 from './Ejercicio5/Ejercicio5'
function App() {
  return (
    <>
      <div>
        <Ejercicio1></Ejercicio1>
        <Ejercicio2></Ejercicio2>
        <br /><br />
        <Ejercicio3></Ejercicio3>
        <br /><br />
        <Ejercicio3Comp></Ejercicio3Comp>
        <br /><br />
        <Ejercicio4></Ejercicio4>
        <br /><br />
        <Ejercicio5></Ejercicio5>
        <br /><br />
      </div>
    </>
  );
}
export default App