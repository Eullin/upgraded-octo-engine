import React, { useContext } from "react"
import { MenuContext } from "../../context/Menu"
import "./DrawerToggleButton.css"

const drawerToggleButton = props => {
  const { OpenMenu } = useContext(MenuContext)
  return (
    <button className="toggle-button" onClick={OpenMenu}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  )
}

export default drawerToggleButton
