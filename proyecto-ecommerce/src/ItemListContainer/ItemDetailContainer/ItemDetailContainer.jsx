import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import MensajeEspera from '../mensajeEspera/MensajeEspera'
import { db } from '../../Firebase/config'
import { doc, getDoc, query } from 'firebase/firestore'
import { async } from '@firebase/util'
    
    const ItemDetailContainer = () => {

      const {detalleId} = useParams()
      const [producto, setProducto] = useState([])
      const [cargando, setCargando] = useState(true)

useEffect(() => { 
  const productoFiltrado= doc(db, "Productos", `${detalleId}`)
  const obtenerProducto = async() => { 
    const resp = await getDoc(productoFiltrado); 
    setProducto({id:resp.id, ...resp.data()})
    setCargando(false)
  }
  obtenerProducto()
},[])

    return (
        <>
        {cargando ? <MensajeEspera /> : <ItemDetail producto={producto}/>}
        </>
      )
    }
    
export default ItemDetailContainer

