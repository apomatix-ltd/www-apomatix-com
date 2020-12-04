import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundCurve from "../assets/img/product-bg.svg"
import Button from "../components/Button"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FadeIn from "../components/FadeIn"
import BoundariesIcon from "../assets/img/boundaries-icon.svg"
import IdentifyIcon from "../assets/img/identify-icon.svg"
import ExpertIcon from "../assets/img/expert-icon.svg"
import ReduceIcon from "../assets/img/reduce-icon.svg"
import ControlsIcon from "../assets/img/controls-icon.svg"
import AssetIcon from "../assets/img/asset-icon.svg"
import InsightsIcon from "../assets/img/insights-icon.svg"
import CentralPlaceIcon from "../assets/img/centralplace-icon.svg"

export const pageQuery = graphql`
  query RiskManagerQuery($id: String!) {
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
              fit: OUTSIDE
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
const RiskManagerPage = ({ data }) => {
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
      <SEO title={frontmatter.title} description={frontmatter.tagline} />
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
                  Apomatix’s Risk Management Software
                </h1>
                <p className="mb-5">
                  Streamline and optimise your risk management activities
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
                Improve your Risk Management
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4">
              <p className="text-base mb-12 lg:mb-0 lg:pt-6 xl:pt-12">
                Risk Management sits at the heart of any well organised
                management system. A comprehensive risk management regime can
                help to improve the identification of threats and opportunities,
                which can support organisation’s in meeting their objectives.
                <br />
                <br />
                Yet many organizations, both large and small, struggle to
                understand the value a fully-fledged risk management regime can
                bring. Organizations often feel overwhelmed by the size of the
                task. Apomatix’s Risk Management Software helps simplify the
                entire process, allowing you to streamline and optimise your
                risk management activities.
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
                  Simplify your risk management
                </h2>

                <p className="text-base mb-12 text-center">
                  Leave messy spreadsheets and out of date word documents in the
                  past. Apomatix’s Risk Management software allows you to manage
                  all your risks on one simple cloud platform.
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
                    src={BoundariesIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Define your Boundaries
                  </h3>
                  <p className="text-sm mb-5">
                    Define the scope of you risk assessment activities according
                    to your organisation’s needs (organisation wide, specific
                    locations, special projects, etc)
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
                    Set your Tolerance
                  </h3>
                  <p className="text-sm mb-5">
                    Set your risk tolerance on an assessment-by-assessment basis
                    in line with your organisational risk appetite
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
                    src={CentralPlaceIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider card__title">
                    Stay Organised
                  </h3>
                  <p className="text-sm mb-5">
                    Manage full risk assessment cycle in one central location,
                    including: Risk Identification, Risk Analysis, Risk
                    Evalution, Risk Treatment and Risk Monitoring.
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
              <h2 className="text-2xl mb-5">
                Understand and manage your risks
              </h2>
              <p className="text-base mb-8">
                Go beyond just recording your risks. Reports, Analytics and
                Integrations allow you to understand and manage your risks like
                never before.
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Use the reports dashboard to view key information (number of
                  risks, due dates). Apomatix’s Analytics allows for an even
                  more granular reporting
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Assign risks to specific owner(s) and track progress over time
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Integrate with either Slack or Teams for notifications
                  directly to your organisation’s instant messenger
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
                  Integrate with your controls and assets
                </h2>
                <p className="text-base mb-12">
                  Gain a holistic view of your risks. Understand, in detail, the
                  relationship between your risks, internal controls and assets
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="col-span-1 px-4">
                <div className="p-8 h-full text-center flex items-center flex-col">
                  <img
                    src={ExpertIcon}
                    alt="icon"
                    className="text-branding text-3xl mb-8 w-10"
                  />
                  <h3 className="mb-2 text-base relative tracking-wider">
                    Discover Critical Information
                  </h3>
                  <p className="text-sm mb-5">
                    Link risks and assets to understand your organisation’s most
                    critical information assets
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
                    Apply controls to specific risks to reduce the level of risk
                    your organisation faces
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
                    View risks linked to specific controls or assets using the
                    dashboard, and drill down further with customizable reports
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
                  <img src={ControlsIcon} className="my-8 h-20" />
                  <h3 className="text-xl tracking-wide font-semibold capitalize mb-3">
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
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default RiskManagerPage
