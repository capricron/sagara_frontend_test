import React from 'react';

const Input = ({ label, type, value, onChange, className }: any) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-2 text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded p-2"
      />
    </div>
  );
};

export default Input;
