import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const EmployeeRatio =({ employeeData ,userData })=> {
  const [TotalempData, setTotalempData] = useState(0);
  const [TotaluserData, setTotaluserData] = useState(0);

  // console.log(userData);
  useEffect(() => {
    // Check if employeeData and userData are not undefined
    if (employeeData && userData) {
      // Calculate total employee data
      const totalEmployee = employeeData.TotalEmployee || 0;
      setTotalempData(totalEmployee);
  
      // Calculate total user data
      const totalUser = userData.length || 0;
      setTotaluserData(totalUser);
    }
  }, [employeeData, userData]);
var ChartOptions = {
    series: [TotalempData, TotaluserData],
    chart: {
      type: 'donut',
    },
    labels:  ['Total Employees', 'Total Users'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  
  return (
    <div id="ratiopiechart">
      <ApexCharts options={ChartOptions} series={ChartOptions.series} type="donut" width={380} />
    </div>
  );
};

export default EmployeeRatio;
