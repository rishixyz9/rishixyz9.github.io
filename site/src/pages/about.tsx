import Link from '@/components/Link/Link'
import Card from '@/components/Card/Card'
import typeS from '../../public/type-s.png'
import {p1, p2, p3, p4, p5} from '../data/exports'
import Image from 'next/image'
import selfpic from '../../public/self-pic.jpg'
import { useState, useRef } from 'react'

export default function About() {

    const bgparallax = useRef<any>(null)

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

  return (
    <div className='relative flex flex-col w-full h-screen max-h-screen text-white snap-center bg-bg-main hero-bg' id="about" onMouseMove={(e) => handleMove(e)} ref={bgparallax}>
        <div className='flex flex-col lg:flex-row p-6 self-center w-[calc(100vw-4rem)] h-full m-16 rounded border-aqua border relative'>
            <div className='flex flex-col p-6 ml-auto mr-auto self-center m-xs:mt-auto m-xs:mb-auto z-10 relative overflow-hidden h-full'>
                <div className='lg:text-9xl sm:text-8xl text-5xl mt-auto'>
                    Hi! 👋
                </div>
                <div className='text-[#A8A8A8] font-light abt-text  inline-block mb-auto'>
                    My name is Rishabh Vemparala and I am a Software Engineering intern at StateFarm and study <span className='text-aqua'>Computer Science</span> at the University of Texas at Dallas. 
                    <br className='hidden sm:display'></br>
                    Most of my experience is in fullstack web development, but I am always looking for cool new technologies to try out. 
                    <br className='hidden sm:display'></br>
                    I enjoy spotting cool cars out in the wild and currently drive a 2003 Acura RSX <span className='italic'>TYPE<span className='text-[#f60203]'>-S</span></span>
                </div>
            </div>
            <div className='z-0 w-[calc(100%-4rem)] left-[2rem] top-[2rem] h-[calc(100%-4rem)] absolute bg-white opacity-30 abt'>
            </div>
            
        </div> 
    </div>
  )
}
