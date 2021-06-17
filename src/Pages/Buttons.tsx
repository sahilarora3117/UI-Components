import React from 'react'
import Btn from '../UI/Buttons/Btn';
import IcBtn from '../UI/Buttons/IcBtn';
const Buttons = () => {
    return (
        <>  
        <div className="container mx-auto mt-10 space-y-4">
        <p className="text-2xl">Buttons Without Icons</p>
        <div className="space-y-1 space-x-3">
                <Btn btnText="Primary" btnType="primary" btnSize="xs"/>
                <Btn btnText="Danger" btnType="danger" btnSize="xs"/>
                <Btn btnText="Warning" btnType="warning" btnSize="xs"/>
                <Btn btnText="Success" btnType="success" btnSize="xs"/>
        </div>
        <div className="space-y-1 space-x-3">
                <Btn btnText="Primary" btnType="primary" btnSize="sm"/>
                <Btn btnText="Danger" btnType="danger" btnSize="sm"/>
                <Btn btnText="Warning" btnType="warning" btnSize="sm"/>
                <Btn btnText="Success" btnType="success" btnSize="sm"/>
        </div>
        <div className="space-y-1 space-x-3">
                <Btn btnText="Primary" btnType="primary" btnSize="base"/>
                <Btn btnText="Danger" btnType="danger" btnSize="base"/>
                <Btn btnText="Warning" btnType="warning" btnSize="base"/>
                <Btn btnText="Success" btnType="success" btnSize="base"/>
        </div>
        <p className="text-2xl">Buttons With Icons</p>

        <div className="space-y-1 space-x-3">
                <IcBtn btnText="Primary" btnType="primary" btnSize="xs"/>
                <IcBtn btnText="Danger" btnType="danger" btnSize="xs"/>
                <IcBtn btnText="Warning" btnType="warning" btnSize="xs"/>
                <IcBtn btnText="Success" btnType="success" btnSize="xs"/>
        </div>
        <div className="space-y-1 space-x-3">
                <IcBtn btnText="Primary" btnType="primary" btnSize="sm"/>
                <IcBtn btnText="Danger" btnType="danger" btnSize="sm"/>
                <IcBtn btnText="Warning" btnType="warning" btnSize="sm"/>
                <IcBtn btnText="Success" btnType="success" btnSize="sm"/>
        </div>
        <div className="space-y-1 space-x-3">
                <IcBtn btnText="Primary" btnType="primary" btnSize="base"/>
                <IcBtn btnText="Danger" btnType="danger" btnSize="base"/>
                <IcBtn btnText="Warning" btnType="warning" btnSize="base"/>
                <IcBtn btnText="Success" btnType="success" btnSize="base"/>
        </div>
        </div>

        </>
    )
}

export default Buttons;