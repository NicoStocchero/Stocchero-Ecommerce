// ProductSection.jsx - Sección con título, lista corta de productos y link a ver más

import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const ProductSection = ({ title, products, linkTo }) => {
  // Muestra hasta 5 productos
  const productsToShow = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <ItemList
        products={productsToShow}
        className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      />

      <div className="text-right mt-4">
        <Link
          to={linkTo}
          className="text-primary font-semibold hover:underline"
        >
          Ver más &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
