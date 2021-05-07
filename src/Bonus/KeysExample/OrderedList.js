import ListItem from './ListItem';

export default function OrderedList({ data, onItemClick }) {
  return (
    <ol>
      {data.map((item, index) => {
        const itemId = index;
        return (
          <ListItem
            key={itemId}
            id={itemId}
            item={item}
            onClick={onItemClick}
          />
        );
      })}
    </ol>
  );
}
