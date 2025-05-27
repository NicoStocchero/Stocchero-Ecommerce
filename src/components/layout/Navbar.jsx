import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import CartWidget from "../CartWidget";
import logo from "../../assets/logo-renace.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Renace Padel Club" className="logo" />
      </div>

      <ul className="navbar-links">
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/category/all"}>Productos</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={"navbar-cart"}>
              <CartWidget />
              Carrito
            </NavLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
