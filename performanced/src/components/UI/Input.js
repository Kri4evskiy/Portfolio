import React from 'react'
import classes from './Input.module.scss'
import classNames from 'classnames'

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    
    console.log(classes);
    

    return (
        <div className={classes.Input}>
            <label htmlFor={htmlFor} >{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

    <span>{props.errorMessage}</span>
        </div>
    )
}

export default Input