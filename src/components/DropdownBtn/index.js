import React from "react"
import "./DropdownBtn.css"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  background-color: #fff;
  max-width: 13rem;
  padding: 1rem;
  position: fixed;
`

const DropdownBtn = () => (
  <div className="sidebar">
    <div className="main-navigation">
      <div className="main-nav">
        <div className="current-menu-ancestor">
          <ul className="current-menu-item">
            Text 1<li className="sub-menu">sub-menu 1</li>
            <li className="sub-menu">sub-menu 2</li>
            <li className="sub-menu">sub-menu 3</li>
          </ul>
          <button className="dropdown-menu-toggle">Butoon</button>
          <ul className="current-menu-item">
            Text 2<li className="sub-menu">sub-menu 1</li>
            <li className="sub-menu">sub-menu 2</li>
            <li className="sub-menu">sub-menu 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default DropdownBtn

/* 

  <Container>
    <ul style={{ padding: "0", listStyleType: "none" }}>
      <li>
        <Link activeClassName="active" to="/auto-nuevo">
          Title
        </Link>
        <ul className="sub-menu">
          <Link to="#">Sub-page 1</Link>
          <Link to="#">Sub-page 2</Link>
          <Link to="#">Sub-page 3</Link>
        </ul>
      </li>
      <li>
        <Link activeClassName="active" to="/auto-usado">
          Title 2
        </Link>
        <ul className="sub-menu">
          <Link to="#">Sub-page 1</Link>
          <Link to="#">Sub-page 2</Link>
          <Link to="#">Sub-page 3</Link>
        </ul>
      </li>
    </ul>
  </Container>
*/
