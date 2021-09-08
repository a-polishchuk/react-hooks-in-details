import { useMasterDetailContext } from './MasterDetail';
import './MasterDetail.css';

function Chapter({ title, component }) {
  const { selectedTitle, selectChapter } = useMasterDetailContext();
  const isSelected = selectedTitle === title;
  const className = `master-button ${isSelected ? 'selected' : ''}`;

  const handleClick = () => {
    selectChapter(title, component);
  };

  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Chapter;
