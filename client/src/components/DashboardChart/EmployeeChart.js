import React from 'react';
import ApexCharts from 'react-apexcharts';

const EmployeeChart = ({ employeeData ,userData}) => {
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
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={300} />
    </div>
  );
};

export default EmployeeChart;
