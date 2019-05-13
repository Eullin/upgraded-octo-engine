import React, { useContext } from "react"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"
import { MenuContext } from "../context/Menu"
import Button from "../components/ButtonLink/index"
import Layout from "../components/Layout"
import styled from "styled-components"
import SideMenu from "../components/SideMenu/index"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Index = () => {
  const { isOpen } = useContext(MenuContext)

  return (
    <Layout>
      <Container>
        <SideDrawer show={isOpen} />
        {isOpen ? <Backdrop /> : null}
        <Button
          className={"button-link"}
          to={"/auto-usado"}
          text={"Auto Usado"}
        />
        <Button
          className={"button-link"}
          to={"/auto-nuevo/"}
          text={"Auto Nuevo"}
        />
        <SideMenu />
      </Container>
    </Layout>
  )
}

export default Index
