import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Button from './Button';

export default function DomManipulation() {
  const [id, setId] = useState(() => uuid());
  const [color, setColor] = useState('black');
  const divRef = useRef();

  const updateDomManually = () => {
    divRef.current.textContent = uuid();
  };

  const relatedUpdate = () => {
    setId(uuid());
  };

  const unrelatedUpdate = () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <>
      <h2>Direct DOM manipulation</h2>
      <div ref={divRef} style={{ color }}>
        {id}
      </div>
      <Button text="Update DOM manually" onClick={updateDomManually} />
      <Button text="Related React update" onClick={relatedUpdate} />
      <Button text="Unrelated React update" onClick={unrelatedUpdate} />
    </>
  );
}
