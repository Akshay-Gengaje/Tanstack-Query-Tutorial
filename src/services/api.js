import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const AxiosInstance = axios.create({ baseURL: BASE_URL });
export const getTodosId = async () => {
  return (await AxiosInstance.get("/todos")).data.map((todo) => todo.id);
};

export const getTodosById = async (id) => {
  return (await AxiosInstance.get(`/todos/${id}`)).data;
};
