import Head from 'next/head'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4} from '../data/exports'
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

    const onMouseDown = (e) => {
        setClientx(e.clientX);
        console.log(clientx)
        setScrolling(true);
      };
    
    const onMouseUp = () => {
        setScrolling(false)
      };
    
    const onMouseMove = (e)=> {
        if (scrolling) {
            console.log(scrollref)
          scrollref.current.scrollLeft = scrollx + e.clientX - clientx;
          setScrollx(scrollx + e.clientX - clientx);
          setClientx(e.clientX);
          console.log(clientx, scrollx)
        }
      };

  return (
    <div className='flex flex-col w-full h-screen text-white snap-center bg-bg-main hero-bg' id="projects" onMouseMove={(e) => handleMove(e)} ref={bgparallax}>
        <div className='flex flex-col lg:flex-row p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full m-16 rounded'>
            <div className='flex flex-col p-6 xl:ml-48 self-center'>
                <div className='font-bold sm:text-9xl text-6xl m-0'>
                    Projects
                </div>
                <div className='font-light text-lg '>
                Cool things I built
                </div>
            </div>
            <div className='lg:ml-auto self-center flex flex-row overflow-x-auto flex-nowrap w-96 snap-mandatory snap-x scroll-smooth p-2 gap-12 lg:mr-60 mr-6 z-10' onMouseDown={(e) => onMouseDown(e)} onMouseMove={(e) => onMouseMove(e)} onMouseUp={onMouseUp} ref={scrollref}>
                {/* <div className='h-full grid 2xl:grid-cols-1 overflow-y-auto gap-y-6 lg:mr-6 m-6 snap-mandatory snap-y scroll-smooth'> */}
                    <Card data={p1}/>
                    <Card data={p2}/>
                    <Card data={p3}/>
                    <Card data={p4}/>
                {/* </div> */}

            </div>
        </div> 
    </div>
  )
}
