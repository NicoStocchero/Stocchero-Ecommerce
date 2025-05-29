// CategoryFilters.jsx - Componente reutilizable para mostrar filtros de categorías

import { Link, useParams } from "react-router-dom";

const CategoryFilters = ({ categories }) => {
  const { categoryId = "all" } = useParams();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/category/${cat.id}`}
          className={`px-3 py-1.5 border rounded-full text-sm font-medium transition ${
            categoryId === cat.id
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilters;
