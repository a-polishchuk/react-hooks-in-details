import TopPanel from './TopPanel';
import Profile from './Profile';

const USER_ID = 1;

function SwrExample() {
  return (
    <>
      <TopPanel userId={USER_ID} />
      <Profile userId={USER_ID} />
    </>
  );
}

export default SwrExample;
