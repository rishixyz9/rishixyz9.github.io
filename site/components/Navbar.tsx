import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';
import Link from 'next/link';
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
        <div className="w-screen flex flex-row bg-[#232323] h-[10vh] p-5 lg:text-3xl md:text-2xl sm:text-xl overflow-hidden fixed shadow-lg z-[10]">
            <h1 className="basis-3/4 font-bold text-white pl-5 self-center">
                <Link href="/">Rishabh Vemparala</Link>
            </h1>
            <div className="sm:flex flex-row basis-1/4 hidden self-center pr-5 gap-5 text-[#777777]">
                <h1 className="basis-1/2 text-center font-bold border-2 border-[#777777] rounded p-2 navitem">
                    <Link href="/resume">resume</Link>
                </h1>
                <h1 className="basis-1/2 text-center font-bold border-2 border-[#777777] rounded p-2 navitem">
                    <Link href="/contact">contact</Link>
                </h1>
            </div>
            <div className="flex flex-row basis-1/4 justify-center sm:hidden md:hidden lg:hidden self-center">
                    <AiOutlineMenu onClick={handleClick} className="w-[25%] h-[25%] text-white"/>
            </div>
        </div>
        
        <div className='flex flex-col sm:hidden md:hidden lg:hidden w-screen absolute bg-[#232323] pt-[5%] text-center self-center text-3xl false mt-[10vh] z-10' id='dropdown'>
            <h1 className="basis-1/2 text-center font-bold">
                <Link href="/resume">resume</Link >
            </h1>
            <h1 className="basis-1/2 text-center font-bold">
                <Link href="/contact">contact</Link>
            </h1>
        </div> 
        </>
    )
}
