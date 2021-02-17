import { ContactsProvider } from './ContactsContext';
import { ContactsGrid } from './ContactsGrid';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactBook() {
  return (
    <ContactsProvider>
      <ContactsGrid />
      <ContactsToolbar />
    </ContactsProvider>
  );
}
