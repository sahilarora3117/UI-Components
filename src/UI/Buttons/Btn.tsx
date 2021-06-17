import React from 'react';

type BtnProps = {
    btnSize?: string,
    btnText: string,
    btnType: string,
}

const Btn = ({btnSize, btnText, btnType}: BtnProps) => {
    let btnclass:string = "px-4 py-2 box filter rounded-sm drop-shadow-lg tracking-wide text-white transition-colors duration-200 transform filter focus:outline-none";
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
            btnclass += " bg-blue hover:bg-blue-dark ";
            break;
        case "danger":
            btnclass += " bg-red hover:bg-red-dark";
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
        {btnText}
    </button>
        </>
    )
}


export default Btn;