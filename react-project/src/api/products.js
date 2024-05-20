import { instance } from "./index";

export const getProducts = async (limit) => {
  const { data } = await instance.get(
    `products?populate=*&${limit && "pagination[limit]=" + limit}`
  );

  return data;
};

export const getProductsById = async (id) => {
  const { data } = await instance.get(`products/${id}?populate=*`);
  return data;
};

export const getProductBySearch = async (nameProduct) => {
  const { data } = await instance.get(
    `products?filters[productName][$contains]=${nameProduct}&&populate=*`
  );

  return data;
};

export const getProductByFilter = async ({
  categoryName,
  productName,
  minPrice,
  maxPrice,
}) => {
  
  let filters = "";
  if (categoryName) {
    filters += `&filters[categories][title][$eq]=${categoryName}`;
  }
  if (productName) {
    filters += `&filters[productName][$contains]=${productName}`;
  }
  if (minPrice) {
    filters += `&filters[price][$gte]=${minPrice}`;
  }
  if (maxPrice) {
    filters += `&filters[price][$lte]=${maxPrice}`;
  }
  
  const { data } = await instance.get(`products?populate=*${filters}`);
  console.log({
    categoryName,
    productName,
    minPrice,
    maxPrice,
  },"islemeeeee");
  return data;
};
