// SkeletonList.jsx - Lista de placeholders Skeleton para mostrar mientras se cargan los productos

// Importamos el componente Skeleton para una tarjeta individual
import SkeletonProductCard from "./SkeletonProductCard";

// Componente SkeletonList:
// Renderiza una grilla de tarjetas SkeletonProductCard mientras los datos de productos se cargan
const SkeletonList = ({ count }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {
      // Creamos un array de 'count' elementos vacíos
      // Usamos keys() para obtener una secuencia de índices (0, 1, 2, ...)
      // Mapeamos sobre los índices para renderizar 'count' SkeletonProductCard
      [...Array(count).keys()].map((i) => (
        <SkeletonProductCard key={i} />
      ))
    }
  </div>
);

export default SkeletonList;
