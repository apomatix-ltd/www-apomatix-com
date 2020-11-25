import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import { format } from 'date-fns'
import SEO from "../components/seo"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, author, date, featuredImage, categories } = page
 
  var cat = "";    
  categories.nodes.forEach(n => cat += n.name);

  return (
    <Layout className="page">
  
      <section className="container mx-auto mt-32">
      <div className="mb-10">  
        <h1 className="text-4xl">{title}</h1> 
        <h2 className="text-1xl"><b>Author:</b> {author.node.firstName + ' ' + author.node.lastName}</h2>
        <h3 className="text-1xl"><b>Published:</b> {format(new Date(date), 'PPPPpp')}</h3>
        <h3 className="text-1xl"><b>Categories:</b> {cat}</h3>
      </div>
        <div className="text-center mb-10">
          <Img
            resolutions = {featuredImage.node.localFile.childImageSharp.resolutions}
          />
        </div>
      <div className="leading-8">
      <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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
