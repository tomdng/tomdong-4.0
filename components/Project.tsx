import React from "react"

interface ProjectProps {
  title: string
  desc: string[]
  link: string
}

const Project: React.FC<ProjectProps> = ({ title, desc, link }) => {
  return (
    <div className="mb-4">
      <h6 className="mb-2 font-sans font-medium text-base text-darkGreen dark:text-lightGreen underline">
        <a href={link}>{title}</a>
      </h6>
      {desc.map((desc) => (
        <p className="mb-2 font-sans text-base" key={desc}>
          {desc}
        </p>
      ))}
    </div>
  )
}

export default Project
