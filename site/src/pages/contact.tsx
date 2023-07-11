import Link from '@/components/Link/Link'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const name = useRef<any>(null)
    const email = useRef<any>(null)
    const reason = useRef<any>(null)

    const submit = () => {      
        emailjs
          .send(
            'service_x9ir7lk',
            'template_nml18ld',
            {
              from_name: name.current.value,
              to_name: "robonaut5",
              from_email: email.current.value,
              to_email: "robonaut5v@gmail.com",
              message: reason.current.value,
            },
            'juCu_fvhlFlp8CFD8'
          )
          .then(
            () => {
              alert("Thank you. I will get back to you as soon as possible.");
              name.current.value = ""
              email.current.value = ""
              reason.current.value = ""
            },
            (error) => {
              console.error(error);
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };

  return (
    <div className='flex flex-col w-full h-max text-white snap-center p-8 pt-16 pb-16' id="resume">
        <div className='flex flex-col sm:p-6 self-center w-full h-max rounded  border-aqua border-l'>
            <div className='flex flex-col p-6 mt-auto'>
                <div className='text-[#A8A8A8] font-light text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem]'>
                    Interested?
                </div>
                <div className='lg:text-9xl sm:text-8xl text-5xl'>
                    Contact Me
                </div>
                <div className='text-[#A8A8A8] font-semibold text-sm sm:text-lg lg:pl-2 sm:pl-1 pl-[0.125rem] lg:mt-4 sm:mt-2 sm:w-1/2'>
                    Feel free to fill out the form if you have any questions or want to 
                    reach out to me for any reason, and I will respond as early as possible
                </div>
            </div>
            <div className='w-[calc(15rem+15vw)] self-center  gap-6 flex flex-col p-6 mb-auto'>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="fname" name="fname" placeholder='name' ref={name}></input>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="email" name="email" placeholder='email' ref={email}></input>
                <input className="text-black w-full rounded-sm pl-2 focus:outline-aqua outline-none transition-all ease-in-out" type="text" id="reason" name="email" placeholder='reason for reaching out' ref={reason}></input>
                <div className='h-6 bg-h-purple text-white link rounded' onClick={() => submit()}>
                    <Link button={true} link={'/'} name={'Submit'}/>
                </div>       
            </div>
        </div> 
        <div className='absolute flex items-center mb-6 mt-6 ml-auto text-white border-text align-middle w-[1px] text-sm'>
            <div className='inline-block bg-[#0B0E17] pt-6 pb-6 tracking-wide'>
                contact
            </div>
        </div>
    </div>
  )
}
