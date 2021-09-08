import { useEffect, useState } from 'react';
import { useMountedRef } from './useMountedRef';
import ImagePlaceholder from './ImagePlaceholder';

const SIZE = 200;
const styles = {
  image: {
    width: SIZE,
    height: SIZE,
    objectFit: 'cover',
    borderRadius: SIZE / 2,
  },
};

export default function AsyncPicture({ getImageFunc }) {
  const isMountedRef = useMountedRef();
  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImageFunc()
      .then((url) => {
        if (isMountedRef.current) {
          setImageUrl(url);
        }
      })
      .finally(() => {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      });
  }, [getImageFunc, isMountedRef]);

  if (isLoading) {
    return <ImagePlaceholder size={SIZE} />;
  }

  return (
    <img
      src={imageUrl}
      alt="Fetched from external service"
      style={styles.image}
    />
  );
}
