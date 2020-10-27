import React, { useState } from 'react'

import classes from './Alert.module.scss'

const Alert = ({alert}) => {

    const [show, setShow] = useState(false);

    const { Alert } = classes

    if (show) {
        return (
            <div 
                className={`${Alert} alert-${alert.type || 'secondary'} alert-dismissible`}
                role='alert'    
            >
                {alert.text}
                <button onClick={() => setShow(false)}>
                    <span>&times;</span>
                </button>
            </div>
        );
    }
    return <button onClick={() => setShow(true)}>Show Alert</button>;
}

export default Alert