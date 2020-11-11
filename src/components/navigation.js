import React, { useState } from "react"
import { Link } from "gatsby"
import ApomatixLogo from "../assets/img/ax-logo-white.png"
import "animate.css/animate.min.css"
import Button from "./Button"

const MenuItems = [
  {
    path: "/",
    title: "Products",
    children: [
      { path: "/", title: "Asset manager" },
      { path: "/", title: "Internals control manager" },
      { path: "/", title: "Risk manager" },
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
]

const Menu = props => {
  const [selectedMenu, setSelectedMenu] = useState("")
  const setMenu = x => () => {
    if (selectedMenu === x) {
      return setSelectedMenu("")
    }
    return setSelectedMenu(x)
  }
  return (
    <>
      {MenuItems.map(menuItem => {
        let menuTitle = menuItem.title
        let hasChildren = menuItem.children && !!menuItem.children.length
        if (!hasChildren) {
          menuTitle = <Link to={menuItem.path}>{menuTitle}</Link>
        }

        return (
          <li
            key={menuItem.title}
            onMouseEnter={setMenu(menuItem.title)}
            onMouseLeave={setMenu(menuItem.title)}
            className={`relative w-full bg-white lg:bg-branding border-b border-gray-300 lg:pl-5 lg:pr-5 lg:text-white lg:border-b-0 lg:w-auto ${
              selectedMenu === menuItem.title && "bg-gray-200"
            }`}
          >
            <span
              className={`h-12 leading-12 pl-8 text-sm lg:block lg:h-10 lg:leading-10${
                selectedMenu === menuItem.title ? "" : "block"
              }`}
            >
              {menuTitle}
            </span>
            {hasChildren && (
              <ul
                className={`h-auto z-1 visible relative top-0 w-full overflow-hidden opacity-100 rounded-sm bg-white lg:absolute lg:w-64 lg:top-10 ${
                  selectedMenu === menuItem.title ? "" : "hidden "
                }`}
              >
                {menuItem.children.map(x => (
                  <li
                    key={x.title}
                    className="w-full border-b border-gray-200 lg:text-gray-900 lg:hover:bg-gray-200"
                  >
                    <Link to={x.path}>
                      <span className="pl-12 block relative h-12 leading-12 submenu__span">
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
    console.log(this.state.showMenu)
    const { showMenu } = this.state

    return (
      <header className="bg-branding h-20 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <nav className="overflow-hidden lg:overflow-visible">
            <span className="float-left mt-6 ml-8 lg:ml-0">
              <Link to="/">
                <img className="w-32" src={ApomatixLogo} />
              </Link>
            </span>

            <ul
              class={`w-full mt-20 ml-0 ${
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
                <Button type="secondary">Sign in</Button>
              </div>
              <div className="mt-6 float-left ml-4">
                <Button type="primary">Start trial</Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navigation
