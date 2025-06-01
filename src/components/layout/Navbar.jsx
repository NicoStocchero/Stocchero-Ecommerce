// Navbar.jsx - Barra de navegación principal

// React Router
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Componentes internos
import CartWidget from "@/components/cart/CartWidget";

// Assets
import logo from "@/assets/logo-renace.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm"
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        {/* Logo */}
        <NavLink to="/" aria-label="Ir a la página de inicio">
          <img
            src={logo}
            alt="Renace Padel Club"
            width="150"
            height="50"
            className="h-10"
          />
        </NavLink>
        {/* Botón hamburguesa - solo en mobile */}
        <button
          className="block lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Menú horizontal en desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold">
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

      {/* Overlay oscuro al abrir el menú */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menú desplegable */}
      <ul
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-4 z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/all" onClick={() => setMenuOpen(false)}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1"
          >
            <CartWidget />
            Carrito
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
