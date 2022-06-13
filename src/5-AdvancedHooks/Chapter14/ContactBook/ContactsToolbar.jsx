import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';

import { useContacts } from './ContactsContext';
import { Types } from './contactsReducer';

export function ContactsToolbar() {
  const [state, dispatch] = useContacts();
  const { selectedId } = state;

  const add = () => dispatch({ type: Types.ADD });

  const removeSelected = () =>
    dispatch({
      type: Types.REMOVE,
      payload: { id: selectedId },
    });

  const rollbackChanges = () =>
    dispatch({
      type: Types.ROLLBACK,
    });

  return (
    <Toolbar>
      <Button text="Add" onClick={add} />
      {selectedId && <Button text="Remove" onClick={removeSelected} />}
      <Button text="Rollback changes" onClick={rollbackChanges} />
    </Toolbar>
  );
}
