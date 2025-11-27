import { useState } from 'react'
import './App.css'
import ListaCompra from './ListaCompra'
import Cabecera  from './Cabecera'  
import Pie from './Pie'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecera></Cabecera>
        <ListaCompra></ListaCompra>
        <Pie></Pie>
      </div>
    </>
  );
}

export default App
