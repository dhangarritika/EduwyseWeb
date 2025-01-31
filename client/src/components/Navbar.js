import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <NavLink className="navbar-brand " to="#" id="navbar-brand" >eduWyse</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home <span class="sr-only "></span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About us</NavLink>
            </li>
            <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/preparationdemo">Preparation</NavLink>
          <NavLink className="dropdown-item" to="/courses">Courses</NavLink>
      </div>
      </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/preparation">Preparation</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
       <NavLink exact className="nav-link" to="/logout">logout</NavLink>
                    </li>

            <li className="nav-item ">
              <NavLink className="btn btn-outline-primary my-2 my-sm-0 nav-link " id="registrationbtn" to="/signup" >Get started</NavLink>
            </li>
            
            
    </ul>
  </div>
</nav>
        </>
      )
}

      export default Navbar
