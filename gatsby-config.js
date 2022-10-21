module.exports = {
  siteMetadata: {
    title: "Pho Bac",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `food`,
        path: `${__dirname}/src/images/food`,
      },
    },
  ],
};
