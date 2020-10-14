import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Header from '../Header'
import ViewPage from '../ViewPage'
import AboutPage from '../AboutPage'
import PhotosPage from '../PhotosPage'
import MyCV from '../MyCV/MyCV'

import classes from './MainPage.module.scss'

const MainPage = () => {

    const { MainPage } = classes

    return (
        <div className={MainPage}>

            <Header />

            <Route exact path='/' component={ViewPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/photos' component={PhotosPage} />
            <Route path='/mycv' component={MyCV} />

            <Redirect to='/' />

        </div>
    )
}

export default MainPage