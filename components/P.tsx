import React from "react"

import { TextProps } from "../types"

const P: React.FC<TextProps> = ({ className, children }) => {
  return <p className={`font-serif text-xl ${className}`}>{children}</p>
}

export default P
