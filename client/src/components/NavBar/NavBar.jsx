import style from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
    return (
        <div className={style.nav}>
        {/* <div className={style.nav}> */}
            <Link to='/home'>
                {/* <button className={style.boton}>Home</button> */}
                <button>Home</button>
            </Link>
            <Link to='/activities'>
                {/* <button className={style.boton}>Activity</button> */}
                <button>Create Activity</button>
            </Link>
            <SearchBar />
        </div>
    )
} 

export default NavBar;