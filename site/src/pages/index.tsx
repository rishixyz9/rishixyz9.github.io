import Head from 'next/head'
import Image from 'next/image'

import { useRef } from 'react'

import Link from '@/components/Link/Link'
import Projects from './projects'
import About from './about'
import Resume from './resume'
import Skills from './skills'
import Script from 'next/script'

import linkedin from '../../public/linkedin-logo.svg'
import gh from '../../public/github-logo.svg'
import Contact from './contact'

export default function Home() {

  const bgparallax = useRef<any>(null)

  const handleMove = (e: any) => {
    if(bgparallax.current === null){return}
    let _w = window.innerWidth/5;
    let _h = window.innerHeight/5;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${10 - (_mouseX - _w) * 0.0025}% ${10 - (_mouseY - _h) * 0.0025}%`;
    let _depth2 = `${10 - (_mouseX - _w) * 0.005}% ${10 - (_mouseY - _h) * 0.005}%`;
    let _depth3 = `${10 - (_mouseX - _w) * 0.0075}% ${10 - (_mouseY - _h) * 0.0075}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    bgparallax.current.style.backgroundPosition = x;
  }

  return (
    <div className='hero-bg' onMouseMove={(e) => handleMove(e)} ref={bgparallax}>
      <Head>
        <title>Rishabh Vemparala</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
         @import url(&apos;https://fonts.googleapis.com/css2?family=Montserrat&family=Outfit:wght@100;200;300;400;500;600;700;800&display=swap&apos;);
        </style>
      </Head>

      <div className='w-full max-h-screen h-screen flex flex-col snap-center'> 

        {/* Hero Section */}
        <div className='flex flex-row p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full border border-aqua m-16 rounded'>


          <div className='flex flex-col mt-auto w-full'>  
            {/* row container */}
            <div className=' flex flex-row w-full'>

              {/* name */}
              <div className='flex flex-col font-bold text-white self-center ml-6 mb-6 m-xs:pr-6 '>
                <div className='lg:text-9xl md:text-8xl sm:text-5xl m-xs:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-aqua to-h-purple'>
                  Rishabh Vemparala
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg '>
                  Software Engineer and student at the University of Texas at Dallas
                </div>
              </div>

              {/* menu */}
              <div className='ml-auto lg:mr-60 mr-6 font-light lg:text-5xl md:text-4xl sm:flex flex-col hidden gap-1 self-center'>
                  <Link button={false} name={'Projects'} link={'#projects'}/>
                  <Link button={false} name={'Resume'} link={'#resume'}/>
                  <Link button={false} name={'Contact'} link={'#contact'}/>
              </div>
            </div>

            <div className='flex flex-row ml-auto mr-6 gap-8'>
              <a href="https://www.linkedin.com/in/rishabh-vemparala-8b6155205/" target="_blank" rel="noreferrer">
                <Image className='hover:scale-110 transition-transform ease-in-out hover:cursor-pointer m-xs:w-4' alt='#' src={linkedin}/>
              </a>
              <a href="https://github.com/rishixyz9" target="_blank" rel="noreferrer">
                <Image className='hover:scale-110 transition-transform ease-in-out hover:cursor-pointer m-xs:w-4' alt='#' src={gh} />
              </a>
            </div>
          </div>

          {/* border text */}
          <div className='flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6'>
              Rishabh Vemparala - 2023
            </div>
          </div>

        </div>


        
      </div> 
      <About />
      <Projects /> 
      <Resume />
      <Contact />
    </div>
  )
}