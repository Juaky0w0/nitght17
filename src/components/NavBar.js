import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../src/img/logo-imcetron.png';
import "./Navbar.css";


function NavBar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            <img className="logo"
            src={Logo} 
            alt="fireSpot"
           />
            </NavLink>
         
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/servicios"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/empresa"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Empresa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contacto"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contacto
                </NavLink>
              </li>              
              <li className="nav-item">                
                <NavLink
                  exact
                  to=""
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >                  
                  <i className="fa fa-facebook-f"><a href="https://www.facebook.com/"></a></i>
                </NavLink>
                
              </li>
              
              <li className="nav-item">
                <NavLink
                  exact
                  to="/linkedin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                 <i className="fa fa-linkedin"></i>
                </NavLink>
              </li>
            
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            
            
            </div>
        </nav>
        
      </>
    );
  }
  
  export default NavBar;