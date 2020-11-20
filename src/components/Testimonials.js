import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import JohnImage from "../assets/img/john-photo.png"
import DennisImage from "../assets/img/dennis.png"
import GurgenImage from "../assets/img/gurgen.png"
import MeiImage from "../assets/img/mei.png"
import RobImage from "../assets/img/robert-w.png"
import WillImage from "../assets/img/will.png"

let testimonials = [
  {
    comment:
      "Professional team, and easy to use platform, allowed us to identify risks, apply appropriate solutions, and future-proof our business. This has put us in firm control of our compliance activities across our whole business. we're happy to have Apomatix by our side.",
    image: JohnImage,
    name: "John Williams",
    company: "Equiti Global Markets",
  },
  {
    comment:
      "Given us a clear view of our cyber risks by modernizing our cyber strategy program. Apomatix is a well positioned player in the market.",
    image: DennisImage,
    name: "Dennis Rocks",
    company: "Rail Delivery Group (UK)",
  },
  {
    comment:
      "Experienced and trusted partner who helped us to quickly diagnose our cyber and compliance risks, and to establish a robust and practical cyber strategy for the future. We are delighted with their support and added value to our growing enterprise.",
    image: MeiImage,
    name: "Mei Li Powell",
    company: "Borne",
  },
  {
    comment:
      "Their professional team, and easy to use software, allowed us to identify our risks, apply appropriate solutions, and future-proof our security strategy.",
    image: GurgenImage,
    name: "Gurgen Arutyunyan",
    company: "Premier Foods",
  },
  {
    comment:
      "I have used the tool both as a client and as an Information Security consultant. It is very well thought out and practical, giving practitioners in the field an easy to use platform to boost their audits and obtain a real time auditor's view of the environment.",
    image: RobImage,
    name: "Robert Wagstraffe",
    company: "RAW Consulting Ltd",
  },
  {
    comment:
      "Apomatix has provided us with peace of mind when it comes to our needs for Quality management. As a software development firm, maintaining and managing quality is of utmost importance. We have used the platform to align, assess and manage quality needs and risks. Apomatix was also used to successfully demonstrate and communicate our Quality management with our auditors",
    image: WillImage,
    name: "Will Faulkner",
    company: "DCSL Software",
  },
]

const Testimonials = () => {
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
  return (
    <Slider {...settings}>
      {testimonials.map(x => (
        <div className="text-center focus:outline-none px-8" key={x.name}>
          <div className="text-base bg-white relative mb-12 p-5 rounded shadow-ax comment lg:h-48 flex items-center">
            {x.comment}
          </div>
          <div className="mb-5">
            <img
              src={x.image}
              className="w-20 h-20 rounded-full mx-auto"
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
