import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import EfficiencyIcon from "../../assets/img/efficiency-icon.svg"
import TreatmentIcon from "../../assets/img/treatment-icon.svg"
import SafeguardIcon from "../../assets/img/trust-icon.svg"
import AutomateIcon from "../../assets/img/automate-icon.svg"
import MoneyIcon from "../../assets/img/money-icon.svg"
import EasyIcon from "../../assets/img/easytouse-icon.svg"
import DavLogo from "../../assets/img/ax-client-dav.png"
import PepsiLogo from "../../assets/img/ax-client-pepsi.png"
import KnightFrankLogo from "../../assets/img/ax-client-knight-frank.png"
import HTBLogo from "../../assets/img/ax-client-htb.png"
import MaxisLogo from "../../assets/img/ax-client-maxis.png"
import SEO from "../../components/seo"
import SignupForm from "../../components/signupForm"

const RiskAssessmentTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      dashboardImg: file(relativePath: { eq: "riskdashboard-laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 552, maxHeight: 290, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      apomatixCircleImg: file(
        relativePath: { eq: "apomatix-logo-circle.webp" }
      ) {
        childImageSharp {
          fluid(maxWidth: 80, maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vartanImg: file(relativePath: { eq: "vartan-sarkissian.png" }) {
        childImageSharp {
          fluid(maxWidth: 270, maxHeight: 270, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  let currentYear = new Date().getFullYear()
  const dashboardImg = data.dashboardImg.childImageSharp.fluid
  const logoImg = data.apomatixCircleImg.childImageSharp.fluid
  const vartanImg = data.vartanImg.childImageSharp.fluid

  return (
    <div>
      <SEO
        title="Next Gen Risk Management Software | Apomatix"
        description="Cloud hosted Risk Management Software for risk professionals. Apomatix's software has features to help you easily plan and conduct your risk assessments."
      />
      <section className="pt-16 pb-24 bg-branding">
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 flex justify-between items-center">
              <Img fluid={logoImg} className="w-8" />
              <h2 className="text-base lg:text-lg font-light">
                marketing@apomatix.com
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4 my-8">
              <h1 className="text-4xl lg:text-5xl mb-5 font-bold">
                Next Gen Risk Management Software
              </h1>
              <p className="text-lg mb-2">
                Say goodbye to out of date spreadsheets.
              </p>
              <ul className="list-disc list-inside mb-2">
                <li>
                  <span className="font-extrabold">Quick:</span> Get started in
                  less than 10 minutes
                </li>
                <li>
                  <span className="font-extrabold">Easy:</span> Designed by risk
                  management experts
                </li>
                <li>
                  <span className="font-extrabold">Affordable:</span> Costs just
                  £174 per month (inc VAT)
                </li>
              </ul>
              <p className="text-lg mb-12">
                Start your{" "}
                <span className="font-extrabold">14-day free trial</span> now.
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-8 col-start-3 lg:col-span-10 lg:col-start-2">
                  <Img
                    fluid={dashboardImg}
                    className="w-full"
                    alt="The dashboard on Apomatix's Risk Management Software"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4 my-8">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-10 grid grid-cols-12 sm:auto-cols-min">
        <div className="col-span-12 flex justify-center text-lg font-light mb-2">
          Trusted By
        </div>
        <div className="col-span-12 flex justify-center">
          <div>
            <img
              src={KnightFrankLogo}
              alt="Knight Frank Logo"
              className="mx-3 w-24 sm:w-auto"
            />
          </div>
          <div>
            <img
              src={DavLogo}
              alt="Davidoff of London Logo"
              className="mx-3 w-24 sm:w-auto"
            />
          </div>

          <div>
            <img
              src={PepsiLogo}
              alt="Pepsi Georgia Logo"
              className="mx-3 w-24 sm:w-auto"
            />
          </div>
          <div>
            <img
              src={MaxisLogo}
              alt="Maxis GBN Logo"
              className="mx-3 w-24 sm:w-auto"
            />
          </div>
          <div>
            <img src={HTBLogo} alt="HTB Logo" className="mx-3 w-24 sm:w-auto" />
          </div>
        </div>
      </div>
      <section className="pt-20 mb-8 bg-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={EfficiencyIcon}
                  alt="icon"
                  className="text-branding mb-8 w-10"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Quick to Start
                </h3>
                <p className="text-base mb-5">
                  Start improving your risk management practice in{" "}
                  <span className="font-bold">under 10 minutes</span>. Sign up
                  &amp; onboard quickly, and get going immediately
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={EasyIcon}
                  alt="icon"
                  className="text-branding mb-8 w-8"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Easy to Use
                </h3>
                <p className="text-base mb-5">
                  Risk management software{" "}
                  <span className="font-bold">
                    designed by risk professionals
                  </span>{" "}
                  to ensure a seamless user experience
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={TreatmentIcon}
                  alt="icon"
                  className="text-branding mb-8 w-10"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Built to the ISO 31000 Standard
                </h3>
                <p className="text-base mb-5">
                  Identify, Analyse and Evaluate your organisation's risks
                  centrally. Work with{" "}
                  <span className="font-bold">internal and external teams</span>
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={AutomateIcon}
                  alt="icon"
                  className="text-branding mb-8 w-10"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Automated Reporting
                </h3>
                <p className="text-base mb-5">
                  Risk assessment software includes reporting, notifications and
                  a <span className="font-bold">real time dashboard</span> to
                  help you understand your most critical risks
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={MoneyIcon}
                  alt="icon"
                  className="text-branding mb-8 w-10"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Affordable
                </h3>
                <p className="text-base mb-5">
                  Costs just <span className="font-bold">£174 per month</span>.
                  No credit card or financial information required to sign-up
                  for our <span className="font-bold">14 day free trial</span>
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4 md:mb-8">
              <div className="p-8">
                <img
                  src={SafeguardIcon}
                  alt="icon"
                  className="text-branding mb-8 w-10"
                />
                <h3 className="mb-2 text-lg font-bold text-branding relative tracking-wider">
                  Secure
                </h3>
                <p className="text-base mb-5">
                  Apomatix's risk assessment software is safe and secure.
                  Apomatix holds{" "}
                  <span className="font-bold">Cyber Essentials</span> &amp;{" "}
                  <span className="font-bold">
                    IASME Governance Certification
                  </span>{" "}
                  and are regularly pen tested by a 3rd party
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 px-4">
              <div className="p-8">
                <h3 className="mb-2 text-lg font-bold relative tracking-wider">
                  What's the challenge?
                </h3>
                <p className="text-base mb-5">
                  Risk management professionals arguably face more challenges
                  than ever before. Risk management is now of critical
                  importance, and failings in an organisation’s risk management
                  regime can have severe consequences. But the increase in
                  workload has not led to a change in methodology. The old way
                  of conducting risk assessments - using spreadsheet templates –
                  is inefficient. It means that a risk manager's time is mostly
                  spent: gathering information from colleagues, writing up
                  risks, chasing overdue actions and attempting to manually
                  build reports
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4">
              <div className="p-8">
                <h3 className="mb-2 text-lg font-bold relative tracking-wider">
                  What's the cost?
                </h3>
                <p className="text-base mb-5">
                  Pricing for our risk assessment software costs just{" "}
                  <span className="font-bold">£174 per month</span> (inc VAT)
                  for <span className="font-bold">four users</span>. Access to
                  additional features is charged separately. Before purchasing,
                  you can take advantage of our no commitment 14 day free trial
                  to experience the software in action. No credit card or
                  financial information is required to sign up for our free
                  trial.
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4">
              <div className="p-8">
                <h3 className="mb-2 text-lg font-bold relative tracking-wider">
                  Why use Apomatix?
                </h3>
                <p className="text-base mb-5">
                  Apomatix’s software was designed by risk management experts
                  with over 90 years of experience. Our aim is to make risk
                  assessments simpler, less disruptive and less error prone. Our
                  risk assessment software has features to help you easily plan,
                  coordinate and conduct your risk assessments. We also have
                  tools to automate the reporting process, saving you from
                  having to manually build these in your spreadsheet. Together,
                  these features help save time, reduce the burden of managing
                  your risk register and improve the quality of your risk
                  assessments.
                </p>
              </div>
            </div>
            <div className="col-span-1 px-4">
              <div className="p-8">
                <h3 className="mb-2 text-lg font-bold relative tracking-wider">
                  Trusted by brands like Pepsi and Davidoff
                </h3>
                <p className="text-base mb-5">
                  Your trust is important to us, and we work hard to ensure we
                  keep it. We only ask for personal information we need, and
                  hold any information received securely in accordance with our{" "}
                  <a
                    className="text-branding font-bold hover:underline"
                    href="https://help.apomatix.com/knowledge/privacy-policy-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                  . When registering an account, all we require is your name and
                  your email address. We are Cyber Essentials and IASME
                  Governance certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-branding">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 text-white text-center">
            <div className="col-span-12 mb-4">
              <FontAwesomeIcon icon={faQuoteRight} className="text-4xl" />
            </div>
            <div className="col-span-10 col-start-2 lg:col-span-6 lg:col-start-4 flex flex-col items-center">
              <p className="text-lg lg:text-xl mb-5">
                I know first-hand the challenges that risk management
                professionals face. More than ever, organizations are operating
                in complex, fast changing environments. Our goal is to build
                tools to help risk managers deal with this new reality.
              </p>
              <p className="text-2xl font-extrabold mb-5">
                Vartan Sarkissian (CEO &amp; Founder) <br />
                Apomatix
              </p>
              <Img fluid={vartanImg} className="rounded-full w-24" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 text-center">
            <div className="col-span-12 mb-4 text-2xl font-bold">
              Want to know more?
            </div>
            <div className="col-span-10 col-start-2">
              <p className="text-lg mb-5">
                If you would like to learn a little more about Apomatix - our
                products and services - before signing up, please feel free to
                visit our website where you can book a call with a member of our
                team:{" "}
                <a
                  className="text-branding font-bold hover:underline"
                  href="https://www.apomatix.com"
                >
                  www.apomatix.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-10 flex justify-center bg-gray-200">
        © {currentYear} Apomatix
      </div>
    </div>
  )
}

export default RiskAssessmentTemplate
