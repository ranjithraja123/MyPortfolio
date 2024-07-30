import Image from 'next/image'
import React from 'react'
import about from '../../../public/images/purple_about.jpg'

const AboutSection = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-4 rounded-lg shadow-md'>

                    {/* <p className='text-white mt-2'>
                This is the content for the first column. You can add any content here like text, images, or other components.

                </p> */}
                    <Image src={about} alt='hero image' className='rounded-lg' />

                </div>

                <div className='p-4 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold text-white'>About Me</h2>
                    <p className='text-white mt-2' style={{ textAlign: 'justify' }}>
                        I am a skilled MERN stack developer with a passion for building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. My expertise spans frontend development with React, focusing on creating engaging user interfaces and implementing responsive design using Material-UI and Bootstrap, and backend development with Node.js and Express.js, where I build robust server-side applications and RESTful APIs. I am proficient in state management with Redux and database management with MongoDB, designing scalable schemas and optimizing queries. Additionally, I prioritize effective collaboration using Git for version control and have contributed to various projects, including real-estate platforms and e-commerce applications, continuously learning and adapting to new technologies to deliver high-quality software solutions.
                    </p>

                    <div role="tablist" className="tabs tabs-bordered mt-3">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab w-3" aria-label="Skills" defaultChecked />
                        <div role="tabpanel" className="tab-content p-1">
                            <ul className="list-disc list-inside text-white">
                                <li>Reactjs</li>
                                <li>NodeJs</li>
                                <li>ExpressJs</li>
                                <li>MongoDB</li>
                                <li>Postman</li>
                                <li>EJS</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Socket</li>
                                <li>Zustand</li>
                            </ul>
                        </div>
                        <input type="radio" name="my_tabs_1" role="tab" className="tab w-1/3" aria-label="Education" />
                        <div role="tabpanel" className="tab-content p-1">
                            <ul className="list-disc list-inside text-white">
                                <li>Bachelors in Information Technology</li>
                                <li>Masters in Advanced computer Science</li>
                               
                            </ul>
                        </div>
                        <input type="radio" name="my_tabs_1" role="tab" className="tab w-1/3" aria-label="Certifications" />
                        <div role="tabpanel" className="tab-content p-1">
                            <ul className="list-disc list-inside text-white">
                                <li>AWS Cloud Practitioner</li>
                                <li>AWS Solution </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default AboutSection
