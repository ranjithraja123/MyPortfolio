"use client"
import React from 'react';
import Image from 'next/image';
import devImage from '../../../public/images/dev_port.png';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="py-8 lg:py-1">
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                <div className='col-span-1 lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <div className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                            Hello, I&rsquo;m {" "}
                        </div>
                        <TypeAnimation
                            sequence={[
                                'Ranjith Kumar Raja',
                                1000,
                                'Web Developer',
                                1000,
                                'Application Developer',
                                1000,
                                'MERN Stack Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                        Experienced in MongoDB, Express.js, React, and Node.js, I build scalable and interactive web applications. I specialize in creating seamless user experiences and integrating robust back-end solutions. Let&rsquo;s bring your ideas to life with cutting-edge technology!
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                            <span>Download CV</span>
                        </button>
                    </div>
                </div>

                <div className='col-span-1 lg:col-span-5 flex justify-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center'>
                        <div className='relative left-[-50px]'>
                            <Image src={devImage} alt='hero image' className='rounded-full' width={310} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
