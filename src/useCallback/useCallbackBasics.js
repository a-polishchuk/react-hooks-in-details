import React, { useCallback } from 'react';
import { useRerender } from '../useState/useRerender';

const items = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' },
];

const Item = React.memo(({ item, onClick }) => {
  const { name } = item;
  console.log(`> ${name}`);

  return <div onClick={() => onClick(item)}>{name}</div>;
});

export function List({ items }) {
  const rerender = useRerender();

  const onItemClick = useCallback((item) => {
    console.log(`clicked item with id = ${item.id}`);
  }, []);

  console.log('List');

  return (
    <>
      <p>
        <button onClick={rerender}>RERENDER</button>
      </p>
      {items.map((item) => (
        <Item item={item} key={item.id} onClick={onItemClick} />
      ))}
    </>
  );
}
