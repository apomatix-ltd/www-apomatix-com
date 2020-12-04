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
import ControlsIcon from "../assets/img/controls-icon.svg"
import AssetIcon from "../assets/img/asset-icon.svg"
import CentralPlaceIcon from "../assets/img/centralplace-icon.svg"

export const pageQuery = graphql`
  query ISO27001Query($id: String!) {
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
              maxWidth: 951
              maxHeight: 604
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

  const ContactImg = frontmatter.contactImage
    ? frontmatter.contactImage.childImageSharp.fluid
    : ""

  const controlsFormImg = frontmatter.controlsFormImg
    ? frontmatter.controlsFormImg.childImageSharp.fluid
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
                 What is ISO 27001?
                </h1>
                <p className="mb-5">
                    ISO 27001 is the internationally recognised Standard for Information Security.
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
                 How it works?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4">
              <p className="text-base mb-12 lg:mb-0 lg:pt-6 xl:pt-12">
                It sets out the policies and procedures you need to protect data and manage sensitive information.
                ISO 27001 helps you identify, prevent and address risks – so you can demonstrate that your business has the systems and controls in place to combat any threats to your data integrity.
                <br />
                <br />
                <li>Confidential information is kept secure</li>
                <li>You gain a competitive advantage</li>
                <li>Customers and stakeholders gain confidence in how you manage risk</li>
                <li>Customer satisfaction increases, which improves client retention</li>
                <li>Your legal obligations are met</li>
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
                 How does ISO 27001 do this?
                </h2>

                <p className="text-base mb-12 text-center">
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
                  <p className="text-sm mb-5">
                  You may already have a number of information security controls in place.
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
                  <p className="text-sm mb-5">
                  However, making sure everybody is aware of your policies and that everyone follows them in the same way, can sometimes be difficult to manage.
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
                  <p className="text-sm mb-5">
                    With the ISO 27001 Standard, you will have a robust framework to help you define, document, monitor and review, and update your security controls, ensuring they’ll be implemented consistently.
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
                fluid={controlsFormImg}
                alt="Pictures of graphs"
                className="object-cover w-full"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">
                 How do I implement ISO-27001?
              </h2>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                 Define and implement an ISO 27001-compliant Information Security Management System (known as the ISMS)
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Define the scope of the ISMS
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Define a security policy, along with associated ISMS Policies
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Conduct a risk assessment
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Manage identified risks
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                   Select control objectives and controls to implement and prepare a Statement of Applicability.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative tracking-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <Img
                fluid={controlsFormImg}
                alt="Pictures of graphs"
                className="object-cover w-full"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">
                What is a ISMS (Information Security Management System?
              </h2>
              <p className="text-base mb-8">
               How do I implement ISO-27001?
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                 An Information Security Management System describes and demonstrates your organisation’s approach to Information Security. It includes how people, policies, controls and systems identify, then address the opportunities and threats revolving around valuable information and related assets. It is worth reinforcing that for ISO 27001 success, certainly for an independent certification, you need to implement and maintain a ‘management system.’ The clue really is in the title and components of a winning ISMS are described further below
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative tracking-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <Img
                fluid={controlsFormImg}
                alt="Pictures of graphs"
                className="object-cover w-full"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">
              What does ISO 27001 cover?
              </h2>
              <p className="text-base mb-8">
               How do I implement ISO-27001?
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                 It’s worth noting that ISO 27001 is designed to cover much more than just IT. An important part of the Standard concerns data security across all areas of your business, from the screening of new employees to determining the actions needing to be taken when they leave.
                </li>
              </ul>
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
