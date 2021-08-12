require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Elyseos Seed Sale`,
    description: `Elyseos.`,
    author: `Sy Tzu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/common/layout/layout.js`),
      },
    },
    {
    resolve: `gatsby-plugin-gosquared`,
    options: {
      token: 'GSN-284016-R',
    },
  },
  {
   resolve: 'gatsby-plugin-matomo',
   options: {
     siteId: '1',
     matomoUrl: 'https://elyseos.matomo.cloud/',
     siteUrl: 'https://www.elyseos.com/'
   }
 },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#231B17`,
        theme_color: `#231B17`,
        display: `minimal-ui`,
        icon: `src/images/Elyseos Logo.png`,
      },
    },
    {
       resolve: `gatsby-source-graphql`,

       options: {
         // This type will contain remote schema Query type
         typeName: `WPGraphQL`,
         // This is field under which it's accessible
         fieldName: `wpgraphql`,
         // Url to query from
         url: `http://blog.elyseos.com/graphql`,
      //  url: `http://alchemy-of-remembrance.local/graphql`
       },
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
