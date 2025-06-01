// Navbar.jsx - Barra de navegación principal

// React Router
import { NavLink } from "react-router-dom";

// Componentes internos
import CartWidget from "@/components/cart/CartWidget";

// Assets
import logo from "@/assets/logo-renace.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Logo */}
      <NavLink to="/" aria-label="Ir a la página de inicio">
        <img
          src={logo}
          loading="lazy"
          decoding="async"
          alt="Renace Padel Club"
          className="h-10"
        />
      </NavLink>

      {/* Links de navegación */}
      <ul className="flex items-center gap-6 text-sm font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold transition"
                : "hover:text-orange-500 transition"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/all"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold transition"
                : "hover:text-orange-500 transition"
            }
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold transition"
                : "hover:text-orange-500 transition"
            }
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold transition"
                : "hover:text-orange-500 transition"
            }
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold flex items-center gap-1 transition"
                : "hover:text-orange-500 flex items-center gap-1 transition"
            }
          >
            <CartWidget />
            Carrito
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
