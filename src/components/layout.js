import React, { useEffect } from "react"
import Navigation from "./navigation"
import "../assets/css/index.css"
import Footer from "./footer"
import "typeface-nunito"

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.load()
    } else {
      var hubspot = document.createElement("script")
      hubspot.src = "//js.hs-scripts.com/5098618.js"
      hubspot.setAttribute("async", "")
      hubspot.setAttribute("defer", "")
      document.head.appendChild(hubspot)
    }
  }, [])

  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
