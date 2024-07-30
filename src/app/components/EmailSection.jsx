import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 '>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>
            Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            I'm currently looking for new oppurtunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href='github.com'><FaGithub/></Link>
            <Link href='linkedin.com'><FaLinkedin/></Link>

        </div>
      </div>
      <div>
        <form className='flex flex-col gap-4'>
            <div className='mb-6'>
                
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium' type='email'>Your Email</label>
            <input type='email' id='email' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Enter email'/>
            </div>

            <div className='mb-6'>

            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium' type='email'>Subject</label>
            <input type='text' id='subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Enter Subject'/>
       

            </div>

            <div className='mb-6'>

            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium' type='email'>Subject</label>
            <textarea name='message'  id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Lets talk about ....'  />  

            </div>
            <button type='submit' className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 font-medium py-2.5 px-5 rounded-lg w-full'>
                Send Message
            </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
