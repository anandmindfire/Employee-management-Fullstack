import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUser = localStorage.getItem('user');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    console.log(currentUser);

    // Check if user is authenticated
    if (!currentUser) {
      // Redirect to login page or handle unauthenticated user
      console.error('User not authenticated');
      return;
    }

    // Fetch the single user profile based on the user ID
    const fetchUserProfile = async () => {
      try {
        const jwtToken = localStorage.getItem('token');

        const response = await axios.get(`http://localhost:5000/api/v1/auth/users/${currentUser._id}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Error loading user profile</p>;
  }

  return (
    <div className="dark:text-white">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden my-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="mb-4">
            <strong>User ID:</strong> {user._id}
          </div>
          <div className="mb-4">
            <strong>Username:</strong> {user.username}
          </div>
          <div className="mb-4">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="mb-4">
            <strong>Role:</strong> {user.role}
          </div>
          <div className="mb-4">
            <strong>Last Login:</strong> {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}
          </div>
          <div className="mb-4">
            <strong>Login Count:</strong> {user.loginCount}
          </div>
          {/* Display other user profile information as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
