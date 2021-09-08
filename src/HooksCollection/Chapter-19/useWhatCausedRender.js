import { useEffect, useRef } from 'react';

export function useWhatCausedRender(name, props) {
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
    changes.forEach((change) => {
      const { key, from, to } = change;
      console.log(`  ${key}: ${from} => ${to}`);
    });

    prevPropsRef.current = props;
  });
}
