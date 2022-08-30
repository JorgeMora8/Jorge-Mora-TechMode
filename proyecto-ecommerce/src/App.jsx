import { useState, createContext } from 'react'
import './App.css'
import Navbar from './ItemListContainer/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './ItemListContainer/Cart/Cart';
import { ContextoAppProvider } from './Context/CartContext';
import RegistroContainer from './ItemListContainer/registro/RegistroContainer';


const ContextoGlobal = createContext("Contexto Global")


function App() {
  const [count, setCount] = useState(0)


  
  return (
    <ContextoAppProvider>
    <BrowserRouter>
     <div className="App">
     <Navbar />  
   <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/registros" element={< RegistroContainer/>}/>
      <Route path='*' element={<Navigate to={"/"} />} />
   </Routes>

    </div>
    </BrowserRouter>
    </ContextoAppProvider>
  )
}

export default App
