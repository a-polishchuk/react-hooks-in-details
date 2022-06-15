import './MasterDetail.css';

export default function ExpandCollapseButton({ expanded, onToggle }) {
  const selectedClass = expanded ? 'selected' : '';
  const expandButtonClass = `expand-collapse-button ${selectedClass}`;

  return (
    <button className={expandButtonClass} onClick={onToggle}>
      {expanded ? '-' : '+'}
    </button>
  );
}
