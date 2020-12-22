import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundCurve from "../assets/img/home-bg.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import FadeIn from "../components/FadeIn"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Testimonials from "../components/Testimonials"
import CurrentClients from "../components/CurrentClients"
import AssetIcon from "../assets/img/asset-icon.svg"
import RiskIcon from "../assets/img/riskmanager-icon.svg"
import ControlsIcon from "../assets/img/controls-icon.svg"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        pageTitle
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 552
              maxHeight: 290
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
        featuredImage2 {
          childImageSharp {
            fluid(
              maxWidth: 768
              maxHeight: 404
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            sizes {
              src
            }
          }
        }
        meetingImage {
          childImageSharp {
            fluid(maxWidth: 952, maxHeight: 560, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            sizes {
              src
              srcSet
              base64
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
  const { frontmatter } = markdownRemark
  const RiskDashImg = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""

  const LaptopImg = frontmatter.featuredImage2
    ? frontmatter.featuredImage2.childImageSharp.fluid
    : ""
  const MeetingImg = frontmatter.meetingImage
    ? frontmatter.meetingImage.childImageSharp.fluid
    : ""

  const ContactImg = frontmatter.contactImage
    ? frontmatter.contactImage.childImageSharp.fluid
    : ""

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.tagline} />

      <div className="relative pt-6 sm:pt-12 lg:pt-24 xl:pt-12/100 mt-20 xl:mt-0">
        <div className="bg-branding absolute top-0 w-full h-56 lg:hidden -z-1"></div>
        <img
          className="w-full absolute -z-1 home__curve"
          src={BackgroundCurve}
          alt="Background curve shape"
        />
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 px-4">
            <div className="col-span-1 lg:col-span-5 xl:pt-12">
              <div className="text-white px-4">
                <h1 className="text-3xl mb-5 w-11/12">
                  {frontmatter.pageTitle}
                </h1>
                <p className="mb-8">{frontmatter.tagline}</p>
                <div className="mb-16">
                  <a href="https://app.apomatix.com/register/website-risk-trial">
                    <Button type="primary">Start free trial</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6 lg:col-start-7 px-4">
              <Img
                fluid={RiskDashImg}
                alt={"Software screenshot"}
                className="transform transition-transform ease-in-out duration-300 hover:-translate-y-3"
                fadeIn={true}
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-24 pb-18 text-gray-800">
          <div className="grid grid-cols-1">
            <div className="col-span-1 px-4">
              <h2 className="text-2xl mb-5 text-center">
                Built by risk professionals, for risk professionals.
              </h2>

              <p className="text-base mb-12 text-center">
                Apomatix’s team are passionate about risk. We have over ninety
                years of risk management and information security experience,
                and our products are designed to meet the unique challenges risk
                professionals face.
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
                  src={RiskIcon}
                  alt="icon"
                  className="text-branding text-3xl mb-8 w-10"
                />
                <h3 className="mb-2 text-base relative tracking-wider card__title">
                  Risk Management 
                </h3>
                <p className="text-sm mb-5">
                  Streamline and optimise your risk management activities.
                  Identify, analyse, evaluate and treat all your risks one
                  solution.
                </p>
                <div className="pt-5">
                  <Link to="/product/riskmanager">
                    <Button type="primary" outline={true}>
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              speed="600"
              className="col-span-1 px-4 mb-8"
              anchor="bottom"
            >
              <div className="p-8 h-full rounded shadow-ax">
                <img
                  src={AssetIcon}
                  alt="icon"
                  className="text-branding text-3xl mb-8 w-10"
                />
                <h3 className="mb-2 text-base relative tracking-wider card__title">
                  Asset Management
                </h3>
                <p className="text-sm mb-5">
                  Upgrade your information asset management. Record, assign and
                  manage your information assets in one central location.
                </p>
                <div className="pt-5">
                  <Link to="/product/asset-manager">
                    <Button type="primary" outline={true}>
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              speed="800"
              className="col-span-1 px-4 mb-8"
              anchor="bottom"
            >
              <div className="p-8 rounded transition-shadow ease-in-out duration-300 hover:shadow-ax">
                <img
                  src={ControlsIcon}
                  alt="icon"
                  className="text-branding text-3xl mb-8 w-10"
                />
                <h3 className="mb-2 text-base relative tracking-wider card__title">
                  Internal Control Management
                </h3>
                <p className="text-sm mb-5">
                  Simplify your internal control management process. Track
                  implementation status and run control effectiveness tests for
                  frameworks including: ISO 27001 &#38; CIS 20.
                </p>
                <div>
                  <Link to="/product/internalcontrols">
                    <Button type="primary" outline={true}>
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-gray-100 relative tracking-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 h-140 w-full relative overflow-hidden">
              <Img
                fluid={MeetingImg}
                alt="Two smart men looking at a laptop"
                className="absolute h-full w-full object-cover transform transition-transform duration-400 ease-in-out hover:scale-110"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-2xl mb-5">Exploit your advantage</h2>
              <p className="text-base mb-8">
                If you’re too risk adverse, you may miss out. According to the
                UK’s{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.ncsc.gov.uk/collection/10-steps-to-cyber-security/the-10-steps/risk-management-regime"
                  className="text-branding cursor-pointer hover:underline"
                >
                  National Cyber Security Centre
                </a>
                , an overly cautious approach to risk can lead to missed
                business opportunities or additional costs.
                <span className="block pt-5">
                  This is where Apomatix’s Risk Management Software steps in. We
                  can help you spot the best opportunities to take advantage of:
                </span>
              </p>
              <ul>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Adopt an integrated approach – Link risks to assets and
                  internal controls
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Reduce your risk – Automated treatment guidance.
                </li>
                <li className="text-sm mb-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-branding mr-8"
                  />
                  Take data driven decisions – Real time reporting &#38;
                  analytics
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-24 hexagon">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="col-span-1 lg:col-span-8 lg:col-start-3 px-4 text-center">
                <h2 className="text-2xl mb-5">Why Risk Management Matters</h2>
                <p className="text-base mb-12">
                  Though 80% of businesses say information security is a high
                  priority for their board, only 35% have carried out a risk
                  assessment in the past year. Apomatix aim to change that.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 mt-8">
              <div className="col-span-1 lg:col-span-8 lg:col-start-3 px-4 text-center">
                <FadeIn speed="400" anchor="middle">
                  <Img
                    fluid={LaptopImg}
                    alt={"Software screenshot"}
                    fadeIn={true}
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100 overflow-x-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-1">
              <div className="col-span-1 px-4 text-center">
                <h2 className="text-2xl mb-5">Testimonials</h2>
                <p className="text-base mb-12">
                  Our customers matter. They are at the heart of what we do. We
                  always strive to go above and beyond to help them meet their
                  risk management needs.
                </p>
              </div>
            </div>

            <Testimonials />
          </div>
        </section>

        <section className="container mx-auto py-12 overflow-x-hidden">
          <CurrentClients />
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
              <h2 className="text-2xl mb-5">Pricing Plans</h2>
              <p className="text-base mb-12">
                We have a range of options to suit organisations of all sizes.
                <br />
                <Link
                  to="/pricing"
                  className="text-branding font-semibold hover:underline"
                >
                  Click here for more details.
                </Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn
              speed="400"
              className="col-span-1 px-4 mb-8"
              anchor="middle"
            >
              <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
                <div className="h-32 flex items-center justify-center border-b border-gray-400">
                  <h3 className="text-base tracking-wider font-bold capitalize">
                    Basic
                  </h3>
                </div>
                <div className="my-10 text-center">
                  <div className="mb-8 text-branding flex justify-center items-baseline">
                    <span className="text-xl font-semibold self-start">£</span>
                    <span className="text-3xl font-bold">60</span>
                    <span className="text-sm font-bold">/Month (inc. VAT)</span>
                  </div>
                  <ul className="font-medium tracking-wide">
                    <li className="mb-3">Risk Manager</li>
                    <li className="mb-3">Work Management Tools</li>
                    <li className="mb-3">Teams and Slack Integration</li>
                    <li className="mb-3">2 Users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <a href="https://app.apomatix.com/register/website-risk-trial">
                    <Button type="primary" outline={true}>
                      Start trial
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              speed="600"
              className="col-span-1 px-4 mb-8"
              anchor="middle"
            >
              <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
                <div className="h-32 flex items-center justify-center border-b border-gray-400">
                  <h3 className="text-base tracking-wider font-bold capitalize">
                    Advanced
                  </h3>
                </div>
                <div className="my-10 text-center">
                  <div className="mb-8 text-branding flex justify-center items-baseline">
                    <span className="text-xl font-semibold self-start">£</span>
                    <span className="text-3xl font-bold">174</span>
                    <span className="text-sm font-bold">/Month (inc. VAT)</span>
                  </div>
                  <ul className="font-medium tracking-wide">
                    <li className="mb-3">Risk Manager</li>
                    <li className="mb-3">Asset Manager</li>
                    <li className="mb-3">Work Management Tools</li>
                    <li className="mb-3">Teams and Slack Integration</li>
                    <li className="mb-3">3 Users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <a href="https://meetings.hubspot.com/matt922">
                    <Button type="primary" outline={true}>
                      Book demo
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              speed="800"
              className="col-span-1 px-4 mb-8"
              anchor="middle"
            >
              <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
                <div className="h-32 flex items-center justify-center border-b border-gray-400 bg-branding rounded">
                  <h3 className="text-base tracking-wide font-bold text-white capitalize">
                    Expert
                  </h3>
                </div>
                <div className="my-10 text-center">
                  <div className="mb-8 text-branding flex justify-center items-baseline">
                    <span className="text-3xl font-bold">Contact us</span>
                  </div>
                  <ul className="font-medium tracking-wide">
                    <li className="mb-3">Risk Manager</li>
                    <li className="mb-3">Asset Manager</li>
                    <li className="mb-3">Internal Control Manager</li>
                    <li className="mb-3">Work Management Tools</li>
                    <li className="mb-3">Teams and Slack Integration</li>
                    <li className="mb-3">Bespoke no. Users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <a href="https://meetings.hubspot.com/matt922">
                    <Button type="primary" outline={true}>
                      Book demo
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage
