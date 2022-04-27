import { useAnimatedText } from 'HooksCollection/Chapter-23/useAnimatedText';
import { DataRequest } from './DataRequest';

function fetcher() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOk = Math.random() > 0.5;
      if (isOk) {
        resolve({
          id: Math.random().toFixed(3),
          message: 'This message came from the server',
          description: 'Some random text goes here',
        });
      } else {
        reject(new Error('Fake error message'));
      }
    }, 5000);
  });
}

function LoadingState() {
  const animatedText = useAnimatedText('Loading...', 100);
  return <div>{animatedText}</div>;
}

function ErrorState({ message }) {
  return <div style={{ color: 'red', fontSize: '24px' }}>{message}</div>;
}

function Content({ data }) {
  return (
    <div style={{ color: 'green', fontSize: '18px' }}>
      {JSON.stringify(data)}
    </div>
  );
}

const containerStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function DataRequestTest() {
  return (
    <div style={containerStyle}>
      <DataRequest
        fetcher={fetcher}
        renderLoading={() => <LoadingState />}
        renderSuccess={(data) => <Content data={data} />}
        renderError={(error) => <ErrorState message={error.message} />}
      />
    </div>
  );
}
