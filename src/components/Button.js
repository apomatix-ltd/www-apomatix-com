import React from "react"

const Button = props => {
  let baseStyle =
    "px-6 border border-white rounded h-8 transition duration-300 ease-out uppercase text-xs tracking-wide font-bold leading-6"
  let additionalStyle = ""
  if (props.type === "primary") {
    additionalStyle =
      " text-branding bg-white hover:bg-branding hover:text-white"
  }

  if (props.type === "secondary") {
    additionalStyle = " text-white hover:bg-white hover:text-branding"
  }
  return (
    <button className={baseStyle + additionalStyle}>{props.children}</button>
  )
}

export default Button
