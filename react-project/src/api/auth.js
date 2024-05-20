import { instance } from "./index";

export const register = async (params) => {
  const { data } = await instance.post("auth/local/register", params);
  return data;
};


export const login = async (params) => {
  const { data } = await instance.post("auth/local", params);

  return data;
};
