import Carousel from '@/components/Carousel/Carousel'

export default function Skills() {

  return (
    <div className='hidden md:flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="projects">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border-l'>
            <div className='flex flex-col p-6 mt-auto'>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem]'>
                    Technologies I am good at
                </div>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Skills
                </div>
                <div className='text-[#A8A8A8] font-semibold text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem] lg:mt-4 sm:mt-2 sm:w-1/2'>
                    This section is a display of all the different kinds of technologies I am confident using. I have used these technologies in both industry and non industry settings, and have a good understanding of how they work.
                </div>
            </div>
            <div className='flex flex-wrap p-8 gap-8 items-center text-center'>
                <Carousel />
            </div>
        </div> 
        <div className='absolute flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6 tracking-wide'>
                skills
            </div>
        </div>
    </div>
  )
}