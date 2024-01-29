import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const EmployeeRatio = () => {
  const [RatioData, setRatioData] = useState({
    series: [10, 5],
    labels: ['Total Employees', 'Total Users'],
  });

//   useEffect(() => {
//     // Fetch chart data from your API
//     axios.get('YOUR_API_ENDPOINT')  // Replace with your API endpoint
//       .then(response => {
//         // Assuming your API response has a data field containing chart details
//         setChartData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching chart data:', error);
//       });
//   }, []);

var ChartOptions = {
    series: RatioData.series,
    chart: {
      type: 'donut',
    },
    labels: RatioData.labels, // Add labels here
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
      <ApexCharts options={ChartOptions} series={RatioData.series} type="donut" width={380} />
    </div>
  );
};

export default EmployeeRatio;
