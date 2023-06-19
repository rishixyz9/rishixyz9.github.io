import Card from '@/components/Card/Card'
import {e1, e2} from '../data/exports'
import { useState, useRef } from 'react'

export default function Resume() {

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="resume">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border'>
            <div className='flex flex-col p-6 self-center align-middle mt-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Resume
                </div>
                <div className='text-[#A8A8A8] font-light text-lg'>
                    Places I worked
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 self-center p-8 gap-8 items-center text-center h-max'>
                <Card data={e1}/>
                <Card data={e2}/>
            </div>
        </div> 
    </div>
  )
}
