import React from 'react'
import Logo from './SidebarComponents/Logo.png'
import NavBar from './SidebarComponents/NavBar'
import './SidebarComponents/Sidebar.css'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={Logo} alt='logo' className="logo" />
            <NavBar />
        </div>
    )
}

export default Sidebar
