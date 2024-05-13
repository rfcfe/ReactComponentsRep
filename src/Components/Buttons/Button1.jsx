import React from 'react';

function Button1({ onClick, type, style, disabled, children }) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button1;
