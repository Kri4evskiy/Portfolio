import React, { Component } from 'react'
import LogoName from '../LogoName/LogoName'
import NavBar from '../NavBar'

import classes from './Header.module.scss'

export default class Header extends Component {
    render() {
        const { Header } = classes
        return (
            <div className={Header}>
                <LogoName />
                <NavBar />
            </div>
        )
    }
}