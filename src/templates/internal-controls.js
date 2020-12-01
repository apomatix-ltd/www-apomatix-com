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
import RelationshipIcon from "../assets/img/relationship-icon.svg"
import SafeguardIcon from "../assets/img/trust-icon.svg"
import AssetIcon from "../assets/img/asset-icon.svg"
import RiskIcon from "../assets/img/riskmanager-icon.svg"
import InsightsIcon from "../assets/img/insights-icon.svg"
import TreatmentIcon from "../assets/img/treatment-icon.svg"

export const pageQuery = graphql`
  query InternalControlsQuery($id: String!) {
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
        controlsFormImg {
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
      }
    }
  }
`
const InternalControlsPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const firstLaptopImg = frontmatter.firstLaptopImg
    ? frontmatter.firstLaptopImg.childImageSharp.fluid
    : ""
  const secondLaptopImg = frontmatter.secondLaptopImg
    ? frontmatter.secondLaptopImg.childImageSharp.fluid
    : ""

  const controlsFormImg = frontmatter.controlsFormImg
    ? frontmatter.controlsFormImg.childImageSharp.fluid
    : ""

    console.log(frontmatter.slug)
  return (
    <Layout className="page">
      <SEO 
        title={frontmatter.title} 
        description={frontmatter.tagline} 
        slug={frontmatter.slug} 
      />
      <div className="relative pt-6 sm:pt-12 lg:pt-24 xl:pt-19/100 mt-20 xl:mt-0">
        <div className="bg-branding absolute top-0 w-full h-48 lg:hidden -z-1"></div>
        <img
          className="w-full absolute -z-1 top-48 lg:top-0 pb-20"
          src={BackgroundCurve}
          alt="Background shape"
        />
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-12 px-4">
              <div className="text-white text-center">
                <h1 className="text-3xl mb-4">
                  Apomatix’s Internal Controls Management Software
                </h1>
                <p className="mb-5">
                  Simplify your internal controls management process
                </p>
                <div className="mb-16">
                  <a href="https://meetings.hubspot.com/matt922">
                    <Button type="primary">Book a demo</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-8 lg:col-start-3 px-4">
              <Img
                fluid={firstLaptopImg}
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
                Reduce your Risk Efficiently and Effectively
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4">
              <p className="text-base mb-12 lg:mb-0 lg:pt-6 xl:pt-12">
                Internal controls determine the level of risk your organisation
                is exposed to. An efficient and effective set of internal
                controls reduces your risk burden and prevents a wide range of
                harmful outcomes (e.g. data breach, regulatory fines, etc).
                <br />
                <br />
                Yet many organizations have no real time view of the
                effectiveness of their internal controls. They are in the dark
                as to the level of risk they face. Apomatix's Internal Controls
                Management Software solution empowers you to seize back the
                initiative and simplify your internal control management
                process.
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
                  Consolidate your Internal Controls
                </h2>

                <p className="text-base mb-12 text-center">
                  Say goodbye to offline and out of date information about your
                  internal control environment. Apomatix's Internal Controls
                  Management software provides you with a real time overview of
                  all your organisation's internal controls.
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
                    Quickly implement industry standard controls. Apomatix's
                    control library includes ISO 27001, CIS 20 and NIST SP-800
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
                    Organise your Controls
                  </h3>
                  <p className="text-sm mb-5">
                    Track the implementation status of all controls in scope.
                    Set target implementation dates and follow progress from
                    start to finish
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
                    src={RelationshipIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Work as a Team
                  </h3>
                  <p className="text-sm mb-5">
                    Assign owners to each control to formally track and document
                    who is responsible
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="relative tracking-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 px-4">
              <Img
                fluid={controlsFormImg}
                alt="Pictures of graphs"
                className="w-full"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">Guarantee Effectiveness</h2>
              <p className="text-base mb-8">
                Make sure that your internal controls are effective. Enable
                control testing to accurately assess the operating effectiveness
                of the measures in place
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Set up a control testing timetable to periodically check that
                  controls are correctly implemented and working as planned
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Request and review evidence and relevant controls
                  documentation as part of the testing programme
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  View control test reports and the audit trail to ensure
                  control effectiveness has been accurately demonstrated
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
                  Integrate with your risks and assets
                </h2>
                <p className="text-base mb-12">
                  Get a complete view. Understand the role your internal
                  controls play in your risk management system
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={TreatmentIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    View Treatment Activities
                  </h3>
                  <p className="text-sm mb-5">
                    Link risks and controls to provide an holistic overview of
                    your risk treatment activities
                  </p>
                </div>
              </div>
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={SafeguardIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    Safeguard your Business
                  </h3>
                  <p className="text-sm mb-5">
                    Apply internal controls to asset risks to safeguard business
                    critical systems
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
                    View internal controls linked to specific risks using the
                    dashboard, and drill down further with customizable reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="parallax text-white">
          <div className="relative">
            <div className="bg-branding opacity-75 absolute inset-0 z-1" />
            <div className="container mx-auto z-10 relative pt-24 pb-18">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-8 px-4 text-center md:text-left">
                  <h2 className="text-2xl mb-5">Need some extra help?</h2>
                  <p className="text-base mb-12">
                    Our dedicated team of experts are on hand to provide you
                    with risk management and information security guidance.
                  </p>
                </div>
                <div className="col-span-1 md:col-span-4 px-4 flex items-center justify-center md:justify-end">
                  <Button type="secondary">Contact us</Button>
                </div>
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
                  <img src={AssetIcon} className="my-8 h-20" />
                  <h3 className="text-xl tracking-wider font-semibold capitalize mb-3">
                    Asset Manager
                  </h3>
                  <p className="text-base mb-8">
                    Upgrade your information asset management
                  </p>
                  <div className="mb-8">
                    <Link to="/product/asset-manager">
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

export default InternalControlsPage
