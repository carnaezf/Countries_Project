import style from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className={style.nav}>
                <ul>
                <li><Link to='/home'> Home</Link></li>
                <li><Link to='/activities'>Create Activity</Link></li>
            </ul>
        </div>
    )




} 

export default NavBar;