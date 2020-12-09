import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import FadeIn from "../components/FadeIn"

export const pageQuery = graphql`
  query pricingQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        tagline
      }
    }
  }
`

const Pricing =  ({ data })  => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
  <Layout className="not-found-page">
    <SEO title={frontmatter.title} description={frontmatter.tagline} />
    <section className="container mx-auto pt-40 pb-18 text-gray-800">
      <div className="grid grid-cols-1">
        <div className="col-span-1 px-4 text-center">
          <h2 className="text-3xl mb-5">Pricing Plans</h2>
          <p className="text-base mb-12">
            We have a range of options to suit organisations of all sizes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FadeIn speed="400" className="col-span-1 px-4 mb-8" anchor="middle">
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
                <li className="mb-1">Work Management Tools</li>
                <ul className="text-sm font-light">
                  <li className="mb-3">- Calendar</li>
                  <li className="mb-3">- File Storage</li>
                  <li className="mb-3">- Risk Ownership</li>
                  <li className="mb-3">- Risk Maturity Tracking</li>
                  <li className="mb-3">- Notifications, due dates</li>
                  <li className="mb-3">- Task Manager</li>
                </ul>
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
        <FadeIn speed="600" className="col-span-1 px-4 mb-8" anchor="middle">
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
                <li className="mb-1">Work Management Tools</li>
                <ul className="text-sm font-light">
                  <li className="mb-3">- Calendar</li>
                  <li className="mb-3">- File Storage</li>
                  <li className="mb-3">- Risk Ownership</li>
                  <li className="mb-3">- Risk Maturity Tracking</li>
                  <li className="mb-3">- Notifications, due dates</li>
                  <li className="mb-3">- Task Manager</li>
                </ul>
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
        <FadeIn speed="800" className="col-span-1 px-4 mb-8" anchor="middle">
          <div className="rounded shadow-ax2 transform transition-transform ease-in-out duration-200 hover:-translate-y-2">
            <div className="h-32 flex items-center justify-center border-b border-gray-400 bg-branding rounded">
              <h3 className="text-base tracking-wide font-bold  text-white capitalize">
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
                <li className="mb-1">Work Management Tools</li>
                <ul className="text-sm font-light">
                  <li className="mb-3">- Kanban Board</li>
                  <li className="mb-3">- Calendar</li>
                  <li className="mb-3">- File Storage</li>
                  <li className="mb-3">- Risk Ownership</li>
                  <li className="mb-3">- Risk Maturity Tracking</li>
                  <li className="mb-3">- Notifications, due dates</li>
                  <li className="mb-3">- Task Manager</li>
                </ul>
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
  </Layout>
)
}

export default Pricing
