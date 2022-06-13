import { v4 as uuidv4 } from 'uuid';

import { initialState } from './initialState';

export const Types = {
  ADD: 'ADD',
  SELECT: 'SELECT',
  EDIT: 'EDIT',
  REMOVE: 'REMOVE',
  ROLLBACK: 'ROLLBACK',
};

export function contactsReducer(state, action) {
  switch (action.type) {
    case Types.ADD:
      return add(state, action);
    case Types.SELECT:
      return select(state, action);
    case Types.EDIT:
      return edit(state, action);
    case Types.REMOVE:
      return remove(state, action);
    case Types.ROLLBACK:
      return initialState;
    default:
      console.log(`action type ${action.type} was not recognized`);
      return state;
  }
}

function add(state) {
  const newContact = {
    id: uuidv4(),
    name: 'name',
    phone: 'phone',
  };
  return {
    ...state,
    contacts: [...state.contacts, newContact],
  };
}

function edit(state, action) {
  const contacts = [...state.contacts];
  const index = contacts.findIndex((c) => c.id === action.payload.id);
  contacts[index] = action.payload;
  return {
    ...state,
    contacts,
  };
}

function remove(state, action) {
  const idToRemove = action.payload.id;
  return {
    ...state,
    contacts: state.contacts.filter((c) => c.id !== idToRemove),
    selectedId: idToRemove === state.selectedId ? null : state.selectedId,
  };
}

function select(state, action) {
  return {
    ...state,
    selectedId: action.payload.id,
  };
}
