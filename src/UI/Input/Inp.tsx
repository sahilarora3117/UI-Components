import React from 'react';

type InpProps = {
    inpType: string,
    inpPlaceholder?: string,
}

const Inp = ({inpType, inpPlaceholder}: InpProps) => {
    return (
        <>
            <input type={inpType} placeholder={inpPlaceholder} className="block w-full px-4 py-2 mt-2 text-gray bg-white border border-gray focus:shadow-md focus:outline-none"></input>
        </>
    )
}

export default Inp;