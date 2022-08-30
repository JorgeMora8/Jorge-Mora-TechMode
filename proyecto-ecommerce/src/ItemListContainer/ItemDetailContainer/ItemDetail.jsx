import {React, useEffect, useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import IrCarritoBtn from '../Cart/IrCarritoBtn'
import ItemCount from "../ItemCount/ItemCount"
import { ContextoApp } from '../../Context/CartContext'

const ItemDetail = ({producto}) => {

const [toCart, setToCart] = useState(true);
 const {agregarCarrito, carList} = useContext(ContextoApp)

const onAdd = (cant) => {

  let yaExiste = carList.find(prod => prod.id === producto.id); 
  if(yaExiste){ 
    yaExiste.cantidad = yaExiste.cantidad + cant

  }else{ 
    agregarCarrito({...producto, cantidad:cant})

  }

  Swal.fire({
    icon: 'success',
    title: 'Agregados!!',
    text: `Haz añadido ${cant} unidades a tu carrito`,
  })
  
  setToCart(false)
}

  return (
    <div className="productoDetailContainer">
      { <div className="productoDetail">
        <div className="productoImagen">
          <img src={producto.imgDetalle}/>
        </div>
        <div className="productoInfo">
          <p className="productoDetalle">Nuevo / {producto.stock} Unidades</p>
          <h2 className='productoInfoTitulo'>{producto.nombre}</h2>
          <ul className='listaCaracteristica'>
            <li>{producto.caract1}</li>
            <li>{producto.caract2}</li>
            <li>{producto.caract3}</li>
            <p className="productoInfoEnvio">
            <i className="fa-solid fa-truck-fast iconoEnvio"></i>Dependiendo de su localidad el tiempo de envio puede variar. <b>Envio Gratis</b>
            </p>
            <b className="precioProducto">{producto.precio}$</b>
          </ul>
          {toCart ?  
          <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/> 
          : 
         <IrCarritoBtn />
          }
        </div>
      </div> }
    </div>
  )
}

export default ItemDetail