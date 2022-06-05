import { getRandomColor } from 'utils/getRandomColor';

import './index.css';

export function ColoredBlock({ children, style, ...props }) {
  return (
    <div
      className="colored-block"
      style={{
        backgroundColor: getRandomColor(),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
