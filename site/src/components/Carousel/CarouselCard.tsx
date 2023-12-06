import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image'

export default function CarouselCard(props: any) {

    useEffect(() => {
        gsap.killTweensOf(".carousel-ref>*")
        gsap.fromTo(".carousel-ref>*", { opacity: 0 }, {
            delay: 0.2,
            duration: .8,
            stagger: 0.4,
            opacity: 1,
            ease: 'none',
        })
    }, [props.data])

    return (
        <div className='flex bg-transparent text-white p-2 rounded-md w-full'>
            <div className='carousel-ref flex flex-wrap w-full justify-between'>
                {props.data.map((item: any, key: any) =>
                    <div className='p-2 text-sm sm:text-md lg:text-xl font-light text-center flex flex-col' key={key}>
                        {item[0]}

                        <Image alt='#' className='text-white fill-current w-[128px] aspect-square self-center justify-center overflow-hidden object-cover object-center mt-auto' src={item[1]} />
                    </div>
                )}
            </div>

        </div>

    )
}
