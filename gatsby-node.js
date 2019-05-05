const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
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
              ano_del_auto {
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
  `)

  const template = path.resolve("src/templates/UsedCar.js")

  pages.data.allPrismicAutosUsados.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
