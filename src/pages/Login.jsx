// pages/Login.jsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginUp from '../components/LoginUp';
import SignUp from '../components/SignUp';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Login;
