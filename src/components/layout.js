import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import "../assets/css/index.css"
import Footer from "./footer"

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

  return (
    <div>
      <Navigation />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
