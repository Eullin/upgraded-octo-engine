import React, { useContext } from "react"
import "./Toolbar.css"
import ToggleButton from "../SideDrawer/DrawerToggleButton"
import { MenuContext } from "../../context/Menu"
import SideDrawer from "../SideDrawer/SideDrawer"
import Backdrop from "../Backdrop/Backdrop"

const toolbar = () => {
  const { isOpen, closeMenu } = useContext(MenuContext)
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <img src="./favicon.ico" />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <a href="/auto-usado">Auto Usado</a>
            </li>
            <li>
              <a href="/auto-nuevo">Auto Nuevo</a>
            </li>
          </ul>
        </div>
        <SideDrawer show={isOpen} />
        {isOpen ? <Backdrop click={closeMenu} /> : null}
        <div className="togglebar_toggle-button">
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}

export default toolbar
