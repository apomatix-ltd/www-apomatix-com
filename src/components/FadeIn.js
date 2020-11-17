import React, { useState, useEffect, useRef } from "react"

const FadeIn = props => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  let anchorSettings = {
    top: "top-0",
    bottom: "bottom-0",
  }
  let animationSpeed = {
    300: "duration-300",
    400: "duration-400",
    500: "duration-500",
    600: "duration-600",
    700: "duration-700",
    800: "duration-800",
    1000: "duration-1000",
  }
  let anchor = anchorSettings.top
  let speed = animationSpeed["300"]

  if (props.speed) {
    speed = animationSpeed[props.speed]
  }

  if (props.anchor) {
    anchor = anchorSettings[props.anchor]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
        }
      })
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])
  let translateClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-8 opacity-0"
  return (
    <div
      className={`relative transition ${speed} ease-in-out delay-200 transform ${translateClass} ${props.className}`}
    >
      {props.children}
      <span ref={domRef} className={`absolute ${anchor}`}></span>
    </div>
  )
}

export default FadeIn
