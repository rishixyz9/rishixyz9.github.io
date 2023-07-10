import Card from '@/components/Card/Card'
import {e1, e2} from '../data/exports'

export default function Projects() {

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="resume">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border-r'>
            <div className='flex flex-col p-6 mt-auto'>
                <div className='text-right ml-auto text-[#A8A8A8] font-light text-sm sm:text-lg lg:pr-2 sm:pr-1 pr-[0.125rem]'>
                    Places I worked
                </div>
                <div className='text-right ml-auto lg:text-9xl sm:text-8xl text-5xl'>
                    Resume
                </div>
                <div className='text-right ml-auto text-[#A8A8A8] font-semibold text-sm sm:text-lg lg:pr-2 sm:pr-1 pr-[0.125rem] lg:mt-4 sm:mt-2 sm:w-1/2'>
                    This section highlights all the places I have worked and all the 
                    experience I have gained. Each place I worked filled me with 
                    a unique level of experience and afforded me the opportunity to 
                    work with great people.
                </div>
            </div>
            <div className='flex flex-wrap p-8 gap-8 items-center text-center ml-auto'>
                <Card data={e1}/>
                <Card data={e2}/>
            </div>
        </div> 
        <div className='right-8 absolute flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6 tracking-wide'>
                resume
            </div>
        </div>
    </div>
  )
}

