import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import AzureLogo from "../assets/img/partner-cloud.png"
import SendgridLogo from "../assets/img/partner-sendgrid.png"
import TwilioLogo from "../assets/img/partner-twillio.png"
import StripeLogo from "../assets/img/partner-stripe.png"
import AtlassLogo from "../assets/img/partner-atlassian.png"
import HubspotLogo from "../assets/img/partner-hubspot.png"

let clients = [
  {
    image: AzureLogo,
    name: "Azure",
  },
  {
    image: SendgridLogo,
    name: "SendGrid",
  },
  {
    image: TwilioLogo,
    name: "Twilio",
  },
  {
    image: StripeLogo,
    name: "Stripe",
  },
  {
    image: AtlassLogo,
    name: "Atlassian",
  },
  {
    image: HubspotLogo,
    name: "Hubspot",
  },
]

const PartnersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {clients.map(x => (
        <div className="text-center focus:outline-none px-8" key={x.name}>
          <img src={x.image} alt={x.name} />
        </div>
      ))}
    </Slider>
  )
}

export default PartnersCarousel
