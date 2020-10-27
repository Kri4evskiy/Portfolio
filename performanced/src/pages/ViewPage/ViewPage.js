import React from 'react'
import { Container } from 'react-bootstrap'
import Search from '../../components/Search'
import Card from '../../components/Card'

//import classes from './ViewPage.module.scss'

const ViewPage = () => {
    //const {ViewPage} = classes
    return (
        <Container>
            
           <Search />

           <Card /> 
        </Container>
        
    )
}

export default ViewPage