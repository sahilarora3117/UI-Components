import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type BtnProps = {
    btnSize?: string,
    btnText: string,
    btnType: string,
}

const IcBtn = ({btnSize, btnText, btnType}: BtnProps) => {
    let btnclass:string = "items-center px-4 py-2 rounded-sm tracking-wide filter drop-shadow-lg text-white capitalize transition-colors duration-200 transform focus:outline-none ";
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
    }

    // color
    switch(btnType){
        case "primary":
            btnclass += " bg-blue hover:bg-blue-dark ";
            break;
        case "danger":
            btnclass += " bg-red hover:bg-red-dark " ;
            break;
        case "warning":
            btnclass += " bg-yellow hover:bg-yellow-dark ";
            break;
        case "success":
            btnclass += " bg-green hover:bg-green-dark ";
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