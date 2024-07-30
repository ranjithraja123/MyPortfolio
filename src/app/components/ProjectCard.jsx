import React from 'react'

const ProjectCard = ({title,description,image,gitUrl,previewUrl}) => {
  return (
    <div className="card bg-base-100 w-98 shadow-xl">
            {/* <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure> */}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-black bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">Get Code</button>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard
