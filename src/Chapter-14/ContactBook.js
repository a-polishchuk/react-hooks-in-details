import { ContactsProvider } from './ContactsContext';
import { ContactsGrid } from './ContactsGrid';
import { ContactsToolbar } from './ContactsToolbar';

export default function ContactBook() {
  return (
    <ContactsProvider>
      <ContactsGrid />
      <ContactsToolbar />
    </ContactsProvider>
  );
}
