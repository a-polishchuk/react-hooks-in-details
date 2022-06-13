import { useEffect, useState } from 'react';
import { Toolbar } from 'components/Toolbar';
import { PropsTable } from 'components/PropsTable';
import { LoadingSpinner } from 'components/LoadingSpinner';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

export function FetchDataInUseEffect() {
  const [postId, setPostId] = useState('1');
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${ENDPOINT}/${postId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Status code ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setPostData(json);
        setError(null);
      })
      .catch((error) => {
        setPostData(null);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [postId]);

  const handleInputChange = (event) => {
    setPostId(event.target.value);
  };

  return (
    <>
      <h2>Chapter 6. useEffect</h2>
      <h3>Fetch data in useEffect</h3>

      <Toolbar>
        Post ID{' '}
        <input type="number" value={postId} onChange={handleInputChange} />
      </Toolbar>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div style={{ color: 'red' }}>
          <strong>Error: </strong>
          {error.message}
        </div>
      ) : (
        <PropsTable title={`/posts/${postId}`} data={postData} />
      )}
    </>
  );
}
