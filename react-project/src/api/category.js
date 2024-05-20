import { instance } from "./index";

export const getCategory = async () => {
  const {data} = await instance.get("categories?populate=*");
  return data;
};
