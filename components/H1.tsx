import React from "react"

import { TextProps } from "../types"

const H1: React.FC<TextProps> = ({ className, children }) => {
  return <h1 className={`mb-4 font-serif text-4xl ${className}`}>{children}</h1>
}

export default H1
