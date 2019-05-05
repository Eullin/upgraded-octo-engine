import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <Link to="/auto-nuevo/">
      <button>Nuevo</button>
    </Link>
    <Link to="/auto-usado/">
      <button>Usado</button>
    </Link>
  </Layout>
)
