export function ReactLogo({ color = '#61dafb', size, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.232 23 20.463"
      with={size}
      height={size}
      style={style}
    >
      <circle r={2.05} fill={color} />
      <g stroke={color} fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
}
