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
      <h6 className="mb-2 font-sans font-medium text-base text-darkGreen dark:text-lightGreen underline">
        <A className="font-semibold" href={link}>
          {title}
        </A>
      </h6>
      {desc.map((desc) => (
        <p className="mb-2 font-sans font-normal text-base" key={desc}>
          {desc}
        </p>
      ))}
    </div>
  )
}

export default Project
