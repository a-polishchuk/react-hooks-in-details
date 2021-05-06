import { useEffect, useState } from 'react';
import './MasterDetail.css';

export function MasterDetail({ content }) {
  const [chapterId, setChapterId] = useState('');
  const selectedChapter = chapterId ? content[chapterId] : null;
  const Detail = selectedChapter?.component;
  const entries = Object.entries(content);

  useEffect(() => {
    document.title = content[chapterId]?.name ?? 'React Hooks in Details';
  }, [chapterId, content]);

  return (
    <div className="container">
      <div className="master">
        {entries.map(([key, value]) => {
          const isSelected = chapterId === key;
          const className = `master-button ${isSelected ? 'selected' : null}`;

          return (
            <div key={key}>
              <button className={className} onClick={() => setChapterId(key)}>
                {value.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="detail">{Detail ? <Detail /> : null}</div>
    </div>
  );
}
