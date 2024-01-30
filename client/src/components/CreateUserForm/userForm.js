import React, { useState } from "react";
import postUser from "../../API/PostUser";

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postUser(formData);
      console.log("User created successfully!");
      window.location.reload();
      
    } catch (error) {
      // Handle the error, display a message, etc.
      console.error("Error creating user:", error);
    }
  }; 

  return (
    <div>
  
  <form onSubmit={handleSubmit} className="max-w-md shadow-lg p-4">
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-gray-600">
        Username:
      </label>
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />
    </div>
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Create User
      </button>
    </div>
  </form>
</div>

  );
};

export default UserForm;
