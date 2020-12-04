import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import BackgroundCurve from "../assets/img/product-bg.svg"
import Button from "../components/Button"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FadeIn from "../components/FadeIn"
import TimeIcon from "../assets/img/time-icon.svg"
import IdentifyIcon from "../assets/img/identify-icon.svg"
import ReduceIcon from "../assets/img/reduce-icon.svg"
import ControlsIcon from "../assets/img/controls-icon.svg"
import RiskIcon from "../assets/img/riskmanager-icon.svg"
import InsightsIcon from "../assets/img/insights-icon.svg"
import AccurateIcon from "../assets/img/accurate-icon.svg"
import EfficiencyIcon from "../assets/img/efficiency-icon.svg"

export const pageQuery = graphql`
  query AssetManagerQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        firstLaptopImg {
          childImageSharp {
            fluid(
              maxWidth: 768
              maxHeight: 404
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid_noBase64
            }
            sizes {
              src
            }
          }
        }
        secondLaptopImg {
          childImageSharp {
            fluid(
              maxWidth: 568
              maxHeight: 299
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid_noBase64
            }
            sizes {
              src
            }
          }
        }
        assetFormImg {
          childImageSharp {
            fluid(
              maxWidth: 881
              maxHeight: 560
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid_noBase64
            }
            sizes {
              src
            }
          }
        }
        contactImage {
          childImageSharp {
            fluid(
              maxWidth: 1903
              maxHeight: 400
              quality: 80
              fit: OUTSIDE
              duotone: { highlight: "#0b82a4", shadow: "#022e39", opacity: 70 }
            ) {
              ...GatsbyImageSharpFluid_noBase64
            }
            sizes {
              src
              srcSet
              base64
            }
          }
        }
      }
    }
  }
`
const AssetManagerPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  const firstLaptopImg = frontmatter.firstLaptopImg
    ? frontmatter.firstLaptopImg.childImageSharp.fluid
    : ""
  const secondLaptopImg = frontmatter.secondLaptopImg
    ? frontmatter.secondLaptopImg.childImageSharp.fluid
    : ""
  const assetFormImg = frontmatter.assetFormImg
    ? frontmatter.assetFormImg.childImageSharp.fluid
    : ""
  const ContactImg = frontmatter.contactImage
    ? frontmatter.contactImage.childImageSharp.fluid
    : ""

  return (
    <Layout className="page">
      <SEO title="Apomatix - Asset Manager" description="Apomatix ddddddd" />
      <div className="relative pt-6 sm:pt-12 lg:pt-24 xl:pt-19/100 mt-20 xl:mt-0">
        <div className="bg-branding absolute top-0 w-full h-48 lg:hidden -z-1"></div>
        <img
          className="w-full absolute -z-1 product__curve"
          src={BackgroundCurve}
          alt="Background shape"
        />
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-12 px-4">
              <div className="text-white text-center">
                <h1 className="text-3xl mb-4">
                  Apomatix’s Asset Management Software
                </h1>
                <p className="mb-5">
                  Upgrade your information asset management
                </p>
                <div className="mb-16">
                  <a href="https://app.apomatix.com/register/website-risk-trial">
                    <Button type="primary">Start trial</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-8 lg:col-start-3 px-4">
              <Img
                fluid={firstLaptopImg}
                fadeIn={true}
                alt="Software screenshot"
                className="w-full transform transition-transform ease-in-out duration-300 hover:-translate-y-3"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-24 pb-18 text-gray-800">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4">
              <h2 className="text-2xl mb-5 lg:mb-20 text-center">
                Essential for Information Security Management
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4">
              <p className="text-base mb-12 lg:mb-0 lg:pt-6 xl:pt-12">
                Asset Management is an essential part of any Information
                Security Management System. It appears in a number of popular
                security standards, including ISO 27001 (Annex A.8) and CIS 20
                (Controls 1 &#38; 2). Despite this, many organisations manage
                their assets inefficiently using generic tools.
                <br />
                <br />
                Apomatix’s Asset Management Software helps you take your asset
                management process to the next level. Leave paper records behind
                and move to one dedicated software platform
              </p>
            </div>
            <div className="col-span-10 col-start-2 lg:col-span-6 lg:col-start-auto px-4">
              <Img
                fluid={secondLaptopImg}
                alt="Software screenshot"
                className="w-full transform transition-transform ease-in-out duration-300 hover:-translate-y-3"
              />
            </div>
          </div>
        </section>

        <section className="pt-24 pb-18 text-gray-800 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1">
              <div className="col-span-1 px-4">
                <h2 className="text-2xl mb-5 text-center">
                  Centralise your Asset Management
                </h2>

                <p className="text-base mb-12 text-center">
                  Move on from scattered word documents and excel spreadsheets.
                  Apomatix’s Asset Management software allows you to centralise
                  all your asset management activities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <FadeIn
                speed="400"
                className="col-span-1 px-4 mb-8"
                anchor="bottom"
              >
                <div className="p-8 h-full rounded transition-shadow ease-in-out duration-300 hover:shadow-ax">
                  <img
                    src={TimeIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Save Time
                  </h3>
                  <p className="text-sm mb-5">
                    Quickly add, classify and categorise assets using
                    preconfigured, but customisable, settings.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                speed="600"
                className="col-span-1 px-4 mb-8"
                anchor="bottom"
              >
                <div className="p-8 h-full rounded shadow-ax">
                  <img
                    src={IdentifyIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Organise your Assets
                  </h3>
                  <p className="text-sm mb-5">
                    Define asset relationships and hierarchies.
                  </p>
                </div>
              </FadeIn>
              <FadeIn
                speed="800"
                className="col-span-1 px-4 mb-8"
                anchor="bottom"
              >
                <div className="p-8 h-full rounded transition-shadow ease-in-out duration-300 hover:shadow-ax">
                  <img
                    src={EfficiencyIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Improve your Efficiency
                  </h3>
                  <p className="text-sm mb-5">
                    Further segment work by associating assets with a given
                    scope (e.g. IT Department, HR Department, etc), or with the
                    business as a whole.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="relative tracking-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <Img
                fluid={assetFormImg}
                alt="Pictures of graphs"
                className="object-cover w-full"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">Track your activity.</h2>
              <p className="text-base mb-8">
                Ensure that nothing gets missed. Track assets across their
                entire lifecycle, guaranteeing key milestones are always met.
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Assign owners to each asset to formally track and document who
                  is responsible
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Create tasks against each asset to manage any relevant work
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Set formal review dates at critical points in the asset’s
                  lifecycle (e.g. re-classification disposal, etc)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1">
              <div className="col-span-1 px-4 text-center">
                <h2 className="text-2xl mb-5">
                  Integrate with your risks and internal controls
                </h2>
                <p className="text-base mb-12">
                  Get a complete view. Understand the role your assets play in
                  your risk management system
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={AccurateIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    Assess Accurately
                  </h3>
                  <p className="text-sm mb-5">
                    Associate assets with risks so you can more accurately
                    assess the specific threats your organization faces
                  </p>
                </div>
              </div>
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={ReduceIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    Reduce Impact
                  </h3>
                  <p className="text-sm mb-5">
                    Apply internal controls to asset risks to reduce the impact
                    and/or likelihood
                  </p>
                </div>
              </div>
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={InsightsIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    Deeper Insights
                  </h3>
                  <p className="text-sm mb-5">
                    View risks linked to specific assets using the dashboard,
                    and drill down further with customizable reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white relative">
          <Img
            fluid={ContactImg}
            className="w-full object-cover"
            style={{ zIndex: "-1", position: "absolute", height: "100%" }}
          />
          <div className="container mx-auto z-10 pt-24 pb-18">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="col-span-1 md:col-span-8 px-4 text-center md:text-left">
                <h2 className="text-2xl mb-5">
                  Understand your risks. Reduce the impact. Protect your
                  business.
                </h2>
                <p className="text-base mb-12">
                  Apomatix’s Powerful Risk Management Software to help you
                  understand, fix and manage all your organisation’s risks.
                </p>
              </div>
              <div className="col-span-1 md:col-span-4 px-4 flex items-center justify-center md:justify-end">
                <a href="https://app.apomatix.com/register/website-risk-trial">
                  <Button type="secondary">Start free trial</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-24 pb-18 text-gray-800">
          <div className="grid grid-cols-1">
            <div className="col-span-1 px-4 text-center">
              <h2 className="text-2xl mb-5">Better together</h2>
              <p className="text-base mb-12">
                We have a range of products to help risk professionals. They are
                powerful alone – but work even better together
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <FadeIn speed="600" className="col-span-1 p-4 mb-8" anchor="middle">
              <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <img src={ControlsIcon} className="my-8 h-20" />
                  <h3 className="text-xl tracking-wider font-semibold capitalize mb-3">
                    Internal Control Manager
                  </h3>
                  <p className="text-base mb-8">
                    Simplify your internal controls management process
                  </p>
                  <div className="mb-8">
                    <Link to="/product/internalcontrols">
                      <Button type="primary" outline={true}>
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn speed="800" className="col-span-1 p-4 mb-8" anchor="middle">
              <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <img src={RiskIcon} className="my-8 h-20" />
                  <h3 className="text-xl tracking-wide font-semibold capitalize mb-3">
                    Risk Manager
                  </h3>
                  <p className="text-base mb-8">
                    Streamline and optimise your risk management activities
                  </p>
                  <div className="mb-8">
                    <Link to="/product/riskmanager">
                      <Button type="primary" outline={true}>
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AssetManagerPage
