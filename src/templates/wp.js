import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"
import Button from "../components/Button"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import { format } from "date-fns"
import SEO from "../components/seo"

export default ({ data, pageContext }) => (
  <Layout className="page">
    <SEO
      title={"Apomatix's blog features articles and content about risk management and other related fields."}
      description="Apomatix's blog features articles and content about risk management and other related fields."
    />

    <section className="container mx-auto mt-40">
      <div className="mb-20">
        <h1 className="text-4xl font-medium text-center">Apomatix Blog</h1>
      </div>
      <div className="mb-5">
        <h2 className="text-2xl font-medium text-center">Apomatix's blog features articles and content about risk management and other related fields.</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        {data.allWpPost.nodes.map(page => (
          <div className="col-span-1" key={page.link}>
            <Link to={normalizePath("/blog" + page.uri)}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center px-4">
                  {!!page?.featuredImage?.node?.localFile?.childImageSharp && (
                    <Img
                      fluid={
                        page.featuredImage.node.localFile.childImageSharp.fluid
                      }
                      className="w-full"
                    />
                  )}
                </div>
                <div className="col-span-1 flex pt-10 lg:pt-0 lg:items-center px-4 lg:px-8 mb-16 lg:mb-0">
                  <div className="text-xl">
                    <h2>{page.title} </h2>
                    {!!page.author && !!page.author.node.firstName && (
                      <h3>
                        {" "}
                        <b>Author:</b>{" "}
                        {page.author.node.firstName +
                          " " +
                          page.author.node.lastName}
                      </h3>
                    )}
                    <h3>
                      <b>Date:</b> {format(new Date(page.date), "PPPPpp")}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
    <section className="container mx-auto">
      {pageContext && pageContext.totalPages > 1 && (
        <div className="my-12 px-4">
          <ReactPaginate
            previousLabel={
              pageContext?.page !== 1 && (
                <Button type="primary" outline={true}>
                  Previous
                </Button>
              )
            }
            nextLabel={
              pageContext?.totalPages !== pageContext.page && (
                <Button type="primary" outline={true}>
                  Next
                </Button>
              )
            }
            onPageChange={({ selected }) => {
              const page = selected + 1
              const path = page === 1 ? `/blog/` : `/blog/${page}/`
              navigate(path)
            }}
            disableInitialCallback
            breakLabel={"..."}
            breakClassName={"mx-20"}
            pageCount={pageContext.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"flex flex-row items-center flex-wrap"}
            subContainerClassName={"mx-20"}
            activeClassName={"text-branding border-b border-branding"}
            pageClassName={"mx-5"}
            initialPage={pageContext.page - 1}
          />
        </div>
      )}
    </section>
  </Layout>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        date
        author {
          node {
            lastName
            firstName
          }
        }
        featuredImage {
          node {
            id
            mimeType
            localFile {
              childImageSharp {
                id
                fluid(
                  maxWidth: 568
                  maxHeight: 297
                  quality: 80
                  srcSetBreakpoints: [960, 1440]
                ) {
                  ...GatsbyImageSharpFluid
                }
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
