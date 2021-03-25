import React from "react"

import { TextProps } from "../types"

const SmallText: React.FC<TextProps> = ({ children }) => {
  return <span className="text-xs">{children}</span>
}

export default SmallText
