import React from 'react';

const Button = ({ children, onClick, className }: any) => {
  return (
    <button
      className={`py-2 px-4 bg-red-700 text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
