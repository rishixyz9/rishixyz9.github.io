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
    <div className='h-full relative'>
        <Image 
            className="z-0 top-0 h-full w-full self-center justify-center object-cover rounded-md absolute bg-slate-400" 
            alt="" src={props.data.img} draggable="false" 
        />
        <div className='m-xs:hidden flex flex-col absolute top-0 h-full w-full opacity-0 bg-black/75 backdrop-blur-[7.5px] hover:opacity-100 transition-all ease-in-out p-6 text-aqua'>
            <div className='md:text-2xl lg:text-4xl text-center mt-auto font-bold'>{props.data.name}</div>
            <div className='text-sm lg:text-lg mb-auto font-medium'>
                {props.data.desc.map((item, key) => 
                    <div className='mt-auto m-xs:hidden' key={key}>{item}</div>
                )} 
            </div>
            {props.data.link && 
            <div className='w-fit bg-black m-xs:mt-0 sm:mt-auto rounded'>
                <Link button={false} name={'visit repo'} link={props.data.link}/>
            </div>}
        </div>
        <a className='m-xs:flex hidden top-0 h-full w-full absolute z-10' href={props.data.link} target="_blank" rel="noreferrer"></a>
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