export const AlienSvg = ({
  width,
  height,
  eyesColor = '#242424',
  mouthColor = '#242424',
  fillColor = '#ccd6dd',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.5 47.5"
      style={{
        enableBackground: 'new 0 0 47.5 47.5',
      }}
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          d="M0 0c0-9.389-13.223-19-17-19-3.778 0-17 9.611-17 19s7.611 17 17 17S0 9.389 0 0"
          style={{
            fill: fillColor,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          transform="translate(36 20)"
        />
        <path
          d="M0 0c3.124-3.124 4.39-6.923 2.828-8.485-1.561-1.562-5.361-.297-8.485 2.828-3.125 3.124-4.391 6.923-2.828 8.485C-6.923 4.39-3.124 3.125 0 0"
          style={{
            fill: eyesColor,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          transform="translate(14.503 22.155)"
        />
        <path
          d="M0 0c-3.124-3.124-4.39-6.923-2.828-8.485 1.561-1.563 5.361-.297 8.485 2.828 3.125 3.125 4.391 6.923 2.828 8.485C6.923 4.39 3.124 3.125 0 0"
          style={{
            fill: eyesColor,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          transform="translate(23.497 22.155)"
        />
        <path
          d="M0 0c-2.347 0-3.575 1.16-3.707 1.293a.999.999 0 0 0 1.404 1.424C-2.251 2.67-1.497 2 0 2c1.519 0 2.273.689 2.305.719a1.006 1.006 0 0 0 1.408-.03.993.993 0 0 0-.006-1.396C3.575 1.16 2.347 0 0 0"
          style={{
            fill: mouthColor,
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
          }}
          transform="translate(19 6)"
        />
      </g>
    </svg>
  );
};
