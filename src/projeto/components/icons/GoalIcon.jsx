import React from 'react';

function GoalIcon({ active, colors }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={active ? colors.primary : colors.text2}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <circle cx={`12`} cy={`12`} r={`10`} />
      <circle cx={`12`} cy={`12`} r={`6`} />
      <circle cx={`12`} cy={`12`} r={`2`} />
    </svg>
  );
}

export default GoalIcon;
