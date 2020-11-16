import React from "react"
import { Link } from "gatsby"
import ApomatixLogo from "../assets/img/ax-logo-white.png"
import GDPRBadge from "../assets/img/gdpr-badge.png"
import CEBadge from "../assets/img/ce-badge.png"
import IASMEBadge from "../assets/img/iasme-badge.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <footer className="bg-branding pt-18 mt-8 relative">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-5 px-4">
            <img className="w-32 mb-8" src={ApomatixLogo} />
            <div className="mb-8 font-normal text-sm">
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
              laoreet ullamcorper phasellus semper.
            </div>
            <div className="font-normal sm:flex sm:items-center">
              <div>
                <a
                  target="_blank"
                  title="Facebook"
                  href="https://www.facebook.com/Apomatix.Inc/"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="mr-3" />
                </a>

                <a
                  target="_blank"
                  title="Twitter"
                  href="https://twitter.com/Apomatix_Inc"
                >
                  <FontAwesomeIcon icon={faTwitter} className="mr-3" />
                </a>
                <a
                  target="_blank"
                  title="LinkedIn"
                  href="https://www.linkedin.com/company/apomatix"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" />
                </a>
              </div>
              <div className="flex my-3">
                <img
                  height="30px"
                  className="h-8 mr-3"
                  alt="GDPR Compliant"
                  src={GDPRBadge}
                />

                <img
                  height="33px"
                  className="h-8 mr-3"
                  alt="Cyber Essential Compliant"
                  src={CEBadge}
                />

                <img
                  height="35px"
                  className="h-8 mr-3 bg-white"
                  alt="IASME Compliant"
                  src={IASMEBadge}
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 px-4">
            <h5 className="text-base font-normal mb-8">Products</h5>
            <ul className="mb-8 text-sm text-gray-300">
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Asset manager
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Internals control manager
                  </Link>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Risk manager
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
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Resources
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
          <div className="col-span-2 md:col-span-1 lg:col-span-3 px-4">
            <h5 className="text-base font-normal mb-8">Legal</h5>
            <ul className="mb-8 text-sm text-gray-300">
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a
                    href="https://help.apomatix.com/knowledge/privacy-policy-website"
                    target="_blank"
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
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-3" />
                    Cookie Policy
                  </a>
                </span>
              </li>
              <li>
                <span className="h-8 leading-8 hover:text-white">
                  <a href="https://help.apomatix.com/knowledge" target="_blank">
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
            <p className="col-span-1 text-sm text-center mt-8 pt-8 pb-8 tracking-wider border-t border-teal-600">
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
