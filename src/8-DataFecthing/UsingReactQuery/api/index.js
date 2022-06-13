import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function queryFunction({ queryKey }) {
  const { data } = await axiosInstance.get(queryKey[0]);
  return data;
}
