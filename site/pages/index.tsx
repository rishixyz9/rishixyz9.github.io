import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import {exp1, exp2, proj1, proj2, proj3, proj4, proj5} from '../lib/exports'

export default function Home() {

  return (
    <div className='w-screen h-screen bg-neutral-800 overflow-scroll'>
      <Navbar />
      <div className='pl-10 p-5 text-3xl font-bold text-white'>
        Experience
      </div>
      <div className='flex md:flex-row md:h-[50%] flex-col gap-5 p-10  w-screen'>
        <Card className={'basis-1/2 h-[100%]'} data={exp1}/>
        <Card className={'basis-1/2 h-[100%]'} data={exp2}/>
      </div>
      <div className='pl-10 p-5 text-3xl font-bold text-white'>
        Projects
      </div>
      <div className='flex md:flex-row md:h-[55%] flex-col gap-5 p-10  w-screen'>
        <Card className={'basis-1/2 h-[100%]'} data={proj1}/>
        <Card className={'basis-1/2 h-[100%]'} data={proj2}/>
      </div>
      <div className='flex md:flex-row md:h-[55%] flex-col gap-5 p-10  w-screen'>
        <Card className={'basis-1/4 h-[100%] p-5'} data={proj3}/>
        <Card className={'basis-1/2 h-[100%] p-5'} data={proj4}/>
        <Card className={'basis-1/4 h-[100%] p-5'} data={proj5}/>
      </div>
    </div>
  )
}
