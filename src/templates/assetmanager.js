import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundCurve from "../assets/img/product-bg.svg"

export const pageQuery = graphql`
  query AssetManagerQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AssetManagerPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={excerpt} />
      <div className="relative pt-6 sm:pt-12 lg:pt-24 xl:pt-12/100 mt-20 xl:mt-0 pb-64">
        <img
          className="w-full absolute -z-1 top-56 lg:top-0 pb-20"
          src={BackgroundCurve}
          alt="Background curve shape"
        />
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default AssetManagerPage
