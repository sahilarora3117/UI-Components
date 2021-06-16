import React from 'react'
import Alert from '../UI/Alert/Alert';

const Alerts = () => {
    return (
        <>
        <div className="container mx-auto space-y-4 mt-4">
            <p className="text-2xl">Alerts</p>
            <Alert alertText="This is my alert text" alertType="primary"/>
            <Alert alertText="This is my alert text" alertType="danger"/>
            <Alert alertText="This is my alert text" alertType="warning"/>
            <Alert alertText="This is my alert text" alertType="success"/>

        </div>
        </>
    )
}

export default Alerts;