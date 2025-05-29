// Hooks personalizados
import { useProductsByCategory } from "@/hooks/useProductsByCategory";

// Componentes
import ProductSection from "@/components/features/products/ProductSection";
import HeroSection from "@/components/features/hero/HeroSection";

const Home = () => {
  // Usamos el hook para obtener productos
  const products = useProductsByCategory([
    "paletas",
    "indumentaria",
    "accesorios",
  ]);

  return (
    <main>
      {/* Hero principal */}
      <HeroSection />

      {/* Secciones de productos */}
      <ProductSection
        title="Paletas Destacadas"
        products={products.paletas || []}
        linkTo="/category/paletas"
      />
      <ProductSection
        title="Remeras Nuevas"
        products={products.indumentaria || []}
        linkTo="/category/indumentaria"
      />
      <ProductSection
        title="Accesorios Especiales"
        products={products.accesorios || []}
        linkTo="/category/accesorios"
      />
    </main>
  );
};

export default Home;
