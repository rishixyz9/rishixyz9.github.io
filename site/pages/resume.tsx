import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Skill from '../components/Skill'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import {exp1, exp2, proj1, proj2, proj3, proj4, skills} from '../lib/exports'
import { useState } from 'react'

export default function Resume() {

    const [view, setView] = useState(0)

    const handleClick = (side:string) => {
        if(side === "left"){
            if(view == 0){
                setView(4)
            }
            else{
                setView(Math.abs(view-1)%5)
            }
        }
        else{
            setView(Math.abs(view+1)%5)
        }
    }

  return (
    <div className='w-screen h-screen overflow-scroll scroll-smooth'>
      <Navbar />

      {/* Experience */}
      <div className='mt-[10vh] p-10 text-3xl font-bold text-white'>
        Experience
      </div>
      <div className='flex lg:flex-row lg:h-[55%] h-[auto] flex-col gap-5 p-10 w-screen'>
        <Card className={'basis-1/2 w-[full]'} data={exp1}/>
        <Card className={'basis-1/2 w-[full]'} data={exp2}/>
      </div>

      {/* Projects */}
      <div className='pl-10 p-5 text-3xl font-bold text-white'>
        Projects
      </div>
      <div className='flex lg:flex-row lg:h-[55%] h-[auto] flex-col gap-5 p-10 w-screen'>
        <Card className={'basis-1/2'} data={proj1}/>
        <Card className={'basis-1/2'} data={proj2}/>
      </div>
      <div className='flex lg:flex-row lg:h-[55%] h-[auto] flex-col gap-5 p-10  w-screen'>
        <Card className={'basis-1/3 p-5'} data={proj3}/>
        <Card className={'basis-2/3 p-5'} data={proj4}/>
      </div>

      {/* Skills */}
      <div className='pl-10 p-5 text-3xl font-bold text-white'>
        Skills
      </div>
      <div className='flex flex-row lg:h-[50%] h-[auto] gap-5 p-10  w-screen'>
        <BsFillArrowLeftCircleFill className="self-center w-[10%] h-[10%] text-[#ffffffc0] hover:cursor-pointer hover:text-[#ffffff]" onClick={()=>handleClick("left")} />
        <div className='flex lg:flex-row h-[100%] flex-col gap-5 p-10  w-screen'>
            {skills[view].map((skill, key) => {
                return(
                <Skill key={key} className={'basis-1/4'} data={skill}/>
                )
            })}
        </div>
        <BsFillArrowRightCircleFill className="self-center w-[10%] h-[10%] text-[#ffffffc0] hover:cursor-pointer hover:text-[#ffffff]" onClick={()=>handleClick("right")} />
      </div>


    </div>
  )
}
