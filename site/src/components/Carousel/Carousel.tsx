import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { skills } from '@/data/exports';
import CarouselCard from './CarouselCard';

export default function Carousel() {

    const [active, setActive] = useState(0)

    const data = [skills.frameworks, skills.languages, skills.libraries, skills.misc]


    useEffect(() => {
        const interval = setInterval(() => { setActive((active + 1) % 4) }, 5000)
        return () => clearInterval(interval)
        // gsap.killTweensOf('.carousel-ref > * ')
    }, [active])

    const handleClick = (e: any) => {
        setActive(parseInt(e.target.id))
    }

    return (
        <div className='w-full self-center flex sm:flex-col flex-col-reverse overflow-hidden text-black bg-transparent rounded-md border border-aqua p-4'>
            <div className='w-full flex flex-row space-x-4 self-center'>
                <CarouselCard data={data[active]} />
            </div>
            <div className='w-full flex flex-row pl-2 pr-2 hover:cursor-pointer'>
                <div className='mt-auto ml-auto mr-auto flex flex-row space-x-2 p-1'>
                    <div
                        className={'w-2 h-2 rounded-full transition-all duration-300 ease-in ' + (active === 0 ? 'bg-aqua' : 'bg-zinc-500')}
                        id='0'
                        onClick={handleClick} >
                    </div>
                    <div
                        className={'w-2 h-2 rounded-full transition-all duration-300 ease-in ' + (active === 1 ? 'bg-aqua' : 'bg-zinc-500')}
                        id='1'
                        onClick={handleClick}>
                    </div>
                    <div
                        className={'w-2 h-2 rounded-full transition-all duration-300 ease-in ' + (active === 2 ? 'bg-aqua' : 'bg-zinc-500')}
                        id='2'
                        onClick={handleClick}>
                    </div>
                    <div
                        className={'w-2 h-2 rounded-full transition-all ease-in-out ' + (active === 3 ? 'bg-cyan-500' : 'bg-zinc-500')}
                        id='3'
                        onClick={handleClick}>
                    </div>
                </div>
            </div>

        </div>

    )
}
