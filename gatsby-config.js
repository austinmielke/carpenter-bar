module.exports = {
  siteMetadata: {
    title: "Carpenter Bar | Downtown Sioux Falls, SD",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "carpenter-bar",
        short_name: "carpenterbar",
        start_url: "/",
        background_color: "#111111",
        theme_color: "#B18F43",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_:\/]+/g);
              }
            },
            extensions: ["html", "js"],
          },
        ],
      },
    },
  ],
};
