// import { products } from "../data/products.js";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// export const uploadProducts = async () => {
//   const db = getFirestore();
//   const productsCollection = collection(db, "products");

//   try {
//     for (const product of products) {
//       const { id, ...productData } = product;

//       const docRef = await addDoc(productsCollection, productData);
//       console.log("Producto agregado con ID: ", docRef.id);
//     }

//     console.log("Productos agregados con éxito");
//   } catch (error) {
//     console.log("Error al agregar productos: ", error);
//   }
// };
