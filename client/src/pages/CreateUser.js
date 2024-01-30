import React from "react";
import UserForm from "../components/CreateUserForm/userForm";
import AllUsers from "../components/CreateUserForm/GetallUsers";

const CreateUser = () => {
  
  return (
    <div className="center dark:text-white ">
        <div className="flex flex-col sm:flex-row space-x-4">
        <UserForm />
        <AllUsers/>
        </div>
 </div>

  );
};

export default CreateUser;
