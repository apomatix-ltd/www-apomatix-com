import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
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
              resolutions (width:880, height: 450) {
                src,
                width,
                height
              }
            }
          }
        }
      }
    }
    
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`