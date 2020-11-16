import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import JohnImage from "../assets/img/john-photo.png"

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
      <div className="text-center mr-8">
        <div className="text-sm bg-white relative mb-12 p-5 rounded shadow-ax comment">
          Professional team, and easy to use platform, allowed us to identify
          risks, apply appropriate solutions, and future-proof our business.
          This has put us in firm control of our compliance activities across
          our whole business. we're happy to have Apomatix by our side.
        </div>
        <div className="mb-5 flex justify-center">
          <img src={JohnImage} className="w-20 h-20 rounded-full" />
        </div>
      </div>
      <div className="border border-red-500 text-center">
        <h3>2</h3>
      </div>
      <div className="border border-red-500 text-center">
        <h3>3</h3>
      </div>
      <div className="border border-red-500 text-center">
        <h3>4</h3>
      </div>
      <div className="border border-red-500 text-center">
        <h3>5</h3>
      </div>
      <div className="border border-red-500 text-center">
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default Testimonials
