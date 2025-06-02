// SkeletonItemDetail.jsx - Skeleton fiel a la estructura real de ItemDetail

import SkeletonShimmer from "./SkeletonShimmer";

const SkeletonItemDetail = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-8 justify-center items-start">
        {/* Imagen del producto */}
        <div className="w-96 max-w-full h-[24rem] bg-gray-200 rounded-xl shadow-md relative overflow-hidden">
          <SkeletonShimmer className="absolute inset-0" />
        </div>

        {/* Detalles */}
        <div className="flex flex-col gap-6 max-w-lg w-full">
          {/* Marca */}
          <div className="h-4 w-24 bg-gray-200 rounded relative overflow-hidden">
            <SkeletonShimmer className="absolute inset-0" />
          </div>

          {/* Título */}
          <div className="h-8 w-3/4 bg-gray-200 rounded relative overflow-hidden">
            <SkeletonShimmer className="absolute inset-0" />
          </div>

          {/* Descripción (3 líneas) */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-full bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
            <div className="h-4 w-5/6 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
            <div className="h-4 w-2/3 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
          </div>

          {/* Precios */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-1/4 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-6 w-1/4 bg-gray-200 rounded relative overflow-hidden">
                <SkeletonShimmer className="absolute inset-0" />
              </div>
              <div className="h-5 w-12 bg-gray-200 rounded relative overflow-hidden">
                <SkeletonShimmer className="absolute inset-0" />
              </div>
            </div>
            <div className="h-4 w-24 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
          </div>

          {/* Botones cantidad */}
          <div className="flex gap-2 items-center justify-center">
            <div className="h-8 w-8 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
            <div className="h-8 w-8 bg-gray-200 rounded relative overflow-hidden">
              <SkeletonShimmer className="absolute inset-0" />
            </div>
          </div>

          {/* Botón Agregar al carrito */}
          <div className="h-10 w-full bg-gray-200 rounded relative overflow-hidden">
            <SkeletonShimmer className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonItemDetail;
