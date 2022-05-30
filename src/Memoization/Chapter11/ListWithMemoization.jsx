import { useCallback, memo } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { useRerender } from 'hooks/useRerender';

const ITEMS = [
  { id: '1', name: 'First' },
  { id: '2', name: 'Second' },
  { id: '3', name: 'Third' },
];

const MemoizedItem = memo(function Item({ item, onClick }) {
  const { name } = item;
  console.log(`> render ${name}`);

  return <li onClick={() => onClick(item)}>{name}</li>;
});

function List({ items }) {
  const memoizedCallback = useCallback((item) => {
    console.log(`clicked item with id ${item.id}`);
  }, []);

  console.log('render List');

  return (
    <ol>
      {items.map((item) => (
        <MemoizedItem item={item} key={item.id} onClick={memoizedCallback} />
      ))}
    </ol>
  );
}

export function ListWithMemoization() {
  const rerender = useRerender();

  return (
    <>
      <h2>Chapter 11. useCallback</h2>
      <h3>List with memoization</h3>
      <Toolbar>
        <Button text="Click me to re-render" onClick={rerender} />
      </Toolbar>
      <List items={ITEMS} />
    </>
  );
}
