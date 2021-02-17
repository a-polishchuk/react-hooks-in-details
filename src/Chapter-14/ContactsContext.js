import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      firstName: 'John',
      lastName: 'Smith',
      phone: '555-123-123',
    },
    {
      id: uuidv4(),
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '555-123-123',
    },
    {
      id: uuidv4(),
      firstName: 'Jack',
      lastName: 'Sparrow',
      phone: '555-555-444',
    },
    {
      id: uuidv4(),
      firstName: 'Fluffy',
      lastName: 'White',
      phone: '555-678-910',
    },
  ],
  selectedId: null,
};

export const Types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  SELECT: 'SELECT',
  ROLLBACK: 'ROLLBACK',
};

function contactsReducer(state, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case Types.REMOVE:
      const idToRemove = action.payload.id;
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== idToRemove),
        selectedId: idToRemove === state.selectedId ? null : state.selectedId,
      };
    case Types.SELECT:
      return {
        ...state,
        selectedId: action.payload.id,
      };
    case Types.ROLLBACK:
      return initialState;
    default:
      return state;
  }
}

const ContactsContext = createContext();

export function ContactsProvider(props) {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return <ContactsContext.Provider value={[state, dispatch]} {...props} />;
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(
      'Contacts context can be accessed only under ContactsProvider'
    );
  }
  return context;
}
