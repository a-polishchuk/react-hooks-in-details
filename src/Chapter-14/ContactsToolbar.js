import { useContacts, Types } from './ContactsContext';

export function ContactsToolbar() {
  const [state, dispatch] = useContacts();
  const { selectedId } = state;

  const removeSelected = () => {
    dispatch({
      type: Types.REMOVE,
      payload: { id: selectedId },
    });
  };

  const rollbackChanges = () => {
    dispatch({
      type: Types.ROLLBACK,
    });
  };

  const buttonStyle = {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    border: 'cadetblue 1px solid',
    borderRadius: 6,
  };

  return (
    <div>
      {selectedId ? (
        <button style={buttonStyle} onClick={removeSelected}>
          REMOVE SELECTED
        </button>
      ) : null}
      <button style={buttonStyle} onClick={rollbackChanges}>
        ROLLBACK CHANGES
      </button>
    </div>
  );
}
