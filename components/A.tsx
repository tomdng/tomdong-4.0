import React from "react"

import { TextProps } from "../types"

interface AProps extends TextProps {
  href: string
}

const A: React.FC<AProps> = ({ children, href }) => {
  return (
    <a href={href} className="underline text-darkGreen dark:text-lightGreen">
      {children}
    </a>
  )
}

export default A
