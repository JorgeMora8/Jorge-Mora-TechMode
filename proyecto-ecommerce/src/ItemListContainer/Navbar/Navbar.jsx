import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link , NavLink} from 'react-router-dom'
const Navbar = () => {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       
  <div className="container-fluid">
    <NavLink to={"/"} className="navbar-brand logo-navbar boldType">TechMode</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink to={"/"} className='nav-link navItem boldType'>Home</NavLink>
        </li>
        <NavLink to={"/categoria/computadoras"} className='nav-link navItem boldType'>Computadoras</NavLink>
          <NavLink to={"/categoria/telefonos"} className='nav-link navItem boldType'>Telefonos</NavLink>
          <Link to={"/categoria/audifonos"} className='nav-link navItem boldType'> Audifonos</Link>
        <li className="nav-item">
        </li>
          <li>
          <NavLink to={"/registros"} className='nav-link navItem boldType'>Registros</NavLink>
          </li>
     
      </ul>
    </div>
    <Link to="/cart"><CartWidget /></Link>
 
    
  </div>
</nav>

  )
}

export default Navbar