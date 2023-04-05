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
        <div className='w-full flex text-black bg-gray-300 rounded-md border-2 border-white p-6 flex-row'>
            <div className='basis-6/12 font-bold text-3xl flex flex-col p-2 h-full'>
                <div className='font-bold'>
                    {props.data.name}
                </div>
                <Image className="self-center justify-center h-full object-contain opacity-100 hover:scale-110 transition-transform hover:cursor-pointer" alt="" src={props.data.img} />
                
            </div>
            <div className='p-6 basis-6/12 text-black font-semibold bg-gray-200 rounded-md border-white flex flex-col'>
                {props.data.desc.map((item, key) => 
                    <div className='mb-2' key={key}>{item}</div>
                )} 
                <div className='w-fit bg-black mt-auto rounded'>
                    <Link name={'visit repo'} link={props.data.link}/>
                </div>
                
            </div>
        </div>

    )
}
