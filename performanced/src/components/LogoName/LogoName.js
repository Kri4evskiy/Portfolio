import React from 'react'
import { Link } from 'react-router-dom'

import classes from './LogoName.module.scss'

const LogoName = () => {
    const { wrapper_logo } = classes
    
    return (
        <div className={wrapper_logo}>
            <Link to='/' >
                Krichevskiy <br /> Stanislav
            </Link>
        </div>
    )
}

export default LogoName