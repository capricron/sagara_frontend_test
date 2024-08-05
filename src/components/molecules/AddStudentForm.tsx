import React from 'react';
import { TextInput } from '../atoms/TextInput';
import PrimaryButton from '../atoms/PrimaryButton';

export const AddStudentForm = ({ onSubmit }: any) => {
  const [form, setForm] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    instance: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Full Name" value={form.fullName} onChange={handleChange} name="fullName" />
      <TextInput label="Email" value={form.email} onChange={handleChange} name="email" />
      <TextInput label="Phone Number" value={form.phoneNumber} onChange={handleChange} name="phoneNumber" />
      <TextInput label="Instance" value={form.instance} onChange={handleChange} name="instance" />
      <TextInput label="Password" value={form.password} onChange={handleChange} name="password" />
      <TextInput label="Confirm Password" value={form.confirmPassword} onChange={handleChange} name="confirmPassword" />
      <PrimaryButton type="submit">Add Student</PrimaryButton>
    </form>
  );
};
