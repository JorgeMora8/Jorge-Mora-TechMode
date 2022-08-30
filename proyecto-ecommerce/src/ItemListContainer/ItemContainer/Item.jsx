import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import {memo} from "react"

//``

const Item = memo( ({nombre, caract1, caract2, caract3, precio, img, id, imgDetalle, stock}) => { 
    return(
      <>
         <div className='opcionesUno opcion'>
          <img src={img} alt="" className='imgOpciones'/>
            <b className='nombreProducto'>{nombre}</b>
            <p className="especificacionProducto">{caract1}</p>
            <p className="especificacionProducto">{caract2}</p>
            <p className="especificacionProducto">{caract3}</p>
            <p className="unidadesStock">Unicamente <b>{stock}</b> unidades</p>
            <p className="precioProducto">{precio}$</p>
            <Link to={`/detalle/${id}`}>
            <button className="verProductoBtn" id={`${id}`}>Ver Producto</button>
            </Link>
         </div>
    </>
    )
    
    })

    export default Item