import {
  getDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";

// Lista blanca de categorías válidas para la consulta en Firestore
// Si categoryId no está en la lista, devuelve un array vacío sin consultar Firestore
const whiteList = ["paletas", "indumentaria", "accesorios", "calzado"];

// getProducts: obtiene productos de Firestore, filtrados por categoría si se pasa categoryId, o todos si es "all"
export const getProducts = async (categoryId) => {
  const db = getFirestore();
  const productsCollection = collection(db, "products");

  let productsSnapshot;

  if (categoryId === "all") {
    // Caso especial: si categoryId es "all", obtén todos los productos
    productsSnapshot = await getDocs(productsCollection);
  } else if (!whiteList.includes(categoryId)) {
    return []; // Devuelve un array vacío si la categoría no es válida
  } else {
    // Filtra productos por categoría
    const q = query(productsCollection, where("categoria", "==", categoryId));
    productsSnapshot = await getDocs(q);
  }

  // Mapea los datos y asegura que los campos sean del tipo correcto
  return productsSnapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      precio: Number(data.precio) || 0,
      precioAnterior: Number(data.precioAnterior) || 0,
      descuento: Number(data.descuento) || 0,
      stock: Number(data.stock) || 0,
    };
  });
};

export const getProductById = async (id) => {
  if (!id) return null;

  const db = getFirestore();
  const productsRef = doc(db, "products", id);
  const productsSnapshot = await getDoc(productsRef);

  if (productsSnapshot.exists()) {
    const data = productsSnapshot.data();
    return {
      id: productsSnapshot.id,
      ...data,
      precio: Number(data.precio) || 0,
      precioAnterior: Number(data.precioAnterior) || 0,
      descuento: Number(data.descuento) || 0,
      stock: Number(data.stock) || 0,
    };
  } else {
    return null;
  }
};
