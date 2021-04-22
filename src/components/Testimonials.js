import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

let testimonials = [
  {
    comment:
      "Experienced and trusted partner who helped us to quickly diagnose our risks, and to establish a robust and practical strategy for the future. We are delighted with their support and added value to our growing charity.",
    image: "meiImg",
    name: "Mei Li Powell",
    company: "Borne",
  },
  {
    comment:
      "I have used the tool both as a client and as an Information Security consultant. It is very well thought out and practical, giving practitioners in the field an easy to use platform to establish risk registers and obtain a real time view of the risk environment.",
    image: "robImg",
    name: "Robert Wagstraffe",
    company: "RAW Consulting Ltd",
  },
  {
    comment:
      "Professional team, and easy to use platform, allowed us to identify risks, apply appropriate solutions, and future-proof our business. This has put us in firm control of our compliance activities across our whole business. we're happy to have Apomatix by our side.",
    image: "johnImg",
    name: "John Williams",
    company: "Equiti Global Markets",
  },
  {
    comment:
      "Given us a clear view of our cyber risks by modernizing our cyber strategy program. Apomatix is a well positioned player in the market.",
    image: "dennisImg",
    name: "Dennis Rocks",
    company: "Rail Delivery Group (UK)",
  },
  {
    comment:
      "Their professional team, and easy to use software, allowed us to identify our risks, apply appropriate solutions, and future-proof our security strategy.",
    image: "gurgenImg",
    name: "Gurgen Arutyunyan",
    company: "Premier Foods",
  },
  {
    comment:
      "Apomatix has provided us with peace of mind when it comes to our needs for Quality management. As a software development firm, maintaining and managing quality is of utmost importance. We have used the platform to align, assess and manage quality needs and risks. Apomatix was also used to successfully demonstrate and communicate our Quality management with our auditors",
    image: "willImg",
    name: "Will Faulkner",
    company: "DCSL Software",
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 4000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
}

const Testimonials = props => {
  const data = useStaticQuery(graphql`
    query {
      johnImg: file(relativePath: { eq: "john-photo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      dennisImg: file(relativePath: { eq: "dennis.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      gurgenImg: file(relativePath: { eq: "gurgen.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      meiImg: file(relativePath: { eq: "mei.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      robImg: file(relativePath: { eq: "robert-w.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      willImg: file(relativePath: { eq: "will.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Slider {...settings}>
      {testimonials.map(x => (
        <div className="text-center focus:outline-none px-8" key={x.name}>
          <div className="text-base bg-white relative mb-12 p-5 rounded shadow-ax comment lg:h-48 flex items-center">
            {x.comment}
          </div>
          <div className="mb-5">
            <Img
              fixed={data[x.image].childImageSharp.fixed}
              className="rounded-full mx-auto"
              alt={x.name}
            />
          </div>
          <div>
            <span className="block text-base">{x.name}</span>
            <span className="block text-sm">{x.company}</span>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Testimonials
