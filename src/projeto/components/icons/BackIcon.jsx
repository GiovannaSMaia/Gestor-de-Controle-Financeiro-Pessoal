import React from 'react';

function BackIcon({ colors }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={colors.text}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <polyline points={`15 18 9 12 15 6`} />
    </svg>
  );
}

export default BackIcon;
