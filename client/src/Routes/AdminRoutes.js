// AdminRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/Layout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";
import CreateUser from "../pages/Admin/CreateUser";
import Profile from "../pages/Profile/Profile";


const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
