import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

type AlertProps = {
    alertText: string,
    alertType: string,
}

const Alert = ({ alertText, alertType }: AlertProps) => {
    let AlertClass: string = "w-full text-white container mx-auto";
    let Icon: any;
    switch (alertType) {
        case "primary":
            AlertClass += " bg-blue-500";
            Icon = faCheckCircle;
            break;
        case "danger":
            AlertClass += " bg-red-500";
            Icon = faExclamation;
            break;
        case "warning":
            AlertClass += " bg-yellow-500";
            Icon = faExclamation;
            break;
        case "success":
            AlertClass += " bg-green-500";
            Icon = faCheckCircle;

    }
    return (
        <>
            <div className={AlertClass}>
                <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">
                        <FontAwesomeIcon className="text-white self-center" icon={Icon} />


                        <p className="mx-3">{alertText}</p>
                    </div>

                    <button className="p-1 px-2 transition-colors duration-200 transform hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                        <FontAwesomeIcon className="text-white self-center" icon={faTimes} />

                    </button>
                </div>
            </div>

        </>
    )
}

export default Alert;