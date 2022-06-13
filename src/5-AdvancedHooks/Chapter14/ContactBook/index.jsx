import { ContactsProvider } from './ContactsContext';
import { ContactsList } from './ContactsList';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactBook() {
  return (
    <>
      <h2>Chapter 14. useReducer</h2>
      <h3>useContext + useReducer</h3>

      <ContactsProvider>
        <ContactsList />
        <ContactsToolbar />
      </ContactsProvider>
    </>
  );
}
