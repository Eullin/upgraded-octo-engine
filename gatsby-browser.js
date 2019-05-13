import React from "react"
import "./src/styles/global.css"

import MenuProvider from "./src/context/Menu"

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
)
