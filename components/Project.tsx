import React from "react"

interface ProjectProps {
  title: string
  desc: string
  desc1?: string
  desc2?: string
  link: string
}

const Project: React.FC<ProjectProps> = ({
  title,
  desc,
  desc1,
  desc2,
  link,
}) => {
  return (
    <div>
      <h6 className="font-sans font-medium text-base text-darkGreen dark:text-lightGreen underline">
        <a href={link}>{title}</a>
      </h6>
      <p className="font-sans">{desc}</p>
      {desc1 ? <p>{desc1}</p> : null}
      {desc2 ? <p>{desc2}</p> : null}
    </div>
  )
}

export default Project
