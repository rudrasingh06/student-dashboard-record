import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { getStudents } from "../../utils/api";

const Analytics = () => {
  const [avgMarks, setAvgMarks] = useState(0);
  const [avgAttendance, setAvgAttendance] = useState(0);

  useEffect(() => {
    const students = getStudents();
    if (students.length > 0) {
      setAvgMarks(
        students.reduce((sum, s) => sum + Number(s.marks || 0), 0) /
          students.length
      );
      setAvgAttendance(
        students.reduce((sum, s) => sum + Number(s.attendance || 0), 0) /
          students.length
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">📊 Analytics</h2>
          <div className="space-y-4 text-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-700">Average Marks:</span>{" "}
              {avgMarks.toFixed(2)}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-blue-700">Average Attendance:</span>{" "}
              {avgAttendance.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
