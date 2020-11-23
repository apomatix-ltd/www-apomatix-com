import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout className="page">
      <section className="container mx-auto mt-20">
      <div className="mb-10">  
        <h1 className="text-4xl">{title}</h1>  
      </div>
      
      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {!!nextPage && (
        <Link to={normalizePath('/blog' + nextPage.uri)}>Next: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath('/blog' + previousPage.uri)}>
          Previous: {previousPage.title}
        </Link>
      )}
      </section>
    </Layout>
  )
}

export default BlogPost
