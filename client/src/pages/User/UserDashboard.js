import React, { useEffect, useState } from "react";
import EmployeeChart from "../../components/DashboardChart/EmployeeChart";
import PieChart from "../../components/DashboardChart/PieChart";
// import DataMap from "../../components/DashboardChart/HeatMap";
import RadialBarChart from "../../components/DashboardChart/TotalEmployeeChart";
import { fetchEmployeeData } from "../../API/GetEmployees";
import { GetUsers } from "../../API/GetUsers";

const Dashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [userData, setUserData] = useState([]);
  

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const employees = await fetchEmployeeData(jwtToken);
        const users = await GetUsers(jwtToken);
        setEmployeeData(employees);
        setUserData([...users]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="dark:text-white">
      <div className="flex space-x-4">
        {/* Pass employeeData as a prop to each chart component */}
        <PieChart userData={userData}/>
        
        <RadialBarChart employeeData={employeeData} />
      </div>
      {/* Pass employeeData as a prop to EmployeeChart component */}
      <EmployeeChart employeeData={employeeData} userData={userData}/>
    </div>
  );
};

export default Dashboard;
