import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import MiniCartProvider from "./context/MiniCartProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ItemDetailPage from "./pages/ItemDetailPage";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import { Cart } from "./pages/Cart";
import MiniCart from "./components/cart/MiniCart";
import Checkout from "./pages/Checkout";

import { createFirebaseApp } from "./utils/configFirebase";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  createFirebaseApp();

  return (
    <CartProvider>
      <MiniCartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <MiniCart />

          <main className="flex-grow pt-18">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<Productos />} />
              <Route path="/item/:itemId" element={<ItemDetailPage />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="*"
                element={
                  <h2 className="text-center text-2xl font-bold mt-12">
                    404 - Página no encontrada
                  </h2>
                }
              />
            </Routes>
          </main>

          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </div>
      </MiniCartProvider>
    </CartProvider>
  );
}

export default App;
