import Head from 'next/head'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4, p5} from '../data/exports'
import { useState, useRef } from 'react'

export default function Contact() {

    const bgparallax = useRef<any>(null)
    const name = useRef<any>(null)
    const email = useRef<any>(null)
    const reason = useRef<any>(null)

    const submit = () => {
        console.log(name.current.value, email.current.value, reason.current.value)

    }

  return (
    <div className='flex flex-col w-full h-screen text-white snap-center' id="contact">
        <div className='flex flex-col sm:p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full m-16 rounded  border-aqua border'>
            <div className='flex flex-col p-6 xl:ml-48 self-center mt-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Get in contact with me
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg'>
                    fill out the form to reach out to me!
                </div>
            </div>
            <div className='w-[calc(15rem+15vw)] self-center  gap-6 flex flex-col p-6 mb-auto'>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="fname" name="fname" placeholder='name' ref={name}></input>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="email" name="email" placeholder='email' ref={email}></input>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="reason" name="email" placeholder='reason for reaching out' ref={reason}></input>
                <div className='h-6 bg-h-purple text-white link rounded' onClick={() => submit()}>
                    <Link button={true} link={'/'} name={'Submit'}/>
                </div>
                
            </div>
        </div> 
    </div>
  )
}
