import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import "../assets/css/index.css"
import Footer from "./footer"
import "typeface-nunito"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

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
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
