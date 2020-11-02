import React from 'react'
import {GoMarkGithub} from "react-icons/go";

import classes from './Card.module.scss'

const Card = ({ user }) => {
    console.log(user);
    const { Card, Card__image, Сard__body, Card__link } = classes
    return (
        <div className={Card}>
            <div className={Card__image}>
                <img src={user.avatar_url} alt='avatar' />
            </div>

            <div className={Сard__body}>
                <p>
                    <GoMarkGithub />
                    {user.login}
                </p>
                <div className={Card__link}>
                    <a href={user.html_url} className='btn btn-primary'>Go To Github</a>
                </div>
            </div>
        </div>
    )
}

export default Card

