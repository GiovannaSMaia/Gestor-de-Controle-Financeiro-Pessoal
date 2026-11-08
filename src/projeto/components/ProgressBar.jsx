import React from 'react';

function ProgressBar({ pct, color }) {
  return (
    <div
      style={{
        height: 8,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.25)',
        overflow: `hidden`
      }}
    >
      <div
        style={{
          width: `${Math.min(pct, 100)}%`,
          height: `100%`,
          borderRadius: 4,
          background: color,
          transition: `width 0.5s ease`
        }}
      />
    </div>
  );
}

export default ProgressBar;
