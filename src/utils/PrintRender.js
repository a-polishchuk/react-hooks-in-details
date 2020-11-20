import React from 'react';

export function PrintRender({ id }) {
  console.log(`Render ${id}`);

  return <div>Print Render [{id}]</div>;
}
