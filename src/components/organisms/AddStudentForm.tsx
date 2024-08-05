import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const AddStudentForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [instance, setInstance] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.random(),
      name,
      email,
      phone,
      instance,
      createdAt: new Date().toLocaleDateString(),
    };
    onSave(newStudent);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add New Student</h2>
        <button type="button" className="text-gray-500 hover:text-gray-700" onClick={() => onSave(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input label="Instance" type="text" value={instance} onChange={(e) => setInstance(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input label="Re-type Password" type="password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-gray-700">Add image</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 12l-5-5m5 5l5-5m-5 5V4m5 12V4m0 12l5-5m-5 5l-5-5m0 0V4" />
              </svg>
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max, 800 X 800px)</p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" className="mt-4">Save</Button>
      </div>
    </form>
  );
};

export default AddStudentForm;
