import { createContext, useContext, useReducer } from 'react';

import { initialState } from './initialState';
import { contactsReducer } from './contactsReducer';

const ContactsContext = createContext();

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(
      'Contacts context can be accessed only under ContactsProvider'
    );
  }
  return context;
}

export function ContactsProvider({ children }) {
  const value = useReducer(contactsReducer, initialState);

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
