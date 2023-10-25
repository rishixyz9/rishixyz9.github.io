import Head from 'next/head'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4, p5, p6} from '../data/exports'

export default function Projects() {

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="projects">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border-l'>
            <div className='flex flex-col p-6 mt-auto'>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem]'>
                    Cool things I built
                </div>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Projects
                </div>
                <div className='text-[#A8A8A8] font-semibold text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem] lg:mt-4 sm:mt-2 sm:w-1/2'>
                    This section is a display of all the different kinds of projects I have built. 
                    With each project, I aim to learn a different kind of technology and aim to solve 
                    a real world problem. So, hold onto your imagination and prepare to be dazzled by 
                    the remarkable collection of my ingenious endeavors!
                </div>
            </div>
            <div className='flex flex-wrap p-8 gap-8 items-center text-center'>
                <Card data={p1}/>
                <Card data={p2}/>
                <Card data={p3}/>
                <Card data={p4}/>
                <Card data={p5}/>
                <Card data={p6}/>
            </div>
        </div> 
        <div className='absolute flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6 tracking-wide'>
                projects
            </div>
        </div>
    </div>
  )
}
