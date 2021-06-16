import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type InpProps = {
    inpType: string,
    inpPlaceholder?: string,
}

const IcInp = ({inpType, inpPlaceholder}: InpProps) => {
    return (
        <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon className="text-gray-400" icon={faSearch} />

                </span>
                <input type={inpType} placeholder={inpPlaceholder} className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:shadow-md focus:outline-none" />
        </div>

    )
}

export default IcInp