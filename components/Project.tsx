import React from "react"

interface ProjectProps {
  title: string
  desc: string[]
  link: string
}

const Project: React.FC<ProjectProps> = ({ title, desc, link }) => {
  return (
    <div>
      <h6 className="font-sans font-medium text-base text-darkGreen dark:text-lightGreen underline">
        <a href={link}>{title}</a>
      </h6>
      {desc.map((desc) => (
        <p className="font-sans">{desc}</p>
      ))}
    </div>
  )
}

export default Project
