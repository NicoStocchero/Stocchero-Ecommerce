import {
  serverTimestamp,
  collection,
  getFirestore,
  doc,
  runTransaction,
} from "firebase/firestore";

export const createOrder = async ({ cart, buyer, total }) => {
  const db = getFirestore();
  const orderRef = doc(collection(db, "orders"));

  // Ejecutamos la transacción para asegurar consistencia en la base de datos
  await runTransaction(db, async (transaction) => {
    // Validamos stock de cada producto antes de descontarlo
    for (const item of cart) {
      const stockRef = await transaction.get(
        doc(db, "products", item.product.id)
      );
      const stock = stockRef.data().stock;

      if (stock < item.quantity) {
        throw new Error(
          `No hay suficiente stock para "${item.product.title}". Reducí la cantidad o elegí otro producto.`
        );
      }

      // Actualizamos stock en la base de datos
      // transaction.update(doc(db, "products", item.product.id), {
      //   stock: stock - item.quantity,
      // });
    }

    // Creamos la orden con los datos del comprador, productos y total
    transaction.set(orderRef, {
      buyer,
      items: cart,
      total,
      date: serverTimestamp(),
    });
  });

  return orderRef.id;
};
