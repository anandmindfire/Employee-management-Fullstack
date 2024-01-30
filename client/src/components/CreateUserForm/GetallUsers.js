import React, { useState, useEffect } from 'react';
import { GetUsers } from '../../API/GetUsers';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const usersData = await GetUsers(jwtToken);
        setUsers([...usersData]);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="dark:text-white">
    <h2 className="text-2xl font-bold mb-4">All Users</h2>
    {users.length === 0 ? (
      <p>No users found.</p>
    ) : (
        <div className="flex overflow-x-auto space-x-8 w-65 ">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Last Login</th>
              <th className="py-2 px-4 text-left">Login Count</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-100 transition duration-300">
                <td className="py-2 px-4 max-w-xs overflow-hidden">{user.username}</td>
                <td className="py-2 px-4 max-w-xs overflow-hidden">{user.email}</td>
                <td className="py-2 px-4 max-w-xs overflow-hidden">{user.role}</td>
                <td className="py-2 px-4 max-w-xs overflow-hidden">{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}</td>
                <td className="py-2 px-4 max-w-xs overflow-hidden">{user.loginCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  
  );
};

export default AllUsers;
