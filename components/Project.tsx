import React from "react"

import A from "./A"

interface ProjectProps {
  title: string
  desc: string[]
  link: string
}

const Project: React.FC<ProjectProps> = ({ title, desc, link }) => {
  return (
    <div className="mb-4">
      <h2 className="mb-2 font-sans font-medium text-base lg:text-lg text-darkGreen dark:text-lightGreen underline">
        <A href={link}>{title}</A>
      </h2>
      {desc.map((desc) => (
        <p className="mb-2 font-sans font-normal text-base" key={desc}>
          {desc}
        </p>
      ))}
    </div>
  )
}

export default Project
