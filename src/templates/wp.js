import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"
import Button from "../components/Button"
import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"
import { format } from 'date-fns'
import SEO from "../components/seo"

export default ({ data, pageContext }) => (
  <Layout className="page">
    
    <SEO
      title = 'ddddd'
      description = 'Apomatix ddddddd'
      article = 'ddddd'
    />

    <section className="container mx-auto mt-32">
    <div className="mb-10">
      <h1 className="text-3xl">Apomatix Blog</h1>
    </div>
    <div className="grid grid-cols-1 gap-y-10">
   
      {data.allWpPost.nodes.map((page) => (
        <div className="col-span-1" key={page.link}>
          <Link to={normalizePath('/blog' + page.uri)}>
            <div p={5} shadow="md" borderWidth="1px">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  {!!page?.featuredImage?.node?.localFile?.childImageSharp && (
                    <Img
                    resolutions={
                        page.featuredImage.node.localFile.childImageSharp.resolutions
                      }
                    />
                  )}
                </div>
                <div className="col-span-1 flex items-center">
                  <div className="text-xl">
                    <h2>{page.title} </h2>
                    {!!page.author && !!page.author.node.firstName  && (
                    <h3> <b>Author:</b> { page.author.node.firstName + ' ' +  page.author.node.lastName}</h3>
                    )}
                    <h3><b>Date:</b> {format(new Date(page.date), 'PPPPpp')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </section>
    <section>
    {pageContext && pageContext.totalPages > 1 && (
      <div className="container mx-auto mr-10 mt-10">
        <ReactPaginate
          previousLabel={
            pageContext?.page !== 1 && <Button>Previous page</Button>
          }
          nextLabel={
            pageContext?.totalPages !== pageContext.page && (
              <Button>Next page</Button>
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
          containerClassName={"flex flex-row"}
          subContainerClassName={"mx-20"}
          activeClassName={"active"}
          pageClassName= {"mx-5"}
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
                resolutions (width:478, height: 244) {
                  src,
                  width,
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`