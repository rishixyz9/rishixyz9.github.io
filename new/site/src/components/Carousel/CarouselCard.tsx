import React from 'react';
import { useState } from 'react';
import styles from './carousel.module.css'
import Image, { StaticImageData } from 'next/image'

export default function CarouselCard(props: any) {

    return (
        <div className='min-w-[100%] max-h-full bg-black text-white grid grid-cols-4 grid-rows-2 p-2 rounded-md justify-between'>
            {props.data.map((item:any, key:any) => 
                <div className='p-2 text-sm sm:text-md lg:text-xl font-light text-center flex flex-col h-full overflow-hidden' key={key}>
                    {item[0]}
                    
                    <Image alt='#' className='self-center justify-center overflow-hidden object-contain mt-auto' src={item[1]}/>
                </div>
            )} 
        </div>

    )
}
