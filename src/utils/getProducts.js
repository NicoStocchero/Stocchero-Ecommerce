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

// getProducts obtiene productos de Firestore, filtrados por categoría si se pasa categoryId, o todos si es "all"
export const getProducts = async (categoryId) => {
  const db = getFirestore();
  const productsCollection = collection(db, "products");

  let products = [];
  let productsSnapshot;

  if (categoryId === "all") {
    // Caso especial: si categoryId es "all", obtén todos los productos
    productsSnapshot = await getDocs(productsCollection);
  } else if (!whiteList.includes(categoryId)) {
    return products;
  } // Si categoryId no está en la lista blanca, devuelve un array vacío
  else {
    // Filtra productos por categoría
    const q = query(productsCollection, where("categoria", "==", categoryId));
    productsSnapshot = await getDocs(q);
  }

  // Itera sobre los documentos y agrega los productos al array
  for (const doc of productsSnapshot.docs) {
    const product = { id: doc.id, ...doc.data() };
    products.push(product);
  }

  // Devuelve el array de productos
  return products;
};

export const getProductById = async (id) => {
  if (!id) {
    // Si no se proporciona un ID, devuelve null
    return null;
  }

  const db = getFirestore();
  const productsRef = doc(db, "products", id);
  const productsSnapshot = await getDoc(productsRef);

  if (productsSnapshot.exists()) {
    // Si el producto existe, devuelve el id y los datos del producto
    return { id: productsSnapshot.id, ...productsSnapshot.data() };
  } else {
    // Si el producto no existe, devuelve null
    return null;
  }
};
