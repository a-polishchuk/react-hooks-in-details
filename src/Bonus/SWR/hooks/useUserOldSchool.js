import { useEffect, useState } from 'react';
import axios from 'axios';

export function useUserOldSchool(userId) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [userId]);

  return {
    loading: !data && !error,
    data,
    error,
  };
}
