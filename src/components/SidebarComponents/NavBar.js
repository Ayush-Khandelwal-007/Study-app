import React from 'react'
import { FaPencilRuler } from 'react-icons/fa';
import { FcPositiveDynamic } from 'react-icons/fc';
import { GiPapers, GiBullseye } from 'react-icons/gi';
import { MdAssignment } from 'react-icons/md';
import { RiFilePaperFill } from 'react-icons/ri';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SpeedIcon from '@material-ui/icons/Speed';
import {ImBooks} from 'react-icons/im'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FunctionsIcon from '@material-ui/icons/Functions';

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='ToolHeading'><span className='ToolLogo'><FaPencilRuler /></span>Tools</div>
            <div className='ToolList'>
                <ul className="NavList">
                    <li><DashboardIcon /> Dashboard</li>
                    <li><GiPapers /> Backlog Remover</li>
                    <li><FcPositiveDynamic /> Rank Up</li>
                    <li><SpeedIcon /> Speed Up</li>
                    <li id='Active'><GiBullseye /> Accuracy Up</li>
                    <li><AutorenewIcon /> Revision</li>
                    <li><RiFilePaperFill /> Test Creator</li>
                    <li><MdAssignment /> Assignment Creator</li>
                    <li><ImBooks /> Study Material</li>
                    <li><FunctionsIcon /> Formula Sheet</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
