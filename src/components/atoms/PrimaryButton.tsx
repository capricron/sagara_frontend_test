import React from 'react';

const PrimaryButton = ({ children, onClick }: any) => (
  <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onClick}>
    {children}
  </button>
);

export default PrimaryButton