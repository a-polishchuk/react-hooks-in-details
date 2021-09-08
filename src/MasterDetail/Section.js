import { useState } from 'react';
import './MasterDetail.css';

function Section({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const expandButtonClass = `section-button ${expanded ? 'selected' : ''}`;
  const titleStyle = {
    fontWeight: expanded ? 600 : 400,
  };

  const toggleExpanded = () => {
    setExpanded((value) => !value);
  };

  return (
    <>
      <div className="section">
        <button className={expandButtonClass} onClick={toggleExpanded}>
          {expanded ? '-' : '+'}
        </button>
        <span style={titleStyle}>{title}</span>
      </div>
      {expanded && <div className="section-content">{children}</div>}
    </>
  );
}

export default Section;
