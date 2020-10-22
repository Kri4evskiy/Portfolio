import React, { useState } from 'react'

import classes from './Alert.module.scss'

const Alert = () => {

    const [show, setShow] = useState(true);

    const { Alert } = classes

    if (show) {
        return (
            <div className={Alert}>
                <h1> ALERT</h1>
            </div>
        );
    }
    return <button onClick={() => setShow(true)}>Show Alert</button>;
}

export default Alert