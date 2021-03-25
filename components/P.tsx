import React from "react"

import { TextProps } from "../types"

const P: React.FC<TextProps> = ({ children }) => {
  return <p className="font-serif text-xl">{children}</p>
}

export default P
