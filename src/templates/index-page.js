import React from "react"
import { graphql, Link } from "gatsby"
// Img for images
import Img from "gatsby-image"
import BackgroundCurve from "../assets/img/welcome-bg-three.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import FadeIn from "../components/FadeIn"
import LaptopImage from "../assets/img/laptop.png"
import MeetingImage from "../assets/img/meeting.jpg"
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Testimonials from "../components/Testimonials"
import CurrentClients from "../components/CurrentClients"

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

      <div className="relative pt-6 sm:pt-12 lg:pt-24 xl:pt-12/100 mt-20 xl:mt-0">
        <div className="bg-branding absolute top-0 w-full h-56 lg:hidden -z-1"></div>
        <img
          className="w-full absolute -z-1 top-56 lg:top-0"
          src={BackgroundCurve}
        />
        <section className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 px-4">
            <div className="col-span-1 lg:col-span-5 xl:pt-12">
              <div className="text-white px-4">
                <h1 className="text-3xl mb-5 w-11/12">{frontmatter.title}.</h1>
                <p className="mb-8">{frontmatter.tagline}</p>
                <div className="mb-16">
                  <a href="https://app.apomatix.com/register/risk-assessment-template">
                    <Button type="primary">Start free trial</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6 lg:col-start-7 px-4">
              <img
                src={LaptopImage}
                className="w-full transform transition-transform ease-in-out duration-300 hover:-translate-y-3"
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
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
                />
                <h3 className="mb-2 text-base relative tracking-wider card__title">
                  Asset Management
                </h3>
                <p className="text-sm mb-5">
                  Upgrade your information asset management. Record, assign and
                  manage your information assets in one central location.
                </p>
                <div className="pt-5">
                  <Link href="/product/asset-manager">
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
              <div className="p-8 rounded shadow-ax">
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
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
                  <Link to="/product/internalcontrol">
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
              <div className="p-8 h-full rounded transition-shadow ease-in-out duration-300 hover:shadow-ax">
                <FontAwesomeIcon
                  icon={faPhoenixFramework}
                  className="text-branding text-3xl mb-8"
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
          </div>
        </section>

        <section className="bg-gray-100 relative tracking-wide">
          <div className="grid grid-cols-1  md:grid-cols-2">
            <div className="col-span-1 h-140 w-full relative overflow-hidden">
              <img
                src={MeetingImage}
                className="absolute h-full w-full object-cover transform transition-transform duration-400 ease-in-out hover:scale-110"
              />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-8 md:my-0 md:self-center">
              <h2 className="text-2xl mb-5">Exploit your advantage</h2>
              <p className="text-base mb-8">
                If you’re too risk adverse, you may miss out. According to the
                UK’s{" "}
                <a
                  target="_blank"
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
                  <img src={LaptopImage} className="w-full" />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
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

        <section className="container mx-auto py-12">
          <CurrentClients />
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
              <h2 className="text-2xl mb-5">Pricing Plans</h2>
              <p className="text-base mb-12">
                We have a range of options to suit organisations of all sizes.
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
                <div className="my-10">
                  <div className="mb-8 text-center text-branding flex justify-center items-baseline">
                    <span className="text-xl font-semibold self-start">£</span>
                    <span className="text-3xl font-bold">1000</span>
                    <span className="text-sm font-bold">/Year</span>
                  </div>
                  <ul className="text-center">
                    <li className="mb-3 tracking-wide">Asset Manager</li>
                    <li className="mb-3 tracking-wide">Risk Manager</li>
                    <li className="mb-3 tracking-wide">3 Users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <Button type="primary" outline={true}>
                    Contact us
                  </Button>
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
                <div className="my-10">
                  <div className="mb-8 text-center text-branding flex justify-center items-baseline">
                    <span className="text-xl font-semibold self-start">£</span>
                    <span className="text-3xl font-bold">1000</span>
                    <span className="text-sm font-bold">/Year</span>
                  </div>
                  <ul className="text-center">
                    <li className="mb-3 tracking-wide">Asset Manager</li>
                    <li className="mb-3 tracking-wide">
                      Internal Control Manager
                    </li>
                    <li className="mb-3 tracking-wide">Risk Manager</li>
                    <li className="mb-3 tracking-wide">5 Users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <Button type="primary" outline={true}>
                    Contact us
                  </Button>
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
                  <h3 className="text-base tracking-wide font-bold  text-white capitalize">
                    Expert
                  </h3>
                </div>
                <div className="my-10">
                  <div className="mb-8 text-center text-branding flex justify-center items-baseline">
                    <span className="text-xl font-semibold self-start">£</span>
                    <span className="text-3xl font-bold">1000</span>
                    <span className="text-sm font-bold">/Year</span>
                  </div>
                  <ul className="text-center">
                    <li className="mb-3 tracking-wide">Asset Manager</li>
                    <li className="mb-3 tracking-wide">
                      Internal Control Manager
                    </li>
                    <li className="mb-3 tracking-wide">Risk Manager</li>
                    <li className="mb-3 tracking-wide">Consultancy Services</li>
                    <li className="mb-3 tracking-wide">Bespoke no. users</li>
                  </ul>
                </div>
                <div className="flex justify-center pb-10">
                  <Button type="primary" outline={true}>
                    Contact us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="mb-20"></div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} />
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
        </div> */}
      </div>
    </Layout>
  )
}

export default HomePage
