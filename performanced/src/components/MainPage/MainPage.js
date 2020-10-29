import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Header from '../Header'
import ViewPage from '../../pages/ViewPage'
import AboutPage from '../../pages/AboutPage'
import PhotosPage from '../../pages/PhotosPage'
import MyCV from '../../pages/MyCV'

import classes from './MainPage.module.scss'

const MainPage = () => {

    const { MainPage } = classes

    return (
        <div className={MainPage}>

            <Header />            
            
            <Switch>
                <Route exact path='/' component={ViewPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/photos' component={PhotosPage} />
                <Route path='/mycv' component={MyCV} />

                <Redirect to='/' />
            </Switch>
        </div >
    )
}

export default MainPage