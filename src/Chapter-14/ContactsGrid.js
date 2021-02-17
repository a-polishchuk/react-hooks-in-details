import { useContacts, Types } from './ContactsContext';
import './ContactsGrid.css';

function ContactTile({ contact, selected, onClick }) {
  const { firstName, lastName, phone } = contact;
  const src = `https://cataas.com/cat?${firstName}${lastName}`;
  const containerClass = `contacts-tile ${selected ? 'contacts-selected' : ''}`;

  return (
    <div className={containerClass} onClick={onClick}>
      <img src={src} className="contacts-tile-img" alt="Contact avatar" />
      <div>
        {firstName} {lastName}
      </div>
      <div>{phone}</div>
    </div>
  );
}

export function ContactsGrid() {
  const [state, dispatch] = useContacts();
  const { contacts, selectedId } = state;

  const selectContact = (id) => {
    dispatch({
      type: Types.SELECT,
      payload: { id },
    });
  };

  return (
    <div className="contacts-grid">
      {contacts.map((contact) => (
        <ContactTile
          key={contact.id}
          contact={contact}
          selected={selectedId === contact.id}
          onClick={() => selectContact(contact.id)}
        />
      ))}
    </div>
  );
}
