import React from "react"

import { TextProps } from "../../../types"

/**
 * @deprecated 
 */
const P: React.FC<TextProps> = ({ className, children }) => {
  return (
    <p className={`font-serif text-xl lg:text-2xl ${className}`}>{children}</p>
  )
}

export default P
