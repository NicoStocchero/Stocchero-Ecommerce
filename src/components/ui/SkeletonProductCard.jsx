// SkeletonProductCard.jsx - Componente Skeleton para una tarjeta de producto individual

import SkeletonShimmer from "./SkeletonShimmer";

const SkeletonProductCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-card p-4 flex flex-col gap-3 w-full max-w-sm">
      {/* Placeholder para la imagen del producto (aspect ratio 4/3) con efecto shimmer */}
      <SkeletonShimmer className="rounded-lg aspect-[4/3] w-full" />

      {/* Placeholder para el título del producto */}
      <SkeletonShimmer className="h-6 w-3/4 rounded" />

      {/* Placeholder para el precio del producto */}
      <SkeletonShimmer className="h-4 w-1/2 rounded" />
    </div>
  );
};

export default SkeletonProductCard;
