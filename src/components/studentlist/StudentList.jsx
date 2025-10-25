import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { getStudent } from "../../utils/api";

function StudentList() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const s = getStudent(id);
    if (s) setStudent(s);
  }, [id]);

  if (!student)
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-gray-600 text-lg">Loading student details...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Details
        </h2>

        <div className="space-y-4">
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-600">Name:</span>{" "}
            {student.name}
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            {student.email}
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-600">Course:</span>{" "}
            {student.course}
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-600">Marks:</span>{" "}
            {student.marks}
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold text-gray-600">Attendance:</span>{" "}
            {student.attendance}%
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default StudentList;
