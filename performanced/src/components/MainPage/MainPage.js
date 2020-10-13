import React, { Component } from 'react'
import Header from '../Header'
import { Route } from 'react-router-dom'

import classes from './MainPage.module.scss'
import AboutPage from '../AboutPage'
import PhotosPage from '../PhotosPage'
import MyCV from '../MyCV/MyCV'

export default class MainPage extends Component {
    render() {
        const { MainPage } = classes
        return (
            <div className={MainPage}>
                
                    <Header />

                    <Route path='/about' component={AboutPage} />
                    <Route path='/photos' component={PhotosPage} />
                    <Route path='/mycv' component={MyCV} />
            </div>
        )
    }
}