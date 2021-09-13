import axios from 'axios';

export async function fetcher(url) {
  const response = await axios.get(url);
  return response.data;
}
