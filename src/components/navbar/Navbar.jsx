import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-lg font-bold tracking-wide">
          Student Dashboard
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/dashboard"
            className="hover:text-blue-200 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/add-student"
            className="hover:text-blue-200 transition-colors"
          >
            Add Student
          </Link>
          <Link
            to="/analytics"
            className="hover:text-blue-200 transition-colors"
          >
            Analytics
          </Link>

          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 font-semibold px-3 py-1 rounded-lg hover:bg-blue-100 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
