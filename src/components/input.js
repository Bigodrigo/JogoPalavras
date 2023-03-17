import React, { useState } from "react";
import { useAuth } from "../context/Context";
import { trim } from "../helpers/trim"

export function Input ({show,setShow,palavra}) {
    //const { palavra } = useAuth();
    console.log(palavra, 'na caixa')
    return (
        <form name="Rod">
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
            <div className="flex space-x-4 bg-white m-5 p-5 border-2 border-red-700 rounded-lg">
                {palavra.map((letra,index) => (
                <input placeholder={index} key={index} id={index}
                className="flex-1 p-5 shadow-md rounded-lg">
                
                </input>
                ))}
            </div>
        </div>
        <input type='submit' value='Enviar'/>
        </form>
    )
}
