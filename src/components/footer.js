import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ApomatixLogo from "../assets/img/ax-logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
// Img for images
import Img from "gatsby-image"
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  let currentYear = new Date().getFullYear()

  const data = useStaticQuery(graphql`
  query {
    image1: file(relativePath: { eq: "gdpr-badge.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 168
          maxHeight: 64
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

    image2: file(relativePath: { eq: "ce-badge.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 38
          maxHeight: 32
          quality: 100
          srcSetBreakpoints: [960, 1440]
        ) {
          ...GatsbyImageSharpFluid
        }
        sizes {
          src
        }
      }
    }

    image3: file(relativePath: { eq: "iasme-badge.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 184
          maxHeight: 64
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
  }
`
)

let GDPRBadge2 = data.image1.childImageSharp.fluid
let CEBadge2 = data.image2.childImageSharp.fluid
let IASMEBadge2 = data.image3.childImageSharp.fluid

console.log(GDPRBadge2)

  return (
    <footer className="bg-branding pt-18 mt-8 relative">
   
      <div className="container mx-auto text-white">
   
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
 
          <div className="col-span-2 md:col-span-3 lg:col-span-5 px-4">
    
            <img className="w-32 mb-8" src={ApomatixLogo} alt="Apomatix logo" />
            <div className="mb-8 font-normal text-sm">
              Apomatix’s team are passionate about risk. We have over ninety
              years of risk management and information security experience and
              our products are designed to meet the unique challenges risk
              professionals face.
            </div>
            <div className="font-normal sm:flex sm:items-center">
          <div>
                <a
                  target="_blank"
                  title="Facebook"
                  rel="noreferrer"
                  href="https://www.facebook.com/Apomatix.Inc/"
                  >
                  <FontAwesomeIcon icon={faFacebookF} className="mr-3" />
                </a>
              
                <a
                  target="_blank"
                  title="Twitter"
                  rel="noreferrer"
                  href="https://twitter.com/Apomatix_Inc"
                  >
                  <FontAwesomeIcon icon={faTwitter} className="mr-3" />
                </a>
                 
                  
                <a
                  target="_blank"
                  title="LinkedIn"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/apomatix"
                  >
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" />
                </a>
        
                  </div>
            <div className="flex my-3">

               <Img
                 fluid={GDPRBadge2}
                 alt={"GDPR Comp"}
                 className={"mr-3 w-24"}
                 />
                


                <Img
                  className={"mr-3 bg-white w-24"}
                  alt="IASME Compliant"
                  fluid={IASMEBadge2}
                  />
                  </div>
            
                <Img
                  className={"mr-3 w-12"}
                  alt="Cyber Essential Compliant"
                  fluid={CEBadge2}
               />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 px-4">
            <h5 className="text-base font-normal mb-8">Products</h5>
            <ul className="mb-8 text-sm text-gray-300">
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/product/asset-manager">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Asset Manager
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/product/internalcontrols">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Internals Control Manager
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/product/riskmanager">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Risk Manager
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 px-4">
            <h5 className="text-base font-normal mb-8">Company</h5>
            <ul className="mb-8 text-sm text-gray-300">
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/team">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Team
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/blog">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Blog
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/trust">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Trust
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-2 px-4">
            <h5 className="text-base font-normal mb-8">Legal</h5>
            <ul className="mb-8 text-sm text-gray-300">
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a
                    href="https://help.apomatix.com/knowledge/privacy-policy-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Privacy policy
                  </a>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a
                    href="https://help.apomatix.com/knowledge/terms-and-conditions-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Terms &#38; Conditions
                  </a>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a
                    href="https://help.apomatix.com/knowledge/cookie-policy-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Cookie Policy
                  </a>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a
                    href="https://help.apomatix.com/knowledge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Help Centre
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="px-4">
            <p className="col-span-1 text-sm text-center mt-8 pt-8 pb-8 tracking-wider border-t border-gray-400">
              Copyright © {currentYear}, Apomatix Inc. All Rights Reserved.
              Apomatix is a trademark of Apomatix Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
