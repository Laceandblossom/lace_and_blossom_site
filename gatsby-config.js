require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "lace-and-blossom",
    description: `hand crafted presents for every occasion`,
    siteUrl: `https://laceandblossom.netlify.app`,
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
        apiURL: process.env.API_URL
          ? "https://lace-and-blossom.herokuapp.com"
          : `http://localhost:1337`,
        collectionTypes: [`product-collections`, `reviews`],
        singleTypes: [`about-me`, `best-sellers`, `hero-image`, `new-arrivals`],
        queryLimit: 5000,
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
