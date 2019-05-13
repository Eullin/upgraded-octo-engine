import React from "react"
import { Link } from "gatsby"
import "./ButtonLink.css"

export default function ButtonLink({ styleName, text, to }) {
  return (
    <div
      style={{
        padding: "0.3rem 0.5rem",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Link className={`button-link ${styleName || ""}`} to={to}>
        {text}
      </Link>
    </div>
  )
}
