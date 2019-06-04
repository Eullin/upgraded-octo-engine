import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  direction: row;
`

const UsedCar = ({ data: { prismicAutosUsados } }) => {
  const { data } = prismicAutosUsados
  return (
    <Container>
        <span>{data.modelo_del_auto.text}</span>
        {data.body.map(n => {
          console.log("n", n)
          return (
            n.items.map(item => {
              console.log("item", item)
              return (
                  <div style={{width: '1080px', height: '1080px'}}>
                    <Img fluid={item.gallery_image.localFile.childImageSharp.fluid}/>
                  </div>
                  )})
                
          )
          }
        )}
    </Container>
  )
}

export default UsedCar

export const pageQuery = graphql`
  query CarBySlug($uid: String!) {
    prismicAutosUsados(uid: { eq: $uid }) {
      uid
    data{
      modelo_del_auto{
      text
    }
    imagen_principal{
      url
    }
    body{
      items{
        gallery_image{
          localFile{
            childImageSharp {
                    fluid(maxWidth: 200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                 }
             }
          }
        }
      }
    }
  }
    }
  }
`
