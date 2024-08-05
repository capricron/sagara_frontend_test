import React from 'react';

export const TextInput = ({ label, value, onChange, name }: any) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input 
      type="text" 
      name={name} 
      value={value} 
      onChange={onChange} 
      className="w-full px-3 py-2 border border-gray-300 rounded" 
    />
  </div>
);
