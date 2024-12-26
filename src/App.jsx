import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  const [valor, setValor] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div>
        <NavBar valor={valor} />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/categoria/:category' element={<ItemListContainer />} />
          <Route exact path='/producto/:id' element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;