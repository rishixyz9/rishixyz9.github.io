import Head from 'next/head'
import Image from 'next/image'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4, p5} from '../data/exports'
import { useState, useRef } from 'react'

export default function Projects() {

    const scrollref = useRef<any>(null)
    const [scrolling, setScrolling] = useState(false)
    const [scrollx, setScrollx] = useState(0)
    const [clientx, setClientx] = useState(0)


    const onMouseDown = (e:any) => {
        setClientx(e.clientX);
        setScrolling(true);
    };
    
    const onMouseUp = (e:any) => {
        setScrolling(false)
    };

    const onMouseMove = (e:any)=> {
        if (scrolling) {
            const dx =   -1 * (e.clientX - clientx)
            if(dx >= 1){
                scrollref.current.scrollLeft = scrollx + scrollref.current.clientWidth 
            }
            else if(dx <= -1) {
                scrollref.current.scrollLeft = scrollx - scrollref.current.clientWidth
            }
            setScrollx(scrollref.current.scrollLeft);
            setClientx(e.clientX);
        }
    };

  return (
    <div className='flex flex-col w-full h-screen text-white snap-center' id="projects">
        <div className='flex flex-col sm:p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full m-16 rounded  border-aqua border'>
            <div className='flex flex-col p-6 self-center align-middle mt-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Projects
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg'>
                    Cool things I built
                </div>
            </div>
            <div className='m-xs:hidden grid overflow-hidden grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-auto w-full h-[calc(100vh-24rem)] self-center p-8 gap-2'>
                <Card data={p1}/>
                <Card data={p2}/>
                <Card data={p3}/>
                <Card data={p4}/>
                <Card data={p5}/>
            </div>
            <div className='sm:hidden flex flex-row overflow-x-scroll snap-x snap-mandatory scroll-smooth flex-nowrap w-[calc(100%-2rem)] h-1/2 gap-12 overflow-y-hidden lg:mr-6 cursor-grab m-lg:mb-auto self-center' 
                onMouseDown={(e) => onMouseDown(e)} onMouseMove={(e) => onMouseMove(e)} onMouseUp={(e) => onMouseUp(e)} onMouseLeave={(e) => onMouseUp(e)} ref={scrollref}>
                <div className='w-full flex-none snap-center'><Card data={p1}/></div>
                <div className='w-full flex-none snap-center'><Card data={p2}/></div>
                <div className='w-full flex-none snap-center'><Card data={p3}/></div>
                <div className='w-full flex-none snap-center'><Card data={p4}/></div>
                <div className='w-full flex-none snap-center'><Card data={p5}/></div>
            </div>
        </div> 
    </div>
  )
}
