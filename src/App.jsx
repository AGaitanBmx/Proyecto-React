import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  const [valor, setValor] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar valor={valor} />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/categoria/:category' element={<ItemListContainer />} />
          <Route exact path='/producto/:id' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;