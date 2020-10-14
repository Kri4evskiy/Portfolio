import React from 'react'

import classes from './Input.module.scss'

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    const cls = [classes.Input]
    
    return (
        <div className={cls.join(' ')}>

            <label htmlFor={htmlFor}>
                {props.label}
            </label>

            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input