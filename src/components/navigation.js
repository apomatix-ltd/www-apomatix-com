import React, { useState } from "react"
import { Link } from "gatsby"
import ApomatixLogo from "../assets/img/ax-logo-white.png"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const MenuItems = [
  {
    title: "Products",
    children: [
      { path: "/product/asset-manager", title: "Asset Manager" },
      { path: "/product/internalcontrols", title: "Internals Control Manager" },
      { path: "/product/riskmanager", title: "Risk Manager" },
    ],
  },
  {
    path: "/team",
    title: "Team",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/pricing",
    title: "Pricing",
  },
]

const Menu = props => {
  const [selectedMenu, setSelectedMenu] = useState("")
  const setMenu = x => () => {
    if (selectedMenu === x) {
      return setSelectedMenu("")
    }
    return setSelectedMenu(x)
  }
  console.log("🚀 ~ file: navigation.js ~ line 30 ~ selectedMenu", selectedMenu)

  return (
    <>
      {MenuItems.map(menuItem => {
        let menuTitle = menuItem.title
        let hasChildren = menuItem.children && !!menuItem.children.length
        if (!hasChildren) {
          menuTitle = (
            <Link to={menuItem.path} className="block">
              <span
                className={`h-12 leading-12 pl-8 text-sm lg:block lg:h-10 relative`}
              >
                {menuTitle}
              </span>
            </Link>
          )
        } else {
          menuTitle = (
            <span
              className={`h-12 leading-12 pl-8 text-sm lg:block lg:h-10 relative cursor-pointer`}
            >
              {menuTitle}{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className="float-right mt-4 mr-10 sm:mr-6 lg:mt-0 lg:mr-0 lg:float-none lg:ml-1 lg:align-middle"
              />
            </span>
          )
        }

        return (
          <li
            key={menuItem.title}
            onClick={setMenu(menuItem.title)}
            className={`relative w-full bg-white lg:bg-branding border-b border-gray-300 lg:px-5 lg:text-white lg:border-b-0 lg:w-auto ${
              selectedMenu === menuItem.title && "bg-gray-200"
            }`}
          >
            {menuTitle}
            {hasChildren && (
              <ul
                className={`h-auto z-1 relative top-0 w-full overflow-hidden rounded bg-branding lg:absolute lg:w-64 lg:top-10 transition duration-300 ease-linear delay-75 transform ${
                  selectedMenu === menuItem.title
                    ? "translate-y-0 visible opacity-100"
                    : "-translate-y-6 invisible opacity-0 lg:block hidden"
                }`}
              >
                {menuItem.children.map(x => (
                  <li
                    key={x.title}
                    className="w-full bg-white border-b border-gray-200 lg:text-gray-900 lg:hover:bg-gray-200 transform transition ease-linear duration-150 lg:hover:translate-x-1 lg:border-b-0"
                  >
                    <Link to={x.path} activeClassName="text-branding">
                      <span className="pl-12 lg:pl-5 block relative h-12 leading-12 submenu__span">
                        {x.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </>
  )
}

class Navigation extends React.Component {
  state = { showMenu: false }

  handleToggleClick = () => {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const { showMenu } = this.state

    return (
      <header className="bg-branding h-20 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto lg:px-4">
          <nav className="overflow-hidden lg:overflow-visible">
            <span className="float-left mt-6 pt-1 ml-8 lg:ml-0">
              <Link to="/">
                <img className="w-32" src={ApomatixLogo} alt="Apomatix logo" />
              </Link>
            </span>

            <ul
              className={`w-full mt-20 ml-0 ${
                !showMenu && "hidden"
              } lg:flex lg:mt-4 lg:float-left lg:ml-20 lg:w-auto`}
            >
              <Menu />
            </ul>

            <div
              className="hamburger__container lg:hidden"
              onClick={this.handleToggleClick}
            >
              <span
                className={
                  showMenu ? "hamburger__menu--open" : "hamburger__menu--closed"
                }
              >
                Menu
              </span>
            </div>

            <div className="hidden lg:block float-right">
              <div className="mt-6 float-left">
                <a href="https://app.apomatix.com/login">
                  <Button type="secondary">Sign in</Button>
                </a>
              </div>
              <div className="mt-6 float-left ml-4">
                <a href="https://app.apomatix.com/register/website-risk-trial">
                  <Button type="primary">Start trial</Button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navigation
