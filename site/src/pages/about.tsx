export default function About() {

    return (
        <div className='flex w-full h-screen min-h-max text-white snap-center pt-16 pb-16 justify-center' id="about">
            <div className='flex flex-col lg:flex-row self-center w-[calc(100vw-4rem)] min-h-full h-max rounded border-aqua border relative'>
                <div className='flex flex-col p-10 ml-auto mr-auto self-center mt-auto mb-auto z-10 relative overflow-hidden h-full'>
                    <div className='lg:text-9xl sm:text-8xl text-5xl mt-auto'>
                        Hi!👋
                    </div>
                    <div className='text-[#A8A8A8] font-light inline-block mb-auto md:text-2xl'>
                        I&#39;m Rishabh Vemparala, a Software Engineer currently pursuing <span className='text-aqua'>Computer Science</span> at the University of Texas at Dallas.
                        <br></br>
                        I&#39;ve got a solid background in Fullstack Web Development, AWS, and DevOps. Always on the lookout for exciting new technologies to dive into.
                        <br></br>
                        Outside of tech, I love spotting cool cars in the wild—currently cruising around in a 2023 Subaru <span className='tracking-wider font-bold text-[#0e4bef] italic drop-shadow-lg bg-blend-darken'>BRZ</span>
                    </div>
                </div>
                <div className='z-0 w-[calc(100%-4rem)] left-[2rem] top-[2rem] h-[calc(100%-4rem)] absolute bg-white opacity-30 abt'>
                </div>

            </div>
        </div>
    )
}
