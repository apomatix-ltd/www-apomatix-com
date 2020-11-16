import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import JohnImage from "../assets/img/john-photo.png"
import DennisImage from "../assets/img/dennis.png"
import GurgenImage from "../assets/img/gurgen.png"
import MeiImage from "../assets/img/mei.png"
import RobImage from "../assets/img/robert-w.png"

let testimonials = [
  {
    comment:
      "Professional team, and easy to use platform, allowed us to identify risks, apply appropriate solutions, and future-proof our business. This has put us in firm control of our compliance activities across our whole business. we're happy to have Apomatix by our side.",
    image: JohnImage,
    name: "John Williams",
    company: "Equiti Global Markets",
  },
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div className="text-center pr-8">
        <div className="text-sm bg-white relative mb-12 p-5 rounded shadow-ax comment">
          Professional team, and easy to use platform, allowed us to identify
          risks, apply appropriate solutions, and future-proof our business.
          This has put us in firm control of our compliance activities across
          our whole business. we're happy to have Apomatix by our side.
        </div>
        <div className="mb-5">
          <img src={JohnImage} className="w-20 h-20 rounded-full mx-auto" />
        </div>
        <div>
          <span className="block text-base">John Williams</span>
          <span className="block text-sm">Equiti Global Markets</span>
        </div>
      </div>
      {testimonials.map(x => (
        <div className="text-center pr-8">
          <div className="text-sm bg-white relative mb-12 p-5 rounded shadow-ax comment">
            {x.comment}
          </div>
          <div className="mb-5">
            <img src={x.image} className="w-20 h-20 rounded-full mx-auto" />
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
