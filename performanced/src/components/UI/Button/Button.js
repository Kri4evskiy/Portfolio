import React from 'react'

import classes from './Button.module.scss'

const Button = props => {
    const buttonType = props.type || 'submit'
    const cls = [classes.Button]

    return (
        <button
            type={buttonType}
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button