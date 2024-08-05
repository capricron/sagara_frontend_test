import React from 'react';
import trash from "../../assets/trash.png"
import edit from "../../assets/edit.png"

const StudentRow = ({ student, onEdit, onDelete }: any) => {
  return (
<div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4 w-1/4">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full" />
        <div className="flex flex-col">
          <span className="font-semibold">{student.name}</span>
        </div>
      </div>
      <span className="flex-1 text-center">{student.email}</span>
      <span className="flex-1 text-center">{student.phone}</span>
      <span className="flex-1 text-center">{student.instance}</span>
      <span className="flex-1 text-center">{student.createdAt}</span>
      <div className="flex items-center space-x-4">
      <button onClick={() => onDelete(student.id)} className="text-red-500">
        <img src={trash.src} alt="trash icon" />
      </button>
      <button onClick={() => onEdit(student)} className="text-yellow-500">
        <img src={edit.src} alt="edit icon" />
      </button>
      </div>
    </div>
  );
};

export default StudentRow;

