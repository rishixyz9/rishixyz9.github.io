import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Navbar() {

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
        document.getElementById("dropdown")?.classList.remove(`${!state}`)
        document.getElementById("dropdown")?.classList.add(`${state}`)
    }

    return (
        <>
        <div className="flex flex-row bg-[#232323] h-[10%] p-5 lg:text-3xl md:text-2xl sm:text-xl overflow-hidden">
            <h1 className="basis-3/4 font-bold text-white pl-5 self-center">
                Rishabh Vemparala
            </h1>
            <div className="sm:flex flex-row basis-1/4 hidden self-center pr-5 gap-5">
                <h1 className="basis-1/3 text-center font-bold text-white border-2 rounded p-2 navitem">
                    <a href="#">about</a>
                </h1>
                <h1 className="basis-1/3 text-center font-bold text-white border-2 rounded p-2 navitem">
                    <a href="#">resume</a>
                </h1>
                <h1 className="basis-1/3 text-center font-bold text-white border-2 rounded p-2 navitem">
                    <a href="#">contact</a>
                </h1>
            </div>
            <div className="flex flex-row basis-1/4 justify-center sm:hidden md:hidden lg:hidden self-center">
                    <AiOutlineMenu onClick={handleClick} className="w-[25%] h-[25%] text-white"/>
            </div>
        </div>
        
        <div className='flex flex-col sm:hidden md:hidden lg:hidden w-screen absolute bg-slate-800 pt-[5%] text-center self-center text-3xl false' id='dropdown'>
            <h1 className="basis-1/3 text-center font-bold">
                <a href="#about">about</a>
            </h1>
            <h1 className="basis-1/3 text-center font-bold">
                resume
            </h1>
            <h1 className="basis-1/3 text-center font-bold">
                contact
            </h1>
        </div> 
        </>
    )
}