import './index.css';

export function Label({ text, minWidth = 150 }) {
  return (
    <div className="label" style={{ minWidth }}>
      {text}
    </div>
  );
}
