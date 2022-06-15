import { useEffect, useState, Children } from 'react';
import { useMasterDetailContext } from './MasterDetail';
import { ExpandCollapseButton } from './ExpandCollapseButton';
import './MasterDetail.css';

export function Section({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const { selectedTitle } = useMasterDetailContext();

  useEffect(() => {
    if (hasSelectedChild(title, children, selectedTitle)) {
      setExpanded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleExpanded = () => {
    setExpanded((value) => !value);
  };

  const titleStyle = {
    fontWeight: expanded ? 600 : 400,
  };

  return (
    <>
      <div className="section" onClick={toggleExpanded}>
        <div className="section-button">
          <ExpandCollapseButton expanded={expanded} />
        </div>
        <div style={titleStyle}>{title}</div>
      </div>
      {expanded && <div className="section-content">{children}</div>}
    </>
  );
}

/**
 * Recusrsively checking if a tree node has selected node somewhere down the tree
 */
function hasSelectedChild(title, children, selectedTitle) {
  if (title === selectedTitle) {
    return true;
  }
  const array = Children.toArray(children);
  return array.some(({ props }) =>
    hasSelectedChild(props.title, props.children, selectedTitle)
  );
}
