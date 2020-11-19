import Axios from "./axios-intance";

export const getDeals = async (url: string, pageSize = 60, pageNumber = 1) => {
  const response = await Axios.get(
    `${url}?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data;
};

export const getDealDetails = async (url: string, id: string) => {
  const response = await Axios.get(`${url}?id=${id}`);
  return response.data;
};
