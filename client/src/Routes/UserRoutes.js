// UserRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../components/Layout/UserLayout";
import UserDashboard from "../pages/User/UserDashboard";
import CreateEmployee from "../pages/User/CreateEmployee";
import Profile from "../pages/Profile/Profile";


const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserLayout>
  );
};

export default UserRoutes;
