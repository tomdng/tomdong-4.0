import React from "react"

import { TextProps } from "../types"

interface AProps extends TextProps {
  href: string
}

const A: React.FC<AProps> = ({ className, children, href }) => {
  return (
    <a
      href={href}
      className={`font-medium underline text-darkGreen dark:text-lightGreen ${className}`}
      target="blank"
    >
      {children}
    </a>
  )
}

export default A
