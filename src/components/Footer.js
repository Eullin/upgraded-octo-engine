import React from "react"
import styled from "styled-components"

export const Background = styled.div`
  background-color: rgb(28, 28, 28);
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  text-align: center;
`

export const Description = styled.span`
  color: white;
  font-size: 16px;
`

const Footer = () => (
  <Background>
    <Description>Footer</Description>
  </Background>
)

export default Footer
