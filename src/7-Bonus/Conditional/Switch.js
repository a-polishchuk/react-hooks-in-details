import { Children } from 'react';

export function Case({ children }) {
  return children;
}

export function DefaultCase({ children }) {
  return children;
}
DefaultCase.displayName = 'DefaultCase';

export function Switch({ value, children }) {
  const childrenArray = Children.toArray(children);

  const filteredChildren = childrenArray.filter((child) => {
    if (child.props.value === value) {
      return true;
    }
    if (child.props.condition?.(value) === true) {
      return true;
    }
    return false;
  });

  if (filteredChildren.length > 0) {
    return filteredChildren;
  }

  const defaultCase = childrenArray.find(
    (child) => child.type.displayName === DefaultCase.displayName
  );
  return defaultCase?.props.children || null;
}
