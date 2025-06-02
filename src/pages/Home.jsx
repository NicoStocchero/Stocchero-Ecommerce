import { useMemo } from "react";

// Hooks personalizados
import { useProductsByCategory } from "@/hooks/useProductsByCategory";

// Componentes
import ProductSection from "@/components/features/products/ProductSection";
import HeroSection from "@/components/features/hero/HeroSection";

const Home = () => {
  // Usamos el hook para obtener productos
  const categories = useMemo(
    () => ["paletas", "indumentaria", "accesorios"],
    []
  );
  const { products, loading } = useProductsByCategory(categories);

  return (
    <main>
      {/* Hero principal */}
      <HeroSection />

      {/* Secciones de productos */}
      <ProductSection
        title="Paletas Destacadas"
        products={products.paletas || []}
        loading={loading}
        linkTo="/category/paletas"
      />
      <ProductSection
        title="Remeras Nuevas"
        products={products.indumentaria || []}
        loading={loading}
        linkTo="/category/indumentaria"
      />
      <ProductSection
        title="Accesorios Especiales"
        products={products.accesorios || []}
        loading={loading}
        linkTo="/category/accesorios"
      />
    </main>
  );
};

export default Home;
