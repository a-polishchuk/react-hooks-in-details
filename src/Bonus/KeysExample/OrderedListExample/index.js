import { useState } from 'react';
import OrderedList from './OrderedList';

const DATA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

export default function OrderedListExample() {
  const [data, setData] = useState(DATA);

  const onItemClick = (item) => {
    setData((array) => array.filter((value) => value !== item));
  };

  return (
    <>
      <h2>How React keys really works?</h2>
      <OrderedList data={data} onItemClick={onItemClick} />
    </>
  );
}
