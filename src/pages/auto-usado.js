import React from "React"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import MediaControlCard from "../components/MediaControlCard"
import Button from "../components/ButtonLink/index"

class UsedCar extends React.Component {
  render() {
    const {
      data: { allPrismicAutosUsados },
    } = this.props
    return (
      <Layout>
        <h2 style={{ textAlign: "center" }}>Autos Certificados</h2>
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          ¿No encuentras lo que buscas?
        </p>
        <Button className={"button-link"} to={"/"} text={"Contáctanos"} />
        <MediaControlCard allPrismicAutosUsados={allPrismicAutosUsados.edges} />
      </Layout>
    )
  }
}

export default UsedCar

export const pageQuery = graphql`
  query UsedCarsQuery {
    allPrismicAutosUsados {
      edges {
        node {
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
    }
  }
`
