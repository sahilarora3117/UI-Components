import React from 'react';

type BtnProps = {
    btnSize?: string,
    btnText: string,
    btnType: string,
}

const Btn = ({btnSize, btnText, btnType}: BtnProps) => {
    let btnclass:string = "px-4 py-2 box filter drop-shadow-lg tracking-wide text-white capitalize transition-colors duration-200 transform filter focus:outline-none  ";
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
            btnclass += " bg-blue-600 hover:bg-blue-700 focus:bg-blue-800";
            break;
        case "danger":
            btnclass += " bg-red-600 hover:bg-red-700 focus:bg-red-800";
            break;
        case "warning":
            btnclass += " bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-800";
            break;
        case "success":
            btnclass += " bg-green-600 hover:bg-green-700 focus:bg-green-500";
            break;
    }
    return (
        <>
    <button className={btnclass}>
        {btnText}
    </button>
        </>
    )
}


export default Btn;