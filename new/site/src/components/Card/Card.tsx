import React from 'react';
import styles from './card.module.css'
import Image, { StaticImageData } from 'next/image'
import logo from '../../../public/simplifarm.png'
import Link from '../Link/Link';
import CardObject from '@/data/exports';

interface Props {
    data: CardObject
}

export default function Card(props: Props) {

    return (
        <div className='flex-none w-72 h-72 sm:w-96 sm:h-96 2xl:w-[48rem] 2xl:h-[48rem] text-black bg-slate-800 rounded-md self-center snap-center card'>
            <Image 
                className="w-72 h-36 sm:w-96 sm:h-48 2xl:w-[96rem] 2xl:h-[24rem] flex rounded-t-md self-center justify-center object-contain hover:cursor-pointer" 
                alt="" src={props.data.img} draggable="false" 
            />
            <div className='p-2 h-36 sm:h-48 2xl:h-[24rem] text-black text-sm 2xl:text-xl font-light bg-gray-200 rounded-b-md border-white flex flex-col overflow-y-scroll'>
                <div className='font-bold text-lg 2xl:text-3xl'>{props.data.name}</div>
                {props.data.desc.map((item, key) => 
                    <div className='mt-auto' key={key}>{item}</div>
                )} 
                {props.data.link && 
                <div className='w-fit bg-black mt-auto rounded'>
                    <Link name={'visit repo'} link={props.data.link}/>
                </div>}
                
            </div>
        </div>

    )
}


{/* <div className='w-full flex text-black bg-gray-300 rounded-md border-2 border-white p-6 flex-col sm:flex-row'>
<div className='basis-6/12 h-[50%] font-bold sm:text-3xl text-xl flex flex-col p-2 sm:h-full'>
    <div className='hidden sm:block font-bold'>
        {props.data.name}
        {props.data.position && 
        <div className='text-2xl font-light'>
            {props.data.position}
        </div>}
    </div>
    <Image 
        className="flex rounded-md self-center justify-center object-contain h-full hover:scale-110 transition-transform hover:cursor-pointer" 
        alt="" src={props.data.img} 
    />
    
</div>
<div className='p-6 basis-6/12 text-black font-semibold bg-gray-200 rounded-md border-white flex flex-col overflow-y-scroll'>
    {props.data.desc.map((item, key) => 
        <div className='mb-2' key={key}>{item}</div>
    )} 
    {props.data.link && 
    <div className='w-fit bg-black mt-auto rounded'>
        <Link name={'visit repo'} link={props.data.link}/>
    </div>}
    
</div>
</div> */}