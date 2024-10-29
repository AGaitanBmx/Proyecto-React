import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'

function App() {

  const[valor, setValor] = useState(0)

  return (
    <>
      <NavBar valor={valor}/>
      <ItemListContainer mensaje="Articulos en el carrito" fn={setValor}/>
    </>
  )
}

export default App
