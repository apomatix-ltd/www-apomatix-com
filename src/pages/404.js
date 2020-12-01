import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <section className="container mx-auto mt-32">
    <SEO 
      title="Page not found"
      description = "Page not found check the url to see if its correct"  
    />
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <h1>Oops we did not expect that to happen</h1>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Back to Homepage</Link>
      <Link to="/contact" className="button -outline">Report this <RiBugLine className="icon -right"/></Link>
    </div>
    </section>
  </Layout>
)

export default NotFound