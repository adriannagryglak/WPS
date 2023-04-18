/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `POLTEL | usługi VoIP, telefonia VoIp bez limitu`,
    description: `Firma POLTEL powstała w odpowiedzi na rosnące zapotrzebowanie rynku na najnowsze i tanie usługi telekomunikacyjne i teletransmisyjne. Podstawą jej działalności jest świadczenie usług telefonicznych VoIP, opartych o najnowocześniejsze na świecie technologie transmisji danych.`,
    author: `agencja interaktywna Goldenbird`,
    // siteUrl: ``, TO DO
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `POLTEL | usługi VoIP | telfonia VoIp bez limitu`,
        short_name: `POLTEL`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logogold.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap`,
          },
        ],
      },
    },
  ],
}
