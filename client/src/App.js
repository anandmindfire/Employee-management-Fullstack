import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import UserDashboard from "./pages/User/UserDashboard";
import UserProfile from "./pages/User/UserProfile";
import CreateEmployee from "./pages/User/CreateEmployee";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ForbiddenPage from "./pages/ForbiddenPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/restricted" element={<ForbiddenPage/>} />
      </Routes>

      {/* Routes for User */}
      <Routes>
      
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={['user']}>
            <UserLayout>
                <Routes>
              <Route path="/dashboard"element={<UserDashboard />} />
              <Route path="/create" element={<CreateEmployee />} />
              <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </UserLayout>
            </ProtectedRoute>
          }
        />
         
      </Routes>

      {/* Routes for User */}
      <Routes>
     
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/course" element={<Course />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
