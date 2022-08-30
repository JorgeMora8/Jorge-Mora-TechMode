//Hook
import { useState } from 'react'
import {Link} from "react-router-dom"

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
  const [count, setCount] = useState(initial)

  const handleAdd = () => { 
    if(count < stock){
      setCount(count + 1)
    }
   
  }
  
  const handleRemove = () => { 
    if(count > 1){ 
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => { 
    onAdd(count)
  }
  return (
    <div className='contadorContainer'>
      <button className='btnItem btnMas' onClick={handleAdd}> + </button>
      <label className='contadorResultado'>{count}</label>
      <button className='btnItem btnMenos' onClick={handleRemove} > - </button>
    
    <button onClick={handleAddToCart} className="agregarCarritoBtn">Comprar Producto</button>
    </div>
  )
}

export default ItemCount