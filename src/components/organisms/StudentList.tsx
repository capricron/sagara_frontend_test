import React, { useState } from 'react';
import StudentRow from '../molecules/StudentRow';

const StudentList = ({ students, onEdit, onDelete }: any) => {
  return (
    <div>
    <div className="flex items-center justify-between p-4 border-b bg-gray-200">
      <div className="flex items-center space-x-4 w-1/4">
        <span className="font-semibold">Name</span>
      </div>
      <span className="flex-1 text-center font-semibold">Email</span>
      <span className="flex-1 text-center font-semibold">Phone Number</span>
      <span className="flex-1 text-center font-semibold">Instance</span>
      <span className="flex-1 text-center font-semibold">Created At</span>
      <span className="flex-1 text-center font-semibold">Actions</span>
    </div>
    {students.map((student) => (
      <StudentRow
        key={student.id}
        student={student}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
  );
};

export default StudentList;
