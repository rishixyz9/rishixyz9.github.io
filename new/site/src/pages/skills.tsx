import DownButton from '@/components/DownButton/DownButton'
import Carousel from '@/components/Carousel/Carousel'

export default function Skills() {
  return (
    <div className='flex flex-col w-full h-screen self-center text-white snap-center' id="skills">
        <div className='flex lg:flex-row flex-col lg:mt-[50vh] h-full'>
            <div className='flex flex-col p-6 xl:ml-48 '>
                <div className='font-bold sm:text-9xl text-6xl m-0'>
                    Skills
                </div>
                <div className='font-light text-lg '>
                    Technologies that I am confident using
                </div>
            </div>
            <div className='flex h-full w-full p-6 justify-center'>
                <Carousel />
            </div>
        </div> 
        <DownButton next={'#'}/>
    </div>
  )
}
