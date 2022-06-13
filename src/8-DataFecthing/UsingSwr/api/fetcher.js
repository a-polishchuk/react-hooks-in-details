import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function fetcher(url) {
  const response = await axiosInstance.get(url);
  return response.data;
}
