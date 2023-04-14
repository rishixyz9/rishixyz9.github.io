import React from 'react';
import { useState } from 'react';
import styles from './carousel.module.css'
import Image, { StaticImageData } from 'next/image'
import { skills } from '@/data/exports';
import CarouselCard from './CarouselCard';


export default function Carousel() {

    const [active, setActive] = useState(0)

    const data = [skills.frameworks, skills.languages, skills.libraries, skills.misc]

    const handleClick = (e: any) => {
        switch(e.target.id){
            case 'l':
                setActive((3+active)%4)
                break;
            case 'r':
                setActive((active+1)%4)
                break;
        }
    }

    return (
        <div className='min-w-[19rem] w-full self-center max-h-[20rem] h-full flex flex-col overflow-hidden text-black bg-gray-300 rounded-md border-2 border-white p-4'>
            <div className='overflow-hidden h-full w-full flex flex-row space-x-4'>
                <CarouselCard data={data[active]}/>
            </div>
            <div className='w-full flex flex-row pl-2 pr-2 hover:cursor-pointer'>
                <div id='l' onClick={(e) => handleClick(e)}>l</div>
                <div className='mt-auto ml-auto mr-auto flex flex-row space-x-2 p-1'>
                    <div className={'w-2 h-2 rounded-full transition-all ease-in-out ' + (active === 0 ? 'bg-cyan-500' : 'bg-zinc-500')} id='0'></div>
                    <div className={'w-2 h-2 rounded-full transition-all ease-in-out ' + (active === 1 ? 'bg-cyan-500' : 'bg-zinc-500')} id='1'></div>
                    <div className={'w-2 h-2 rounded-full transition-all ease-in-out ' + (active === 2 ? 'bg-cyan-500' : 'bg-zinc-500')} id='1'></div>
                    <div className={'w-2 h-2 rounded-full transition-all ease-in-out ' + (active === 3 ? 'bg-cyan-500' : 'bg-zinc-500')} id='1'></div>
                </div>
                <div id='r' onClick={(e) => handleClick(e)}>r</div>
            </div>

        </div>

    )
}
