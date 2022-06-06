import { useState } from 'react';

import { useContacts } from './ContactsContext';
import { Types } from './contactsReducer';
import './ContactsGrid.css';

function buildStyle(selected) {
  return {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    border: selected ? '2px solid #cccccc' : '2px dotted #cccccc',
    boxShadow: selected ? '3px 3px 0px 0px #eadff9' : '',
  };
}

export function ContactRow({ contact }) {
  const { name, phone } = contact;
  const avatarUrl = `https://cataas.com/cat?${name}`;

  const [state, dispatch] = useContacts();
  const { selectedId } = state;
  const isSelected = contact.id === selectedId;

  const [isEditingName, setEditingName] = useState(false);
  const [isEditingPhone, setEditingPhone] = useState(false);

  const select = () =>
    dispatch({
      type: Types.SELECT,
      payload: { id: contact.id },
    });

  const startEditingName = () => setEditingName(true);
  const stopEditingName = () => setEditingName(false);
  const editName = (event) =>
    dispatch({
      type: Types.EDIT,
      payload: {
        ...contact,
        name: event.target.value,
      },
    });

  const startEditingPhone = () => setEditingPhone(true);
  const stopEditingPhone = () => setEditingPhone(false);
  const editPhone = (event) =>
    dispatch({
      type: Types.EDIT,
      payload: {
        ...contact,
        phone: event.target.value,
      },
    });

  return (
    <div style={buildStyle(isSelected)} onClick={select}>
      <img src={avatarUrl} className="contacts-avatar" alt="Contact avatar" />
      <div className="contact-fields-wrapper">
        <div className="contact-field">
          <span className="contact-emoji" onClick={startEditingName}>
            🐱
          </span>
          {isEditingName ? (
            <input
              autoFocus
              type="text"
              value={name}
              onChange={editName}
              onBlur={stopEditingName}
            />
          ) : (
            <span onClick={startEditingName}>{name}</span>
          )}
        </div>
        <div className="contact-field">
          <span className="contact-emoji" onClick={startEditingPhone}>
            ☎️
          </span>
          {isEditingPhone ? (
            <input
              autoFocus
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phone}
              onChange={editPhone}
              onBlur={stopEditingPhone}
            />
          ) : (
            <span onClick={startEditingPhone}>{phone}</span>
          )}
        </div>
      </div>
    </div>
  );
}
