import React from 'react'
import EmployeeChart from '../components/DashboardComponent/EmployeeChart'
import PieChart from '../components/DashboardComponent/PieChart'
import EmployeeRatio from '../components/DashboardComponent/EmployeeRatioChart'

const Dashboard = () => {
    return( <div className='dark:text-white'>
        
        <div className="flex space-x-4">
  <PieChart />
  <EmployeeRatio />
</div>
        <EmployeeChart/>
    </div>
    )
}

export default Dashboard
