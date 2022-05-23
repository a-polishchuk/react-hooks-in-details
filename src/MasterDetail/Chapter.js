import { useMasterDetailContext } from './MasterDetail';
import './MasterDetail.css';

export default function Chapter({ title, component }) {
  const { selectedTitle, selectChapter } = useMasterDetailContext();
  const isSelected = selectedTitle === title;
  const className = `master-button ${isSelected ? 'selected' : ''}`;

  const handleClick = () => {
    if (isSelected) {
      selectChapter(null, null);
    } else {
      selectChapter(title, component);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}
