import React,{useState,useEffect} from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart =({ employeeData }) => {
    const [TotalEmployee, setTotalEmployee] = useState(0);
    useEffect(() => {
        if (employeeData && employeeData.TotalEmployee) {
          // Extract total employee and set it in state
          setTotalEmployee(employeeData.TotalEmployee);
        }
      }, [employeeData]);
    //   console.log(TotalEmployee);

  const options = {
    series: [TotalEmployee],
    chart: {
      height: 250,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Total Employees'],
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="radialBar" height={250} />
    </div>
  );
};

export default RadialBarChart;
