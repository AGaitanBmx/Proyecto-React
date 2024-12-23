import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactContainer from './components/ContactContainer/ContactContainer'
import ItemDetail from './components/ItemListContainer/ItemDetail'

function App() {

  const[valor, setValor] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavBar valor={valor}/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/products' element={<ItemListContainer/>}/>
        <Route exact path='/contact' element={<ContactContainer/>}/>
        <Route exact path='/product/:id' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
