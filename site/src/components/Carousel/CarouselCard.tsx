import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './carousel.module.css'
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image'

export default function CarouselCard(props: any) {

    const contentRef = useRef(null)

    gsap.from(contentRef.current, {
        duration: .1,
        opacity: 0,
        ease: 'none',
    })

    useEffect(() => {
        gsap.to(contentRef.current, {
            duration: .1,
            opacity: 1,
            ease: 'none',
        })
    }, [props.data])

    return (
        <div className='flex bg-transparent text-white p-2 rounded-md w-full'>
            <div className='flex flex-wrap w-full justify-between' ref={contentRef}>
                {props.data.map((item:any, key:any) => 
                    <div className='p-2 text-sm sm:text-md lg:text-xl font-light text-center flex flex-col' key={key}>
                        {item[0]}
                        
                        <Image alt='#' className='w-[128px] aspect-square self-center justify-center overflow-hidden object-contain mt-auto' src={item[1]}/>
                    </div>
                )} 
            </div>

        </div>

    )
}
