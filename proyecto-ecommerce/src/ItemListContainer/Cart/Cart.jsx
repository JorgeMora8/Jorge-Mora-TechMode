import {React, useContext}from 'react'
import { ContextoApp } from '../../Context/CartContext'
import CartItem from './CartItem';
import Formulario from './Formulario';
import {Link} from "react-router-dom"


const Cart = () => {
  
  const {carList, VaciarCarrito, totalPrice} = useContext(ContextoApp); 

  return (
<>
    <div className='CarritoInfoContainer'> 
      {carList.length===0 &&<div>
      <b className="mensajeNOarticulos">No hay articulos agregados.</b>
       <Link to="/"> <button className='btnSeguiComprando'>Ir a comprar</button></Link>
       </div>}
      {carList.length>=1 && 
      <> 
      <button className='btnVaciarCarrito m-2' onClick={VaciarCarrito}>Vaciar Carrito</button>
      <Link to="/"> <button className='btnIrComprar'>Ir a comprar</button></Link>
      <p className="precioTotal">Precio a pagar: <span className='total'>{totalPrice}$</span></p>
      </>
      }
    {carList.map((prod, idx) => <CartItem key={idx} nombre={prod.nombre} 
    caract1={prod.caract1} caract2={prod.caract2} caract3={prod.caract3}
    precio={prod.precio} imgDetalle={prod.imgDetalle} unidades={prod.cantidad} id={prod.id}
   />)} 
   </div>
   {carList.length>=1 && <Formulario />}
</>

  )}

export default Cart