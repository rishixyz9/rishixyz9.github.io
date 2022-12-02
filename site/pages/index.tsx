import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import pic from '../public/self-pic.jpg'

export default function Home() {

  return (
    <div className='w-screen h-screen overflow-hidden scroll-smooth'>
      <Navbar />


      
      <div className='flex flex-col lg:flex-row w-screen mt-[15vh] lg:mt-[10vh] h-[90vh] p-10 gap-10'>

        {/* TypeWriter */}
        <div className='font-bold self-center text-xl md:text-3xl lg:text-5xl lg:basis-3/4 z-0'>
          <div className='typewriter'>
            <div className='typewriter-prefix text-white'>I am a</div>
            <ul className='typewriter-elements pl-3 text-[#09c7c7]'>
                <li><span className='w-full h-[100%]'>Student at UT Dallas</span></li>
                <li><span className='w-full h-[100%]'>Fullstack Developer</span></li>
                <li><span className='w-full h-[100%]'>Car Enthusiast</span></li>
            </ul>
          </div>
        </div>

        <div className='lg:basis-1/4 flex flex-col self-center text-center gap-10 w-[100%]'>
          <Image className="self-center rounded-full w-[10rem] h-[10rem] md:w-[20vw] md:h-[20vw]" src={pic} alt=""/>
          <div className='font-bold text-3xl self-center text-white'>
            Learn More About Me!
          </div>
          <Link href="/resume" className='self-center button border-2 border-[#777777] text-lg w-[75%] rounded-full text-[#efefef] bg-[#77777780] p-5 navitem'> Take Me There!</Link>
        </div>

      </div>

    </div>
  )
}
