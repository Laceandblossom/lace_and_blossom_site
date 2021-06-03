module.exports = {
  siteMetadata: {
    title: "lace-and-blossom",
    description: `hand crafted presents for every occasion`,
    siteUrl: `https://www.laceandblossom.co.uk`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        // process.env.API_URL ||
        collectionTypes: [`product-collections`, `reviews`],
        singleTypes: [`about-me`, `best-sellers`, `hero-image`, `new-arrivals`],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
