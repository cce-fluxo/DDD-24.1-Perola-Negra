"use client";

import React from "react";

const PopUpDesconto = ({ isVisible }) => {

    if ( !isVisible ) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-xl w-[45vw] p-2">Modal</div>
        </div>
    )
}

export default PopUpDesconto;