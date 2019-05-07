import React from "react"
import Layout from "../components/Layout"
import FooterLinks from "../components/FooterLinks"
import styled from "styled-components"
import Toolbar from "../components/Toolbar/Toolbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

const Footer = styled.div`
  display: flex;
  margin-top: 15rem;
  max-width: $content-max-width;
  order: 3;
  padding: 0 60px 35px;
  @media screen and (max-width: 768px) {
    margin-bottom: 8rem;
    padding: 0 1rem 1rem;
  }
`

class App extends React.Component {
  state = {
    SideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false })
  }

  //Commented out so the animation can be implemented also this was removed {sideDrawer}

  render() {
    //let sideDrawer
    let backdrop

    if (this.state.SideDrawerOpen) {
      //sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>Content page</p>
        </main>
      </div>
    )
  }
}

/* 
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
    <Footer>
      <FooterLinks to="/">Test</FooterLinks>
      <FooterLinks to="/">Test</FooterLinks>
    </Footer>
*/
export default App
