import React from "react"
import "./Toolbar.css"
import ToggleButton from "../SideDrawer/DrawerToggleButton"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li>
            <a href="/auto-usado">Test 1</a>
          </li>
          <li>
            <a href="/auto-nuevo">Test 2</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
