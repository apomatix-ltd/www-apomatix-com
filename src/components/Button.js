import React from "react"

const Button = props => {
  let baseStyle =
    "px-6 border border-white rounded h-8 transition duration-300 ease-out uppercase text-xs tracking-wider font-bold leading-7"
  let additionalStyle = ""
  if (props.type === "primary") {
    additionalStyle =
      " text-branding bg-white hover:bg-branding hover:text-white"
    if (props.outline) {
      additionalStyle = additionalStyle + " border-branding"
    }
  }

  if (props.type === "secondary") {
    additionalStyle = " text-white hover:bg-white hover:text-branding"
  }
  return (
    <button className={baseStyle + additionalStyle}>{props.children}</button>
  )
}

export default Button
