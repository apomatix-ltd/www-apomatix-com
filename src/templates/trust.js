import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PartnersCarousel from "../components/PartnersCarousel"
import VaultImg from "../assets/img/vault-trust.png"
import Button from "../components/Button"

export const pageQuery = graphql`
  query trustQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        tagline
        gdprBadge {
          childImageSharp {
            fixed(width: 127, height: 48, quality: 80) {
              ...GatsbyImageSharpFixed
            }
            sizes {
              src
            }
          }
        }
        ceBadge {
          childImageSharp {
            fixed(width: 57, height: 48, quality: 80) {
              ...GatsbyImageSharpFixed
            }
            sizes {
              src
            }
          }
        }
        iasmeBadge {
          childImageSharp {
            fixed(width: 127, height: 48, quality: 80) {
              ...GatsbyImageSharpFixed
            }
            sizes {
              src
            }
          }
        }
        teamImage1 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed
            }
            sizes {
              src
            }
          }
        }
        teamImage2 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed
            }
            sizes {
              src
            }
          }
        }
        teamImage3 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed
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

const TrustPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  let GDPRBadge = frontmatter.gdprBadge.childImageSharp.fixed
  let CEBadge = frontmatter.ceBadge.childImageSharp.fixed
  let IASMEBadge = frontmatter.iasmeBadge.childImageSharp.fixed

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={frontmatter.tagline} />
      <div className="mt-40">
        <section className="container mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="cols-span-1 md:col-span-2 text-center px-4">
              <h1 className="text-4xl mb-5 font-medium">
                Apomatix Trust Centre
              </h1>
              <p className="mb-5">
                Our Mission is to deliver innovative solutions to organisations
                to help them be secure and compliant in our digital age.
                <br />
                Ensuring your trust is at the core of what we do.
              </p>
            </div>
            <div className="cols-span-1 md:col-span-2 flex h-10 sm:h-12 justify-center mb-12 flex-wrap">
              <Img fixed={GDPRBadge} alt="GDPR Compliant" className="mr-2" />
              <Img
                fixed={CEBadge}
                alt="Cyber Essential Compliant"
                className="mr-2"
              />
              <Img fixed={IASMEBadge} alt="IASME Compliant" />
            </div>
            <div className="col-span-1 text-center px-4 py-16">
              <h4 className="text-xl mb-5">Cloud product security</h4>
              <div className="px-6 sm:px-8">
                Security is built at the heart of our product. We employ
                numerous controls to safeguard your data including encryption in
                transit and at rest across our cloud services.
              </div>
            </div>
            <div className="col-span-1 text-center px-4 py-16">
              <h4 className="text-xl mb-5">Platform and network security</h4>
              <div className="px-6 sm:px-8">
                We perform regular penetration testing and vulnerability scans.
                If a security flaw is found, we resolve the issue quickly per
                our Incident Management policy (link to management policy).
              </div>
            </div>
            <div className="col-span-1 text-center px-4 py-16">
              <h4 className="text-xl mb-5">Availability and continuity</h4>
              <div className="px-6 sm:px-8">
                We maintain high levels of availability within our selected data
                centres and robust Business Continuity programs. Physical access
                to data centres we use is strictly controlled with comprehensive
                security measures by our data centre hosting partners (link to
                Microsoft Azure policy/information).
              </div>
            </div>
            <div className="col-span-1 text-center px-4 py-16">
              <h4 className="text-xl mb-5">Security as standard</h4>
              <div className="px-6 sm:px-8">
                We follow best practice to ensure your information is kept
                secure. All data is encrypted (256 AES) in transit and at rest.
                For additional security, all users can enable two
                factor-authentication
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-100 overflow-x-hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl font-medium text-center mb-5">
              Our Trusted Partners
            </h2>
            <PartnersCarousel />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center h-140">
              <img src={VaultImg} />
            </div>
            <div className="col-span-1 px-8 md:px-24 my-10 md:self-center">
              <h2 className="text-3xl mb-5 font-medium">Privacy at Apomatix</h2>
              <p className="text-base mb-5">
                We commit to meeting the highest bar for data privacy
                obligations on our platform.
              </p>
              <div className="mb-8">
                {" "}
                <a
                  class="ax-button-contact"
                  href="https://help.apomatix.com/knowledge/privacy-policy-website"
                >
                  <Button type="primary" outline={true}>
                    View our privacy policy
                  </Button>
                </a>
              </div>
              <h4 className="text-xl mb-5">
                Manage your business' data privacy
              </h4>
              <p className="text-base mb-5">
                Data is critical to the success of your business. We are
                transparent about how we store your company data and where your
                data is located. We give you the option to completely remove
                your data from our services, so you can rest assured that your
                company data is in your control.
              </p>
            </div>
          </div>
        </section>
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <h2 className="grid-cols-1 md:col-span-3 text-3xl mb-16 font-medium text-center">
                Our Trust Leaders
              </h2>
              <div className="col-span-1 flex flex-col items-center px-4 mb-10 md:mb-0">
                <Img
                  fixed={frontmatter.teamImage1.childImageSharp.fixed}
                  className="rounded-full"
                  alt="Vartan Sarkissian"
                />
                <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                  Vartan Sarkissian
                </h3>
                <div className="flex items-center pb-5 text-base">
                  <h4 className="font-semibold">CEO</h4>
                </div>
              </div>

              <div className="col-span-1 flex flex-col items-center px-4 mb-10 md:mb-0">
                <Img
                  fixed={frontmatter.teamImage2.childImageSharp.fixed}
                  className="rounded-full"
                  alt="Vartan Sarkissian"
                />
                <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                  Alex Eburne
                </h3>
                <div className="flex items-center pb-5 text-base">
                  <h4 className="font-semibold">CTO</h4>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center px-4 mb-10 md:mb-0">
                <Img
                  fixed={frontmatter.teamImage3.childImageSharp.fixed}
                  className="rounded-full"
                  alt="Vartan Sarkissian"
                />
                <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                  Matt Quinn
                </h3>
                <div className="flex items-center pb-5 text-base">
                  <h4 className="font-semibold">Head of Operations</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TrustPage
