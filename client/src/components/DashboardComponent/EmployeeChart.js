import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const EmployeeChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch employee data from your API with JWT token
    const jwtToken = localStorage.getItem('token');  // Assuming you stored the JWT token in localStorage

    axios.get('http://localhost:5000/api/v1/table/employees?page=1&limit=7&sortBy=fullname&order=asc', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then(response => {
        // Assuming your API response has a data field containing employee details
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  console.log(employeeData)
  //console.log(employeeData.TotalEmployee)
  // Prepare data for chart
  //const categories = employeeData.map(employees => employees.fullname);
  //const data = employeeData.map(employee => employee.yourNumericDataField); // Replace with actual field

  const chartOptions = {
    chart: {
        type: 'bar'
      },
      series: [{
        name: 'employees',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
    
    // Add other chart options here
  

  return (
    <div id="barChart">
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={350} />
    </div>
  );
};

export default EmployeeChart;
