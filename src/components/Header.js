import React from 'react'
import ActivityAndToolBar from './HeaderComponents/ActivityAndToolBar'
import ProfileMenu from './HeaderComponents/ProfileMenu'
import SearchBar from './HeaderComponents/SearchBar'
import './HeaderComponents/Header.css'

function Header() {
    return (
        <div className="Header">
            <ActivityAndToolBar/>
            <SearchBar/>
            <ProfileMenu/>
        </div>
    )
}

export default Header
