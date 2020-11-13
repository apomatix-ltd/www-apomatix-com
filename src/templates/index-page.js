import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import BackgroundCurve from "../assets/img/welcome-bg-three.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import LaptopImage from "../assets/img/laptop.png"
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 380
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
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""
  return (
    <Layout>
      <SEO />

      <div className="pt-6 sm:pt-12 lg:pt-24 xl:pt-40 relative mt-20 xl:mt-0">
        <div className="bg-branding absolute top-0 w-full h-56 lg:hidden -z-1"></div>
        <img
          className="w-full absolute -z-1 top-56 lg:top-0"
          src={BackgroundCurve}
        />
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-5 xl:pt-12">
              <div className="text-white px-4">
                <h1 className="text-3xl mb-5 w-11/12 sm:">
                  {frontmatter.title}.
                </h1>
                <p className="mb-8">{frontmatter.tagline}</p>
                <div className="mb-16">
                  <Button type="primary">Start free trial</Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6 lg:col-start-7 px-4">
              <img src={LaptopImage} className="w-full" />
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-24 text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 px-4 md:col-span-2 lg:col-span-3">
              <h2 className="text-2xl mb-5 text-center">
                Built by risk professionals, for risk professionals.
              </h2>
              <p className="text-sm text-center mb-8">
                Apomatix’s team are passionate about risk. We have over ninety
                years of risk management and information security experience,
                and our products are designed to meet the unique challenges risk
                professionals face.
              </p>
            </div>

            <div className="col-span-1 px-4 mb-8 rounded-sm">
              <div className="p-8">
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
                />
                <h2 className="mb-2 text-base ">Asset Management</h2>
                <p className="text-sm">
                  Upgrade your information asset management. Record, assign and
                  manage your information assets in one central location.
                </p>
              </div>
            </div>

            <div className="col-span-1 px-4 mb-8 rounded-sm">
              <div className="p-8">
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
                />
                <h2 className="mb-2 text-base ">Internal Control Management</h2>
                <p className="text-sm ">
                  Simplify your internal control management process. Track
                  implementation status and run control effectiveness tests for
                  frameworks including: ISO 27001 &#38; CIS 20.
                </p>
              </div>
            </div>

            <div className="col-span-1 px-4 mb-8 rounded-sm">
              <div className="p-8">
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
                />
                <h2 className="mb-2 text-base ">Risk Management </h2>
                <p className="text-sm ">
                  Streamline and optimise your risk management activities.
                  Identify, analyse, evaluate and treat all your risks one
                  solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-20"></div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to={frontmatter.cta.ctaLink}>
          {frontmatter.cta.ctaText}
          <span class="icon -right">
            <RiArrowRightSLine />
          </span>
        </Link>
        <div>
          {Image ? (
            <Img
              fluid={Image}
              alt={frontmatter.title + " - Featured image"}
              className="w-1/2 mx-auto"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
