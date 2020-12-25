import React from 'react'
import Header from './Header'
import './DashboardComponents/Dashboard.css'
import RenderScreen from './DashboardComponents/RenderScreen'

function Dashboard() {
    return (
        <div className="Dashboard">
            <Header />
            <RenderScreen/>
        </div>
    )
}

export default Dashboard
