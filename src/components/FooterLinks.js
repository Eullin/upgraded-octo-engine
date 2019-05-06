import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.div`
  height: 305px;
  background-color: #007fcd;
  width: 100%;
`

const FooterLinks = props => (
  <div>
    <ul style={{ listStyle: `none`, float: `right`, margin: "0" }}>
      <li style={{ display: `inline-block`, marginRight: `2rem` }}>
        <Link
          to={props.to}
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          {props.children}
        </Link>
      </li>
    </ul>
  </div>
)
export default FooterLinks
