import { useAnimatedText } from '6-HooksCollection/Chapter-23/useAnimatedText';
import { PropsTable } from 'components/PropsTable';
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

const rootStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const containerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function DataRequestTest() {
  return (
    <div style={rootStyle}>
      <h2>Conditional rendering. Data request</h2>
      <div style={containerStyle}>
        <DataRequest
          fetcher={fetcher}
          renderLoading={() => <LoadingState />}
          renderSuccess={(data) => <PropsTable title="Response" data={data} />}
          renderError={(error) => <ErrorState message={error.message} />}
        />
      </div>
    </div>
  );
}
