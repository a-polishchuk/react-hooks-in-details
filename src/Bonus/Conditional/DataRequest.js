import { useEffect, useState } from 'react';

const RequestState = {
  PENDING: 'pending',
  SUCCEED: 'succeed',
  FAILED: 'failed',
};

export function DataRequest(props) {
  const { fetcher, renderLoading, renderSuccess, renderError } = props;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [state, setState] = useState(RequestState.PENDING);

  useEffect(() => {
    setState(RequestState.PENDING);
    fetcher()
      .then((response) => {
        setData(response);
        setState(RequestState.SUCCEED);
      })
      .catch((error) => {
        setError(error);
        setState(RequestState.FAILED);
      });
  }, [fetcher]);

  switch (state) {
    case RequestState.PENDING:
      return renderLoading();
    case RequestState.SUCCEED:
      return renderSuccess(data);
    case RequestState.FAILED:
      return renderError(error);
    default:
      throw new Error(`State ${state} is not supported`);
  }
}
