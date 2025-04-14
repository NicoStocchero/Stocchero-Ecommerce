import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
import logo from "../assets/logo-renace.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Renace Padel Club" className="logo" />
        <h1>Tienda Online</h1>
      </div>

      <ul className="navbar-links">
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
