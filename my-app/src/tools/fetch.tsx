export const getProducts = async (): Promise<[]> => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};
