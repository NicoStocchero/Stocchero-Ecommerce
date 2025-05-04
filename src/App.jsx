import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ItemDetailPage from "./pages/ItemDetailPage";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

import "./css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Navbar /> {/* se muestra siempre */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Productos />} />
        <Route path="/item/:itemId" element={<ItemDetailPage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
