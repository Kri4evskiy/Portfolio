import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LogoName.module.scss'

const LogoName = () => {
    const { LogoName, LogoName__link } = classes
    return (
        <div className={LogoName}>
            <Link
                className={LogoName__link}
                to='/about'
            >
                Krichevskiy <br /> Stanislav
            </Link>
        </div>
    )
}

export default LogoName