import React from "react"
import Footer from "./FooterLinks"
import ButtonAppBar from "../components/ButtonAppBar"

/* const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
) */

export default ({ children }) => (
  <div>
    <ButtonAppBar />
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 650,
        padding: `0 1rem`,
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
)
