import React, { useContext } from 'react'
import { AlertContext } from '../../context/alert/alertContext';

import classes from './Alert.module.scss'

const Alert = () => {
    const { Alert } = classes

    const { alert, hide } = useContext(AlertContext)

    if (!alert) return null

    return (
            <div
                className={`${Alert} alert-${alert.type || 'secondary'}`}
                role='alert'
            >
                {alert.text}
                <button type='button' className='close' aria-label='Close' onClick={hide}>
                    <span aria-hidden='true' >&times;</span>
                </button>
            </div>
    );
}

export default Alert