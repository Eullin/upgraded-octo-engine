import React, { useContext } from "react"
import { MenuContext } from "../../context/Menu"
import "./Backdrop.css"

const Backdrop = () => {
  const { CloseMenu } = useContext(MenuContext)
  return <div className="backdrop" onClick={CloseMenu} />
}

export default Backdrop
