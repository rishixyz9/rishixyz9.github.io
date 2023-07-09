import Card from '@/components/Card/Card'
import {e1, e2} from '../data/exports'

export default function Projects() {

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="resume">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border-l'>
            <div className='flex flex-col p-6 mt-auto'>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem]'>
                    Places I worked
                </div>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Resume
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem] lg:mt-4 sm:mt-2 sm:w-1/2'>
                    This section highlights all the places I have worked and all the 
                    experience I have gained. Each place I worked filled me with 
                    a unique level of experience and afforded me the opportunity to 
                    work with great people.
                </div>
            </div>
            <div className='flex flex-wrap p-8 gap-8 items-center text-center'>
                <Card data={e1}/>
                <Card data={e2}/>
            </div>
        </div> 
        <div className='absolute flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6'>
                resume
            </div>
        </div>
    </div>
  )
}

