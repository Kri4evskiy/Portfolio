import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Header from '../Header'
import ViewPage from '../../pages/ViewPage'
import AboutPage from '../../pages/AboutPage'
import PhotosPage from '../../pages/PhotosPage'
import MyCV from '../../pages/MyCV'

import classes from './MainPage.module.scss'
import Switch from 'react-bootstrap/esm/Switch'
import Alert from '../Alert/Alert'

const MainPage = () => {

    const { MainPage } = classes

    return (
        <div className={MainPage}>

            <Header />
            <Alert alert={{text: 'test alert'}} />
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