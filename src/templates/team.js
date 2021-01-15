import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

let team = [
  {
    name: "Vartan Sarkissian",
    position: "CEO and Founder",
    image: "teamImage1",
    href: "https://www.linkedin.com/in/vartan-sarkissian-56500a142/",
    summary:
      "Over 14 years in start up experience, with 2 software exits and Founding Director of East West Institute's Worldwide Cybersecurity Initiative - the first Policy Track 2 bringing together 47 countries & 300 organisations on complex cybersecurity issues. Vartan is on the Board of Inalca Eurasia; has previously served as a Senior Advisory to EY and as Managing Director of Knightsbridge Cybersystems, a cybersecurity focused angel investor.",
  },
  {
    name: "Alex Eburne",
    position: "CTO",
    image: "teamImage2",
    href: "https://www.linkedin.com/in/alex-eburne/",
    summary:
      "Alex has worked in software development for 17 years, across different business areas including market research and financial applications. For the first part of his career working as a developer but in the last 7 years has led development teams and delivery of enterprise level financial applications. In the role of CTO, he oversees the technical side of Apomatix and the progress of the development of the software products.",
  },
  {
    name: "Henry Garle",
    position: "Software Architect",
    image: "teamImage3",
    href: "https://www.linkedin.com/in/henry-garle-520a5929/",
    summary:
      "Henry has 10 years of experience developing scalable cloud solutions, having worked on financial applications and most recently a crowd sourcing platform. He is passionate about software development and enjoys the challenges that come from implementing complex system requirements. As architect Henry is responsible for leading technical implementation and planning of the new apomatix platform and ensuring that our systems are secure, scalable and reliable.",
  },
  {
    name: "Matt Quinn",
    position: "Head of Operations",
    image: "teamImage4",
    href: "https://www.linkedin.com/in/matthew-quinn-039799150/",
    summary:
      "Matt is a Certified ISO 27001 Lead Implementor & Internal Auditor with experience in implementing an ISO certified Information Security Management System (ISMS). Having worked in the software industry in commercial as well as compliance roles, Matt has a unique understanding of how security and compliance can be aligned with business needs. At Apomatix Matt is responsible for data security, GDPR and other regulatory compliance.",
  },
  {
    name: "Ksenia Arkhipova",
    position: "Executive Assistant ",
    image: "teamImage5",
    href: "https://www.linkedin.com/in/ksenia-arkhipova-59685217",
    summary:
      "Ksenia holds a Masters’ degree in International Management from the University of London. She has worked in a wide variety of industries and has extensive experience in providing administrative and business support for high net-worth individuals and those in senior executive management positions. At Apomatix, Ksenia is responsible for the smooth running of all day to day operations and assisting the CEO in his role.",
  },
  {
    name: "Ben Spencer",
    position: "Tech Lead",
    image: "teamImage6",
    href: "https://www.linkedin.com/in/ben-spencer/",
    summary:
      "Ben started off his software development career six years ago after achieving a first class degree in Computer Science. His first role saw him join the finance industry as a Junior Software Developer. Having progressed to become a senior developer, Ben decided it was time for a change and new challenge which is when he joined Apomatix. Ben is currently responsible for building the new platform alongside managing, coaching and mentoring the junior developers of the team.",
  },
  {
    name: "Haseeb Ali",
    position: "Frontend Developer",
    image: "teamImage7",
    href: "https://www.linkedin.com/in/haseeb-ali-29719615a/",
    summary:
      "Haseeb holds a degree in Pharmacology and after 2 years of working in a lab decided that this wasn’t for him. He started learning web development by himself and at the same time travelled around the world and when he got back, he landed a job as a developer for a startup company. Haseeb enjoys working with JavaScript, learning new things to improve his coding skills and contributes to open source in his spare time.",
  },
  {
    name: "Rob Parker",
    position: "Frontend Developer",
    image: "teamImage8",
    href: "https://www.linkedin.com/in/robert-parker-8a62b4179/",
    summary:
      "Rob has spent the last 6 years working in an Application support environment for a global hospitality management platform. Whilst in the role he taught himself JavaScript and after 3 years of self taught programming decided to pursue software development as career. Fresh out of a Software Engineering Bootcamp he joined Apomatix as a Junior Software Developer and is responsible for the development and maintenance of our software platform.",
  },
]

let advisors = [
  {
    name: "Dmitri Alperovitch",
    image: "advisorImage1",
    summary:
      "Executive Chairman at Silverado Policy Accelerator, Co-Founder & former CTO of CrowdStrike and Former VP Threat Research at McAfee",
  },
  {
    name: "Geoff Anders",
    image: "advisorImage2",
    summary:
      "10 years Machine Learning A.I. at Cerebellum Capital and 20 years of quantitative modelling expertise",
  },
  {
    name: "Cam Keogh-Ly",
    image: "advisorImage3",
    summary:
      "Information Risk Management and Network Security professional. Credit Suisse, Reuters, Accenture and Bank of America Merrill Lynch",
  },
  {
    name: "Nick Thompson",
    image: "advisorImage4",
    summary:
      "Managing Director and owner of DCSL Software, angel investor, software developer",
  },
  {
    name: "Hayk Sarkissian",
    image: "advisorImage5",
    summary:
      "Chairman of Inalca Eurasia and Highury Holdings. Founding Manager of Revery, an early stage Venture Capital firm",
  },
]

export const pageQuery = graphql`
  query TeamQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        tagline
        teamImage1 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage2 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage3 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage4 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage5 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage6 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage7 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        teamImage8 {
          childImageSharp {
            fixed(width: 270, height: 270, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        advisorImage1 {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        advisorImage2 {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        advisorImage3 {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        advisorImage4 {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
            sizes {
              src
            }
          }
        }
        advisorImage5 {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 80) {
              ...GatsbyImageSharpFixed_withWebp
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
const TeamPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={frontmatter.tagline} />
      <div className="container mx-auto mt-40">
        <div className="px-4">
          <h1 className="text-3xl text-center font-medium">Meet our team</h1>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32">
          {team.map(x => (
            <div
              className="col-span-1 flex flex-col items-center px-4"
              key={x.name}
            >
              <Img
                fixed={frontmatter[x.image].childImageSharp.fixed}
                className="rounded-full"
                alt={x.name}
              />
              <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                {x.name}
              </h3>
              <div className="flex items-center pb-5 text-base">
                <h4 className="font-semibold">{x.position} |</h4>

                <a href={x.href} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-branding ml-1 align-middle"
                  />
                </a>
              </div>
              <p className="text-center px-12">{x.summary}</p>
            </div>
          ))}
        </div>

        <div className="px-4 pt-40">
          <h1 className="text-3xl text-center font-medium">Our advisors</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 mt-32">
          {advisors.map(y => (
            <div
              className="col-span-1 flex flex-col items-center px-4"
              key={y.name}
            >
              <Img
                fixed={frontmatter[y.image].childImageSharp.fixed}
                className="rounded-full"
                alt={y.name}
              />
              <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                {y.name}
              </h3>
              <p className="text-center px-12">{y.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
