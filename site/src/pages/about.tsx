import Link from '@/components/Link/Link'
import Card from '@/components/Card/Card'
import typeS from '../../public/type-s.png'
import {p1, p2, p3, p4, p5} from '../data/exports'
import Image from 'next/image'
import selfpic from '../../public/self-pic.jpg'
import { useState, useRef } from 'react'

export default function About() {

  return (
    <div className='flex w-full h-screen min-h-max text-white snap-center pt-16 pb-16 justify-center' id="about">
        <div className='flex flex-col lg:flex-row self-center w-[calc(100vw-4rem)] min-h-full h-max rounded border-aqua border relative'>
            <div className='flex flex-col p-10 ml-auto mr-auto self-center mt-auto mb-auto z-10 relative overflow-hidden h-full'>
                <div className='lg:text-9xl sm:text-8xl text-5xl mt-auto'>
                    Hi!👋
                </div>
                <div className='text-[#A8A8A8] font-light inline-block mb-auto'>
                    My name is Rishabh Vemparala and I am a Software Engineering intern at StateFarm and study <span className='text-aqua'>Computer Science</span> at the University of Texas at Dallas. 
                    <br></br>
                    Most of my experience is in fullstack web development, but I am always looking for cool new technologies to try out. 
                    <br></br>
                    I enjoy spotting cool cars out in the wild and currently drive a 2003 Acura RSX <span className='italic'>TYPE<span className='text-[#f60203]'>-S</span></span>
                </div>
            </div>
            <div className='z-0 w-[calc(100%-4rem)] left-[2rem] top-[2rem] h-[calc(100%-4rem)] absolute bg-white opacity-30 abt'>
            </div>
            
        </div> 
    </div>
  )
}
