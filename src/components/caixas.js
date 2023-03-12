import React, { useState } from "react";
import { useAuth } from "../context/Context";
import { trim } from "../helpers/trim"

export function Caixa ({show,setShow}) {
    const { palavra } = useAuth();
    console.log(palavra, 'na caixa')
    return (
        <div className="text-green-500">
            <div className="flex space-x-4 bg-white m-5 p-5 border-2 border-red-700 rounded-lg">
                <div className="flex-1 p-5 shadow-md rounded-lg">
                    P
                </div>
                <div className="flex-1 p-5 shadow-md rounded-lg">
                    O
                </div>
                <div className="flex-1 p-5 shadow-md rounded-lg">
                    M
                </div>
                <div className="flex-1 p-5 shadow-md rounded-lg">
                    M
                </div>
                <div className="flex-1 p-5 shadow-md rounded-lg">
                    E
                </div>
            </div>
        </div>
    )
}