import React from 'react';
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react';

interface Props {
    className: string;
    data: Object;
}

interface Object {
    company: string,
    img: StaticImageData,
    date: string,
    title: string,
    desc: string[]
}

export default function Card(props: Props) {

    const [state, setState] = useState(false)

    const handleClick = () =>{
        setState(!state)
    }

    return (
        <div className={props.className}>

            {!state &&
            <div className='flex flex-row bg-[#ffffffc0] rounded-lg border-2 card h-[100%]' id="front"onClick={handleClick}>
                <div className='basis-1/2 justify-items-center'>
                    <Image className="self-center image" src={props.data.img} alt=""/>
                </div>
                <div className='basis-1/2 text-2xl self-center font-bold text-center'>
                    {props.data.company}
                </div>
            </div>}

            {state && 
            <div className='flex flex-row bg-[#ffffffc0] rounded-lg border-2 card h-[100%]' id="back" onClick={handleClick}>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-[100%] p-5'>
                        <div className='font-bold basis-1/2 text-left'>
                            {props.data.title}
                        </div>
                        <div className='font-bold basis-1/2 text-right'>
                            {props.data.date}
                        </div>
                    </div>
                    <ul className='p-5 space-y-5'>
                        {props.data.desc.map((item) => 
                            <li>{item}</li>
                        )}                       
                    </ul>
                </div> 
            </div>}
        </div>
    )
}
