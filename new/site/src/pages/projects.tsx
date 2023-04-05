import Head from 'next/head'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3} from '../data/exports'

export default function Projects() {
  return (
    <div className='flex flex-col w-full h-screen self-center text-white snap-center' id="projects">
        <div className='flex flex-row'>
            <div className='flex flex-col p-6 ml-48 mt-[50vh]'>
                <div className='font-bold text-9xl m-0'>
                    Projects
                </div>
                <div className='font-light text-lg '>
                Cool things I built
                </div>
            </div>
            <div className='h-full w-full'>
                <div className='ml-48 mt-[50vh] max-h-96 overflow-y-auto space-y-6 scrollable mr-6'>
                    <div className='h-96 self-center mr-1 flex snap-center'>
                        <Card data={p1}/>
                    </div>
                    <div className='h-96 self-center mr-1 flex snap-center'>
                        <Card data={p2}/>
                    </div>
                    <div className='h-96 self-center mr-1 flex snap-center'>
                        <Card data={p3}/>
                    </div>
                </div>

            </div>
        </div> 
        <DownButton next={'projects'}/>
    </div>
  )
}
