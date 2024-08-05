import React, { useEffect, useState } from 'react';
import StudentList from '../components/organisms/StudentList';
import AddStudentForm from '../components/organisms/AddStudentForm';
import studentsData from '../data/student';
import Button from '../components/atoms/Button';

const StudentsPage = () => {
  const [students, setStudents] = useState(studentsData);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
    setEditingStudent(null); // Close the form after adding the student
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };


  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={() => setEditingStudent({})}>+ Add User</Button>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2"
          />
          <button className="p-2 border rounded bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <StudentList
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
      {editingStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <AddStudentForm onSave={handleAddStudent} />
            <button
              onClick={() => setEditingStudent(null)}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
