import Card from '@/components/Card/Card'
import {e1, e2} from '../data/exports'
import { useState, useRef } from 'react'

export default function Resume() {

    const scrollref = useRef<any>(null)
    const [scrolling, setScrolling] = useState(false)
    const [scrollx, setScrollx] = useState(0)
    const [clientx, setClientx] = useState(0)

    const onMouseDown = (e:any) => {
        setClientx(e.clientX);
        setScrolling(true);
    };
    
    const onMouseUp = (e:any) => {
        setScrolling(false)
    };

    const onMouseMove = (e:any)=> {
        if (scrolling) {
            const dx =   -1 * (e.clientX - clientx)
            if(dx >= 1){
                scrollref.current.scrollLeft = scrollx + scrollref.current.clientWidth 
            }
            else if(dx <= -1) {
                scrollref.current.scrollLeft = scrollx - scrollref.current.clientWidth
            }
            
            setScrollx(scrollref.current.scrollLeft);
            setClientx(e.clientX);
        }
    };

  return (
    <div className='flex flex-col w-full h-screen text-white snap-center' id="resume">
        <div className='flex flex-col-reverse lg:flex-row sm:p-6 pr-0 self-center w-[calc(100vw-4rem)] h-full m-16 rounded border-aqua border'>
            
            <div className='grid overflow-hidden grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-auto w-full h-[calc(100vh-24rem)] self-center p-8 gap-2 object-center'>
                <Card data={e1}/>
                <Card data={e2}/>
            </div>
            <div className='flex flex-col p-6 self-center lg:ml-auto'>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Resume
                </div>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:ml-auto'>
                    Places I have worked
                </div>
            </div>

        </div> 
    </div>
  )
}
