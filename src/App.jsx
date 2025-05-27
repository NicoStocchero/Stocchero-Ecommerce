import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ItemDetailPage from "./pages/ItemDetailPage";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import { Cart } from "./pages/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/layout/Footer";

import { createFirebaseApp } from "./utils/configFirebase";

import "./css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  createFirebaseApp();
  return (
    <CartProvider>
      <Navbar /> {/* se muestra siempre */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Productos />} />
          <Route path="/item/:itemId" element={<ItemDetailPage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer /> {/* Footer al final, dentro del CartProvider */}
    </CartProvider>
  );
}

export default App;
