import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  contacts: [
    {
      id: uuidv4(),
      name: 'Tiger',
      phone: '555-123-123',
    },
    {
      id: uuidv4(),
      name: 'Sam',
      phone: '555-123-123',
    },
    {
      id: uuidv4(),
      name: 'Misty',
      phone: '555-555-444',
    },
    {
      id: uuidv4(),
      name: 'Simba',
      phone: '555-678-910',
    },
  ],
  selectedId: null,
};
