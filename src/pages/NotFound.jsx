import { Link } from "react-router-dom";
import img404 from "@/assets/img404.svg";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <img
        src={img404}
        alt="404"
        loading="lazy"
        decoding="async"
        className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto mb-8"
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
        Ups... nuestra mascota hizo de las suyas.{" "}
        <br className="hidden md:block" />
        Esta página no está en juego.
      </h2>

      <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-lg md:max-w-xl mb-6">
        Parece que te metiste en una página que no existe.{" "}
        <br className="hidden sm:block" />
        Tranquilo, a veces las pelotas también se van fuera de la cancha.{" "}
        <br className="hidden sm:block" />
        <b>
          Te invitamos a volver al inicio para seguir disfrutando de la
          experiencia Renace.
        </b>
      </p>

      <Link
        to="/"
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
