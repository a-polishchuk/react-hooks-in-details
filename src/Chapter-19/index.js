import { useEffect, useState, useRef } from 'react';

function useWhatCausedUpdate(name, props) {
  const prevPropsRef = useRef({});
  useEffect(() => {
    const changes = [];
    const prevProps = prevPropsRef.current;
    const keySet = new Set([...Object.keys(prevProps), ...Object.keys(props)]);
    keySet.forEach((key) => {
      if (prevProps[key] !== props[key]) {
        changes.push({
          key,
          from: prevProps[key],
          to: props[key],
        });
      }
    });
    console.log(`[${name}] rerendered because of:`);
    console.table(changes);
    prevPropsRef.current = props;
  }); // no deps list, will be invoked after each rerender
}

export default function Chapter19() {
  return (
    <>
      <h2>Chapter 19: useWhatCausedUpdate</h2>
    </>
  );
}
