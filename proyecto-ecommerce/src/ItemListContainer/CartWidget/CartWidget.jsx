import {React, useContext} from 'react'
import { ContextoApp } from '../../Context/CartContext'
import logo from "../CartWidget/Carrito.svg"


const CartWidget = () => {

  //=>Hooks
  const {carList, totalItem} = useContext(ContextoApp)
  

  return (
    <div >
      {carList.length>=1 &&  <span className='cantidadItemCartWidget'>{totalItem}</span>} 
      <img src={logo} alt="carrito" className='imgLogo'/>
      </div>
  )
}

export default CartWidget