import { useEffect, useRef } from 'react';

const style = {
  margin: 10,
  fontSize: 20,
};

export default function ListItem({ id, item, onClick }) {
  const prevItemRef = useRef();

  useEffect(() => {
    console.log(`>> ${id} mounted`);
    return () => {
      console.log(`<< ${id} unmounted`);
    };
  }, [id]);

  useEffect(() => {
    console.log(`item: ${prevItemRef.current} -> ${item}`);
    prevItemRef.current = item;
  }, [item]);

  const handleClick = () => {
    onClick(item);
  };

  return (
    <li onClick={handleClick} style={style}>
      {item}
    </li>
  );
}
