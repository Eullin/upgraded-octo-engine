/* require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `weegot`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
  ],
}

