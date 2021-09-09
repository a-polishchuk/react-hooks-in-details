import { createContext, useContext, useEffect, useState } from 'react';
import './MasterDetail.css';

const Context = createContext();

export function useMasterDetailContext() {
  return useContext(Context);
}

export default function MasterDetail({ children }) {
  const [selectedTitle, setSelectedTitle] = useState();
  const [DetailComponent, setDetailComponent] = useState();

  const selectChapter = (title, component) => {
    setSelectedTitle(title);
    setDetailComponent(() => component);
  };

  const contextValue = {
    selectedTitle,
    DetailComponent,
    selectChapter,
  };

  useEffect(() => {
    document.title = selectedTitle || 'React Hooks in Details';
  }, [selectedTitle]);

  return (
    <div className="container">
      <div className="master">
        <Context.Provider value={contextValue}>{children}</Context.Provider>
      </div>
      <div className="detail">{DetailComponent && <DetailComponent />}</div>
    </div>
  );
}
