import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const Container = styled.div`
  display: flex;
  direction: row;
`

const UsedCar = ({ data: { prismicAutosUsados } }) => {
  const { data } = prismicAutosUsados
  return (
    <Container>
      <div>
        <span>{data.modelo_del_auto.text}</span>
      </div>
      <div>
        <img src={data.imagen_principal.url} alt={data.imagen_principal.alt} />
      </div>
    </Container>
  )
}

export default UsedCar

export const pageQuery = graphql`
  query CarBySlug($uid: String!) {
    prismicAutosUsados(uid: { eq: $uid }) {
      uid
      data {
        modelo_del_auto {
          text
        }
        millas {
          text
        }
        imagen_principal {
          url
        }
      }
    }
  }
`
