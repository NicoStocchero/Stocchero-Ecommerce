// HeroCarousel.jsx - Carrusel principal de Hero con links a productos

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
  {
    image: "/assets/hero/hero.webp",
    link: "/item/8OKlUyC7b9JpmCMaY79M",
    alt: "Zapatillas Renace ProGrip",
    position: "center 100%",
  },
  {
    image: "/assets/hero/hero-2.webp",
    link: "/item/FrTqvnytJ4Obv90yaKKD",
    alt: "Remera Mujer Rosa",
    position: "center 10%",
  },
  {
    image: "/assets/hero/hero-3.webp",
    link: "/item/GrIDpB21UT6yfhrJuZo6",
    alt: "Remera Renace Argentina",
    position: "center 10%",
  },
  {
    image: "/assets/hero/hero-4.webp",
    link: "/item/UZlF3RrPzyGD6AJgEKIx",
    alt: "Paleta Control Carbono Pro",
    position: "center 0%",
  },
];

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-full z-0 opacity-90"
    >
      {heroSlides.map((slide, i) => (
        <SwiperSlide key={i}>
          <Link to={slide.link}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.position }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
