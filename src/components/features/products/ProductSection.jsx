// ProductSection.jsx - Sección con título, lista corta de productos y link a ver más

import { Link } from "react-router-dom";
import Item from "./Item";
import SkeletonList from "@/components/ui/loader/SkeletonList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductSection = ({ title, products, linkTo, loading }) => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2
        className="text-xl font-bold mb-4"
        id={`section-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {title}
      </h2>

      {loading ? (
        <SkeletonList count={5} />
      ) : (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="text-right mt-4">
        <Link
          to={linkTo}
          className="text-primary font-semibold hover:underline"
          aria-label={`Ver más productos de la sección ${title}`}
        >
          Ver más →
        </Link>{" "}
      </div>
    </section>
  );
};

export default ProductSection;
