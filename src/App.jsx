import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/loginform/LoginForm"
import Dashboard from "./pages/dashboard/Dashboard";
import AddStudent from "./components/studentform/StudentForm"
import Analytics from "./components/analytics/Analytics"

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          />
          <Route
             path="/add-student"
             element={
              <PrivateRoute>
              <AddStudent/>
              </PrivateRoute>
          }
         />
         <Route
            path="/edit-student/:id"
            element={
               <PrivateRoute>
               <AddStudent />
              </PrivateRoute>
          }
       />
        <Route
            path="/analytics"
            element={
              <PrivateRoute>
              <Analytics />
             </PrivateRoute>
         }
         />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

