import { ContactRow } from './ContactRow';
import { useContacts } from './ContactsContext';
import './ContactsGrid.css';

export function ContactsList() {
  const [state] = useContacts();
  const { contacts } = state;

  return (
    <div className="contacts-list">
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
