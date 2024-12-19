import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductsProvider>
        <CartProvider>
            <App />
        </CartProvider>
        </ProductsProvider>
    </StrictMode>
)
