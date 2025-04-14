import paletaPro from "../assets/productos/paleta-pro.png";
import remera from "../assets/productos/remera.png";
import zapatillas from "../assets/productos/zapatillas.png";

const productos = [
  {
    id: 1,
    marca: "RENACE",
    nombre: "Paleta Pro Naranja Carbono",
    precio: 399999,
    precioAnterior: 499999,
    descuento: 20,
    cuotas: "en 6 cuotas sin interés",
    imagen: paletaPro,
  },
  {
    id: 2,
    marca: "RENACE",
    nombre: "Remera Hombre Azul",
    precio: 79999,
    precioAnterior: 99999,
    descuento: 20,
    cuotas: "en 3 cuotas sin interés",
    imagen: remera,
  },
  {
    id: 3,
    marca: "NIKE",
    nombre: "Zapatillas All Court Padel",
    precio: 289999,
    precioAnterior: 319999,
    descuento: 10,
    cuotas: "en 6 cuotas sin interés",
    imagen: zapatillas,
  },
];

export default productos;
