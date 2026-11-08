import React from 'react';

function Card({ children, colors, style = {} }) {
  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: 20,
        border: `1px solid ${colors.border}`,
        padding: `24px 28px`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.02)',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default Card;
