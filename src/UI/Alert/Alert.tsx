import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

type AlertProps = {
    alertText: string,
    alertType: string,
}

const Alert = ({ alertText, alertType }: AlertProps) => {
    let AlertClass:string = "w-full text-white container mx-auto";
    switch (alertType) {
        case "primary":
            AlertClass += " bg-blue-500";
            break;
        case "danger":
            AlertClass += " bg-red-500";
            break;
        case "warning":
            AlertClass += " bg-yellow-500";
            break;
        case "success":
            AlertClass += " bg-green-500";

    }
    return (
        <>
            <div className={AlertClass}>
                <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex">
                        <FontAwesomeIcon className="text-white self-center" icon={faCheckCircle} />


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