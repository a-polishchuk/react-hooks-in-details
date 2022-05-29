import './index.css';

export function Button({ text, onClick, disabled = false }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
