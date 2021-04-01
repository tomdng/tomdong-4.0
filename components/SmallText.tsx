import React from "react"

import { TextProps } from "../types"

const SmallText: React.FC<TextProps> = ({ children }) => {
  return <span className="text-sm">{children}</span>
}

export default SmallText
