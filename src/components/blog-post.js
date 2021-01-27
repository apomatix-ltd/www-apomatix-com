import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import { format } from "date-fns"
import SEO from "../components/seo"
import Button from "../components/Button"
import { graphql, useStaticQuery } from "gatsby"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, author, date, featuredImage, categories } = page

  const imageData = useStaticQuery(graphql`
    query {
      contactImg: file(relativePath: { eq: "meeting.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1903
            maxHeight: 400
            quality: 80
            fit: OUTSIDE
            duotone: { highlight: "#0b82a4", shadow: "#022e39", opacity: 70 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
          sizes {
            src
            srcSet
            base64
          }
        }
      }
    }
  `)

  var cat = ""
  categories.nodes.forEach(n => (cat += " " + n.name))

  return (
    <Layout className="page">
      <SEO
        title={title}
        description={title}
        article={title}
        image={featuredImage.node.localFile.childImageSharp.resolutions}
      />
      <section className="container mx-auto mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-1 sm:col-span-8 sm:col-start-3 mb-12 px-4">
            <h1 className="text-3xl mb-5">{title}</h1>
            <h3 className="text-lg">
              <b>Published:</b> {format(new Date(date), "PPP")}
            </h3>
            {author.node && author.node && author.node.firstName && (
              <h2 className="text-lg">
                <b>Author:</b>{" "}
                {author.node.firstName + " " + author.node.lastName}
              </h2>
            )}
            <h3 className="text-lg">
              <b>Categories:</b> {cat}
            </h3>
          </div>

          <div className="col-span-1 sm:col-span-8 sm:col-start-3 px-4 mb-10">
            <Img
              className="w-full"
              fluid={featuredImage.node.localFile.childImageSharp.fluid}
              alt={"Blog Featured Image " + title}
            />
          </div>

          <div className="col-span-1 sm:col-span-8 sm:col-start-3 leading-7 px-4 sm:text-xl">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="blog-post"
            />
          </div>

          <div className="col-span-1 sm:col-span-8 sm:col-start-3 px-4 flex flex-col text-lg text-branding">
            {!!nextPage && (
              <Link
                className="mt-10 hover:underline"
                to={normalizePath("/blog" + nextPage.uri)}
              >
                Next: {nextPage.title}
              </Link>
            )}
            {!!previousPage && (
              <Link
                className="my-4 hover:underline"
                to={normalizePath("/blog" + previousPage.uri)}
              >
                Previous: {previousPage.title}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="text-white relative my-20">
        <Img
          fluid={imageData.contactImg.childImageSharp.fluid}
          className="w-full object-cover"
          style={{ zIndex: "-1", position: "absolute", height: "100%" }}
        />
        <div className="container mx-auto z-10 pt-24 pb-18">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 md:col-span-8 px-4 text-center md:text-left">
              <h2 className="text-2xl mb-5">
                Understand your risks. Reduce the impact. Protect your business.
              </h2>
              <p className="text-base mb-12">
                Apomatix’s Powerful Risk Management Software to help you
                understand, fix and manage all your organisation’s risks.
              </p>
            </div>
            <div className="col-span-1 md:col-span-4 px-4 flex items-center justify-center md:justify-end">
              <a href="https://app.apomatix.com/register/blog-risk-trial">
                <Button type="secondary">Start free trial</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPost
