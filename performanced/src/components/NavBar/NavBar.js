import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavBar.module.scss'

const NavBar = () => {

    const { NavBar, activeLink } = classes

    return (
        <div className={NavBar}>
            <ul >

                <li><NavLink to='/about' activeClassName={activeLink}>About Me</NavLink></li>
                <li><NavLink to='/photos' activeClassName={activeLink}>My photos</NavLink></li>
                <li><NavLink to='/mycv' activeClassName={activeLink}>My CV</NavLink></li>

            </ul>
        </div>
    )
}

export default NavBar