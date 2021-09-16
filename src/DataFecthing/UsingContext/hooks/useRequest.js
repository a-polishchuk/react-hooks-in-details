import { useEffect, useState } from 'react';
import { queryFunction } from '../api';

export function useRequest(query) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    queryFunction(query)
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [query]);

  return {
    loading: !data && !error,
    data,
    error,
  };
}
