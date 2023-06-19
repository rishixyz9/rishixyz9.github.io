import Head from 'next/head'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4, p5} from '../data/exports'

export default function Projects() {

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="projects">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border'>
            <div className='flex flex-col p-6 self-center align-middle mt-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Projects
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg'>
                    Cool things I built
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 self-center p-8 gap-8 items-center text-center'>
                <Card data={p1}/>
                <Card data={p2}/>
                <Card data={p3}/>
                <Card data={p4}/>
                <Card data={p5}/>
            </div>
        </div> 
    </div>
  )
}
