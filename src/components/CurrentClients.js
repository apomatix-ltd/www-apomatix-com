import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import BorneLogo from "../assets/img/ax-client-borne.png"
import DavLogo from "../assets/img/ax-client-dav.png"
import EquitiLogo from "../assets/img/ax-client-equiti.png"
import HTBLogo from "../assets/img/ax-client-htb.png"
import PepsiLogo from "../assets/img/ax-client-pepsi.png"
import RailLogo from "../assets/img/ax-client-rail.png"

let clients = [
  {
    image: EquitiLogo,
    name: "Equiti",
    href: "https://www.equiti.com/uk-en/",
  },
  {
    image: BorneLogo,
    name: "Borne",
    href: "https://www.borne.org.uk/",
  },
  {
    image: RailLogo,
    name: "Rail Delivery Group",
    href: "https://www.raildeliverygroup.com/",
  },
  {
    image: PepsiLogo,
    name: "Pepsi Georgia",
    href: "/",
  },
  {
    image: HTBLogo,
    name: "HTB",
    href: "https://www.htb.org/",
  },
  {
    image: DavLogo,
    name: "Davidoff of London",
    href: "http://www.davidofflondon.com/",
  },
]

const CurrentClients = () => {
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

export default CurrentClients
