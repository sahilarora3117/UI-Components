import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type BtnProps = {
    btnSize?: string,
    btnText: string,
    btnType: string,
}

const IcBtn = ({btnSize, btnText, btnType}: BtnProps) => {
    let btnclass:string = "items-center px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform focus:outline-none focus:bg-blue-500 ";
    // font - font-medium and stuff
    switch(btnSize){
        case "xs":
            btnclass += " text-xs";
            break;
        case "sm":
            btnclass += " text-sm";
            break;
        case "base":
            btnclass += " text-base";
            break;
        case "xl":
            btnclass += " text-xl";
            break;  
    }

    // color
    switch(btnType){
        case "primary":
            btnclass += " bg-blue-600 hover:bg-blue-700";
            break;
        case "danger":
            btnclass += " bg-red-600 hover:bg-red-700";
            break;
        case "warning":
            btnclass += " bg-yellow-500 hover:bg-yellow-600";
            break;
        case "success":
            btnclass += " bg-green-600 hover:bg-green-700";
            break;
    }

    return (
        <>
            <button className={btnclass}>
            <FontAwesomeIcon icon={faSearch} />
                <span className="mx-1">{btnText}</span>
            </button>
        </>
    )
}


export default IcBtn;