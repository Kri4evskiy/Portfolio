import React, { Component } from 'react'

import classes from './MainPage.module.scss'

export default class MainPage extends Component {
    render() {
        const { MainPage } = classes
        return (
            <h1 className={MainPage}>MainPage</h1>
        )
    }
}