// Footer.jsx - Pie de página del sitio

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8 text-sm">
        {/* Contacto */}
        <div>
          <h3 className="font-bold text-base mb-2">
            Contacto a Nicolás Stocchero
          </h3>
          <p>Teléfono: +54 3543 53 0443</p>
          <p>
            Email:{" "}
            <a
              href="mailto:nicostocchero@gmail.com"
              className="hover:underline"
            >
              nicostocchero@gmail.com
            </a>
          </p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-bold text-base mb-2">Redes</h3>
          <a
            href="https://www.instagram.com/nicostocchero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block"
            aria-label="Instagram de Nicolás Stocchero (se abre en nueva pestaña)"
          >
            Instagram (mi cuenta personal)
          </a>
        </div>

        {/* Info legal */}
        <div>
          <h3 className="font-bold text-base mb-2">Información</h3>
          <p className="hover:underline cursor-pointer">
            Términos y condiciones
          </p>
          <p className="hover:underline cursor-pointer">
            Política de privacidad
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Renace Padel Club. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
