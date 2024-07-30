import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id:1,
        title:"React Portfolio Website",
        description:"Developed a dynamic portfolio website using Next.js, showcasing my skills and projects with a sleek, responsive design. Integrated server-side rendering for optimal performance and SEO. Utilized modern CSS frameworks for styling and animations. Implemented a headless CMS for easy content management and updates.",
        image:"",
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Ayurvedhic Appointment",
        description:" Ayurvedic appointment booking system using React.js, providing users with a seamless interface to schedule consultations with Ayurvedic practitioners. The application includes features such as real-time availability, booking confirmations, and user-friendly navigation. Leveraging React's component-based architecture, the system ensures a responsive and efficient user experience.",
        image:"",
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:1,
        title:"CZapp (A Chat App)",
        description:"Developed a real-time chat application using ReactJS and Socket.IO, enabling seamless communication between users. Implemented user authentication, dynamic message broadcasting, and a responsive UI for an engaging user experience. Utilized Socket.IO for bi-directional communication and ReactJS for a component-based architecture. Ensured scalability and performance with efficient state management and WebSocket handling.",
        image:"",
        gitUrl:"/",
        previewUrl:"/"
    }
]

const ProjectSection = () => {
    return (
        
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-5'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-3 md:gap-2 mt-2'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectSection
