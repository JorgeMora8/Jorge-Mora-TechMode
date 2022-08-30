import {React, useState, memo, useEffect, createContext, useContext} from 'react'
import Landing from './Landing/Landing'
import ItemList from './ItemContainer/ItemList'
import { useParams } from 'react-router-dom'
import { ContextoApp } from '../Context/CartContext'
import MensajeEspera from './mensajeEspera/MensajeEspera'
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from '../Firebase/config'



const ItemListContainer = memo(() => {
  

  //=>Hooks 
  const [productos, setProductos] = useState([])
  const {mensajeBienvenida} = useContext(ContextoApp)
  const [loading, setLoading] = useState(true)
  const productoCollection = collection(db, "Productos")
  const {categoriaId} = useParams();



  //=>Obtener productos por categoria o por ID

  useEffect(() => { 
    const queryCollection = collection(db, "Productos"); 
    const queryFiltrada= categoriaId ? 
    query(queryCollection, where("categoria", "==", `${categoriaId}`))
    :query(queryCollection)

  const obtenerProductos = async () => { 
    const data = await getDocs(queryFiltrada); 
    setProductos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setLoading(false)
  }
  obtenerProductos()
}, [categoriaId])


  return (
    <div>
        <p className='saludoUsuario'>{ mensajeBienvenida }</p>
        <Landing/>
        {loading ? 
       <MensajeEspera /> 
        : <ItemList productos={productos}/> }  
    </div>
  )
}) 

export default ItemListContainer


