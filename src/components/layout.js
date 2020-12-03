import React, { useEffect } from "react"
import Navigation from "./navigation"
import "../assets/css/index.css"
import Footer from "./footer"
import "typeface-nunito"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.load()
    } else {
      var hubspot = document.createElement("script")
      hubspot.src = "//js.hs-scripts.com/5098618.js"
      hubspot.setAttribute("async", "")
      hubspot.setAttribute("defer", "")
      document.head.appendChild(hubspot)
    }
  }, [])
  const { pathname } = useLocation()

  let buttonStyles =
    "px-6 border border-white rounded h-8 transition duration-300 ease-out uppercase text-xs tracking-wider font-bold leading- mx-2 mb-4"

  return (
    <>
      <CookieConsent
        overlay
        enableDeclineButton
        flipButtons
        disableButtonStyles
        location="top"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ backgroundColor: "#33475B", display: "block" }}
        contentClasses="text-center"
        buttonWrapperClasses="flex justify-center"
        buttonClasses={`${buttonStyles} text-darkblue bg-white hover:bg-darkblue hover:text-white`}
        declineButtonClasses={`${buttonStyles} text-white hover:bg-white hover:text-darkblue`}
        onAccept={() => {
          Cookies.set("gatsby-gdpr-google-tagmanager", true)
          initializeAndTrack(pathname)
        }}
        onDecline={() => {
          Cookies.set("gatsby-gdpr-google-tagmanager", false)
        }}
      >
        By Clicking on 'Accept', you agree to the storing of cookies on your
        device to enhance site navigation, analyze site usage, and assist in our
        marketing efforts. For more info see our{" "}
        <a
          className="underline"
          href="https://help.apomatix.com/knowledge/cookie-policy-website"
          target="_blank"
          rel="noreferrer"
        >
          Cookie Policy
        </a>
        .
      </CookieConsent>
      <div>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
