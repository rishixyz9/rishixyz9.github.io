import Head from 'next/head'
import Link from '@/components/Link/Link'
import MenuLink from '@/components/Link/MenuLink'
import DownButton from '@/components/DownButton/DownButton'
import Card from '@/components/Card/Card'
import {p1, p2, p3, p4} from '../data/exports'

export default function Projects() {
  return (
    <div className='flex flex-col w-full min-h-screen text-white snap-center' id="projects">
        <div className='flex lg:flex-row flex-col mt-auto'>
            <div className='flex flex-col p-6 xl:ml-48 self-center'>
                <div className='font-bold sm:text-9xl text-6xl m-0'>
                    Projects
                </div>
                <div className='font-light text-lg '>
                Cool things I built
                </div>
            </div>
            <div className='h-full w-full'>
                <div className='max-h-80 grid 2xl:grid-cols-2 grid-cols-1 overflow-y-auto gap-y-6 lg:mr-6 m-6 snap-mandatory snap-y scroll-smooth'>
                    <Card data={p1}/>
                    <Card data={p2}/>
                    <Card data={p3}/>
                    <Card data={p4}/>
                </div>

            </div>
        </div> 
    </div>
  )
}
