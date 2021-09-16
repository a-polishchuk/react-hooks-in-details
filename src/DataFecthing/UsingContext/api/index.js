import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function queryFunction(query) {
  const { data } = await axiosInstance.get(query);
  return data;
}
