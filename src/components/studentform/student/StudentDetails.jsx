import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { getStudent } from "../../utils/api"

  const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
      const data = getStudent(id);
      setStudent(data);
  }, [id]);

  if (!student)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading student details...
      </div>
    );

  return (
    
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Student Details
        </h2>
        <p className="text-gray-700"><b>Name:</b> {student.name}</p>
        <p className="text-gray-700"><b>Email:</b> {student.email}</p>
        <p className="text-gray-700"><b>Course:</b> {student.course}</p>
        <p className="text-gray-700"><b>Marks:</b> {student.marks}</p>
        <p className="text-gray-700"><b>Attendance:</b> {student.attendance}%</p>
      </div>
    </div>
  )
}

export default StudentDetails;

