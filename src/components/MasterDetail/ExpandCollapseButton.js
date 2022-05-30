import './MasterDetail.css';

export default function ExpandCollapseButton({ expanded, onToggle }) {
  const expandButtonClass = `expand-collapse-button ${
    expanded ? 'selected' : ''
  }`;

  return (
    <button className={expandButtonClass} onClick={onToggle}>
      {expanded ? '-' : '+'}
    </button>
  );
}
