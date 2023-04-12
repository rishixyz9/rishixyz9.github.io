import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {e1, e2} from '../data/exports'

export default function Resume() {
  return (
    <div className='flex flex-col w-full h-screen self-center text-white snap-center' id="resume">
        <div className='flex lg:flex-row flex-col lg:mt-[50vh] h-full w-full'>
            <div className='flex flex-col p-6 xl:ml-48 '>
                <div className='font-bold sm:text-9xl text-6xl m-0'>
                    Experience
                </div>
            </div>
            <div className='h-full w-full self-center'>
                <div className='2xl:ml-48 max-h-96 overflow-y-auto space-y-6 scrollable lg:mr-6 m-6 self-center'>
                    <div className='h-96 self-center mr-1 flex snap-center'>
                        <Card data={e1}/>
                    </div>
                    <div className='h-96 self-center mr-1 flex snap-center'>
                        <Card data={e2}/>
                    </div>
                </div>

            </div>
        </div> 
        <DownButton next={'skills'}/>
    </div>
  )
}
