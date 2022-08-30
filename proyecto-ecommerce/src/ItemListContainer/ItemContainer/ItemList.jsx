import Item from "./Item"
import { Link, useParams} from "react-router-dom"
import { memo, useContext, useState, useEffect } from "react"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import { db } from "../../Firebase/config"




const ItemList = memo(({productos} ) => { 

  return(
    <>
    <div className='opcionesContainer'>
    {productos.map((producto) => { 
      return <Item key={producto.key} nombre={producto.nombre} caract1={producto.caract1} caract2={producto.caract2} caract3={producto.caract3}
      img={producto.img} precio={producto.precio} stock={producto.stock} id={producto.id} 
      />
    })}
     </div>    
    </>
  )
})

export default ItemList

