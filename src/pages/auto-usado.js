import React from "React"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import MediaControlCard from "../components/MediaControlCard"
import Button1 from "../components/Button"

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
        <Button1 />
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
