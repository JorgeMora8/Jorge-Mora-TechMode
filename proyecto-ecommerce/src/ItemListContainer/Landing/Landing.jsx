import React from 'react'
import landingImg from "../../../public/Images/LandingImagen.png"
import InfoOpciones from './InfoOpciones'

const Landing = ( ) => {



  return (
    <>
    <div className='infoContainer'>
        <div>
            <h1 className='infoContainerTitulo'>Que es TechMode</h1>
            <p className='infoContainerParrafo'>TechnoMode es un ecommerce de compra y venta de articulos electronicos. 
            Tales como computadoras, telefonos, audifonos, tablets, entre otros.</p>

            <p className='infoContainerParrafo'>Nuestra mision es traerte los ultimos articulos de tecnologia actualmente en el mercado 
            y ofrecer una gran variedad de marcas, modelos y precios</p>


        </div>
        <div>
            <img src={landingImg} alt="" className='imgLanding'/>
        </div>
        
    </div>
    <InfoOpciones />
    </>
  )
}

export default Landing