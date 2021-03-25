import React from "react"

import { TextProps } from "../types"

const H1: React.FC<TextProps> = ({ children }) => {
  return <h1 className="font-serif text-4xl">{children}</h1>
}

export default H1
