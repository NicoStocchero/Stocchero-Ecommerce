function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: +54 3543 000 000</p>
          <p>Email: contacto@renacepadel.com</p>
        </div>
        <div className="footer-section">
          <h3>Redes</h3>
          <a href="#">Instagram</a>
          <div></div>
          <a href="#">Facebook</a>
        </div>
        <div className="footer-section">
          <h3>Información</h3>
          <p>Términos y condiciones</p>
          <p>Política de privacidad</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Renace Padel Club. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
