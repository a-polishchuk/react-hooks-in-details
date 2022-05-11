import { useToggle } from 'HooksCollection/Chapter-17/useToggle';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  Suspense,
} from 'react';
import Loading from './Loading';
import ExpandCollapseButton from './ExpandCollapseButton';
import './MasterDetail.css';

const EXPANDED_WIDTH = '25%';
const COLLAPSED_WIDTH = '25px';
const DEFAULT_TITLE = 'React Hooks in Details';

const Context = createContext();

export function useMasterDetailContext() {
  return useContext(Context);
}

export default function MasterDetail({ children }) {
  const [selectedTitle, setSelectedTitle] = useState();
  const [DetailComponent, setDetailComponent] = useState();
  const [expanded, toggleExpanded] = useToggle(true);

  useDocumentTitle(selectedTitle);

  const selectChapter = useCallback((title, component) => {
    setSelectedTitle(title);
    // NOTE: we're passing a setter function here,
    // because component is a function itself
    setDetailComponent(() => component);
  }, []);

  const contextValue = {
    selectedTitle,
    DetailComponent,
    selectChapter,
  };

  const masterStyle = {
    minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
    maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
    width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
  };

  return (
    <div className="container">
      <div className="master" style={masterStyle}>
        {expanded && (
          <Context.Provider value={contextValue}>{children}</Context.Provider>
        )}
      </div>

      <div className="detail">
        <Suspense fallback={<Loading />}>
          {DetailComponent && <DetailComponent />}
        </Suspense>
      </div>

      <div className="master-expand-container" style={masterStyle}>
        <div className="master-expand-button">
          <ExpandCollapseButton expanded={expanded} onToggle={toggleExpanded} />
        </div>
      </div>
    </div>
  );
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
  }, [title]);
}
