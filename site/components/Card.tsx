import React from 'react';
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react';
import ghlogo from '../public/github-logo.png'

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
    link?: string,
}

export default function Card(props: Props) {

    const [state, setState] = useState(false)

    const handleClick = () =>{
        setState(!state)
    }

    return (
        <div className={props.className}>

            {!state &&
            <div className='flex flex-row bg-[#ffffffc0] rounded-lg border-2 card h-[100%] w-[100%]' id="front"onClick={handleClick}>
                <div className='basis-1/2 justify-items-center p-5'>
                    <Image className="self-center image rounded-md shadow-lg" src={props.data.img} alt=""/>
                </div>
                <div className='basis-1/2 text-2xl self-center font-bold text-center'>
                    {props.data.company}
                </div>
            </div>}

            {state && 
            <div className='flex flex-row bg-[#ffffffc0] rounded-lg border-2 card w-full h-[100%]' id="back" onClick={handleClick}>
                <div className='flex flex-col w-[100%] h-[auto]'>
                    <div className='flex flex-row w-[100%] p-5'>
                        <div className='font-bold basis-1/2 text-left'>
                            {props.data.title}
                        </div>
                        <div className='font-bold basis-1/2 w-[100%] text-right'>
                            {props.data.date}
                        </div>
                    </div>
                    <ul className='p-5 space-y-5 w-[100%] pt-0'>
                        {props.data.desc.map((item, key) => 
                            <li key={key}>{item}</li>
                        )}                       
                    </ul>
                    {props.data.link && 
                    <div className='pr-5 h-[10%] w-[100%]'> 
                        <a className="h-[100%]" href={props.data.link} target="_blank" rel="noreferrer"><Image className="h-[100%] w-[auto] float-right z-40 hover:shadow" src={ghlogo} alt=""/></a>
                    </div>
                    }
                </div> 
            </div>}
        </div>
    )
}
