import React from 'react'
import Inp from '../UI/Input/Inp';
import IcInp from '../UI/Input/IcInp';
const Inputs = () => {
    return (
        <>
        <div className="container mx-auto space-y-4 mt-10">
            <p className="text-2xl">Inputs Without Icon</p>
            <Inp inpType="text" inpPlaceholder="Text Placeholder"/>
            <Inp inpType="number" inpPlaceholder="Number Placeholder"/>
            <p className="text-2xl">Inputs With Icon</p>
            <IcInp inpType="text" inpPlaceholder="Text Placeholder"/>
            <IcInp inpType="number" inpPlaceholder="Number Placeholder"/>

             
        </div>
        </>
    )
}

export default Inputs;