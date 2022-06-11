const TRANSPORT_EMOJIS = [
  '🚗',
  '🚕',
  '🚙',
  '🚌',
  '🚎',
  '🏎',
  '🚓',
  '🚑',
  '🚒',
  '🚐',
  '🛻',
  '🚚',
];

const BALLS_EMOJIS = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉'];

function EmojisList(props) {
  const { emojis, ordered } = props;
  const ListComponent = ordered ? 'ol' : 'ul';
  return (
    <ListComponent>
      {emojis.map((emoji, index) => (
        <li key={index}>{emoji}</li>
      ))}
    </ListComponent>
  );
}

function EmojisTable({ emojis }) {
  const rows = [];
  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{emoji}</td>
        <td>
          {emoji
            .split('')
            .map((ch) => ch.charCodeAt(0))
            .join(' + ')}
        </td>
      </tr>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Emoji</th>
          <th>Char codes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export function Arrays() {
  return (
    <>
      <h2>Introduction to JSX</h2>
      <h3>Rendering arrays</h3>

      <p>Balls emojis: {BALLS_EMOJIS}</p>
      <p>Transport emojis: {TRANSPORT_EMOJIS.join(' ')}</p>

      <div style={{ display: 'flex', gap: 20 }}>
        <EmojisList emojis={BALLS_EMOJIS} />
        <EmojisList emojis={TRANSPORT_EMOJIS} ordered />
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        <EmojisTable emojis={BALLS_EMOJIS} />
        <EmojisTable emojis={TRANSPORT_EMOJIS} />
      </div>
    </>
  );
}
