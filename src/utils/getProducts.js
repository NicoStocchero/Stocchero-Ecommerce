import products from "../data/products";

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!categoryId || categoryId === "all") resolve(products);
      else resolve(products.filter((p) => p.categoria === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500);
  });
};
