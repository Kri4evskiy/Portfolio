import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Card.module.scss'

const Card = () => {
const {Card, Сard__body, Сard__title} = classes
    return (
        <div className={Card}>
            <img src={''} alt={''} className='card-img-top'/>
            <div className={Сard__body}>
                <h5 className={Сard__title}>React JS</h5>
                <Link to={'/:react'} className='btn btn-primary'>Open</Link>
            </div>
        </div>
    )
}

export default Card