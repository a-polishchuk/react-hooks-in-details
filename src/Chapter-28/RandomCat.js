import { useEffect, useState } from 'react';
import axios from 'axios';
import { useIsMountedRef } from './useIsMountedRef';
import ImagePlaceholder from './ImagePlaceholder';

const styles = {
  image: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    borderRadius: 100,
  },
};

export default function RandomCat() {
  const isMountedRef = useIsMountedRef();
  const [imageUrl, setImageUrl] = useState();
  const [requestTrigger, setRequestTrigger] = useState();
  const [isLooking, setIsLooking] = useState(true);

  useEffect(() => {
    setIsLooking(true);
    axios
      .get('https://cataas.com/api/cats?tags=cute')
      .then((response) => {
        if (isMountedRef.current) {
          const cuteCats = response.data;
          const randomIndex = Math.round(Math.random() * cuteCats.length);
          const randomCuteCat = cuteCats[randomIndex];
          setImageUrl(`https://cataas.com/cat/${randomCuteCat.id}`);
          setIsLooking(false);
        }
      })
      .catch((error) => {
        if (isMountedRef.current) {
          console.error(error);
          setIsLooking(false);
        }
      });
  }, [isMountedRef, requestTrigger]);

  const requestNewDog = () => {
    setRequestTrigger({});
  };

  if (isLooking) {
    return <ImagePlaceholder size={200} />;
  }

  return (
    <>
      <img src={imageUrl} alt="Random Cute Cat" style={styles.image} />
      <p>
        <button onClick={requestNewDog}>Find me a cute one</button>
      </p>
    </>
  );
}
