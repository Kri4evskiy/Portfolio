import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Search from '../../components/Search'
import Card from '../../components/Card'


import Alert from '../../components/Alert/Alert'
import { GithubContext } from '../../context/github/githubContext'

import classes from './ViewPage.module.scss'

const ViewPage = () => {
    const {ViewPage__cards} = classes

    const {loading, users} = useContext(GithubContext)
    return (
        <Container>
            <Alert />
            <Search />

            {loading
                ? <p className='text-center'>Загрузка...</p>
                : users.map(user => {
                    return (
                        <div className={ViewPage__cards} key={user.id}>
                            <Card user={user}/> 
                        </div>
                    )
                })
            }            
        </Container>
        
    )
}

export default ViewPage