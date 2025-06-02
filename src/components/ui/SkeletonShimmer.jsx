// SkeletonShimmer.jsx - Componente base para shimmer

const SkeletonShimmer = ({ className = "" }) => (
  <div className={`relative overflow-hidden bg-gray-300 ${className}`}>
    {/* Capa interna: gradiente animado deslizándose horizontalmente */}
    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
);

export default SkeletonShimmer;
