import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div>
    <Link to="/">{props.title}</Link>
  </div>
)

export default Logo
