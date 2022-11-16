import React from 'react';
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react';

interface Props {
    className: string;
    data: Object;
}

interface Object {
    skill: string,
    img: StaticImageData,
}

export default function Card(props: Props) {

    const [state, setState] = useState(false)

    const handleClick = () =>{
        setState(!state)
    }

    return (
        <div className={props.className}>

            {!state &&
            <div className='flex flex-row bg-[#ffffffc0] rounded-lg border-2 card h-[100%] w-[100%]'>
                <div className='basis-1/2 justify-items-center p-5 h-1/2 self-center'>
                    <Image className="self-center image rounded-md shadow-lg" src={props.data.img} alt=""/>
                </div>
                <div className='basis-1/2 text-2xl self-center w-[50%] font-bold text-center break-all p-5'>
                    {props.data.skill}
                </div>
            </div>}

        </div>
    )
}
