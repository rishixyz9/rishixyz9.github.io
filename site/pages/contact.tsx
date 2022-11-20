import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar'
import ghlogo from '../public/github-logo.png'
import phone from '../public/phone-logo.png'
import mail from '../public/mail-logo.png'
import linkedin from '../public/linkedin-logo.png'
import { useState } from 'react'

export default function Home() {


    return (
        <div className='w-screen h-screen overflow-hidden scroll-smooth flex flex-col'>
            <Navbar />
            <div className='mt-[15vh] w-[100%] font-bold text-3xl pl-10 text-white text-center'>
                Contact Me
            </div>
            <div className='flex lg:flex-col flex-row'>
            <div className="flex flex-col bg-[#ffffff80] w-[50%] m-10 h-[20vh] rounded gap-5 p-5 text-white text-3xl font-bold break-all">
                <div>
                    Call me at 469-971-6426
                </div>
                <div>
                    Email me at reach2rishabh@rocketmail.com
                </div>
            </div>
            <div className='p-10 text-xl font-bold text-white flex flex-col lg:flex-row gap-6 lg:w-[100%] lg:self-center lg:-mt-16 float-left'>
                <div className="flex flex-row self-center gap-5 justify-center">
                    <a href="https://github.com/rishixyz9" target="_blank" rel="_noreferrer">
                        <Image className="self-center image rounded-md shadow-lg bg-[#ffffff80] p-2 rounded-lg" src={ghlogo} alt=""/>
                    </a>
                </div>
                <div className="flex flex-row self-center gap-5 justify-center"> 
                    <a href="https://www.linkedin.com/in/rishabh-vemparala-8b6155205/" target="_blank" rel="_noreferrer">
                        <Image className="self-center image rounded-md shadow-lg bg-[#ffffff80] p-2 rounded-lg" src={linkedin} alt=""/>
                    </a>
                </div>
            </div>
            </div>

        </div>
    )
}
