import Head from 'next/head'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4, p5} from '../data/exports'
import { useState, useRef } from 'react'

export default function Projects() {

    const bgparallax = useRef<any>(null)
    const scrollref = useRef<any>(null)
    const [scrolling, setScrolling] = useState(false)
    const [scrollx, setScrollx] = useState(0)
    const [clientx, setClientx] = useState(0)

    const handleMove = (e: any) => {
        if(bgparallax.current === null){return}
        let _w = window.innerWidth/5;
        let _h = window.innerHeight/5;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${10 - (_mouseX - _w) * 0.01}% ${10 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${10 - (_mouseX - _w) * 0.02}% ${10 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${10 - (_mouseX - _w) * 0.03}% ${10 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        bgparallax.current.style.backgroundPosition = x;
    }

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
            scrollref.current.scrollLeft = scrollref.current.clientWidth*dx + scrollx
            setScrollx(scrollref.current.scrollLeft);
            setClientx(e.clientX);
        }
    };

  return (
    <div className='flex flex-col w-full h-screen text-white snap-center bg-bg-main hero-bg' id="projects" onMouseMove={(e) => handleMove(e)} ref={bgparallax}>
        <div className='flex flex-col lg:flex-row sm:p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full m-16 rounded  border-aqua border'>
            <div className='flex flex-col p-6 xl:ml-48 self-center m-lg:mt-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Projects
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg'>
                    Cool things I built
                </div>
            </div>
            <div className='mt-auto mb-auto lg:mb-0 lg:mt-0 lg:ml-auto self-center flex flex-row overflow-x-scroll snap-x snap-mandatory scroll-smooth flex-nowrap max-w-[12rem] md:max-w-xs lg:max-w-sm h-[50vh] gap-12 overflow-y-hidden lg:mr-6 cursor-grab m-lg:mb-auto' 
                onMouseDown={(e) => onMouseDown(e)} onMouseMove={(e) => onMouseMove(e)} onMouseUp={(e) => onMouseUp(e)} onMouseLeave={(e) => onMouseUp(e)} ref={scrollref}>
                <Card data={p1}/>
                <Card data={p2}/>
                <Card data={p3}/>
                <Card data={p4}/>
                <Card data={p5}/>
            </div>
        </div> 
    </div>
  )
}
