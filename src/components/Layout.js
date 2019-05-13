import React from "react"
import Toolbar from "../components/Toolbar/Toolbar"

export default ({ children }) => (
  <div>
    <Toolbar />
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 650,
        padding: `0 1rem`,
      }}
    >
      {children}
    </div>
  </div>
)
