var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "Sekvens.",
    description: "Endelig en helhetlig løsning for trykksaker",
    menuLinks: [
      {
        name: "Funksjoner",
        path: "/funksjoner"
      },
      {
        name: "Login",
        ext: true,
        path: "https://print.sekvens.app"
      },
      {
        name: ":rocket: Kom i gang",
        path: "/komIGang",
        highlight: true
      }
    ],
    footerLinks: [
      {
        name: "Hjelp",
        path: "/hjelp-support"
      },
      {
        name: "Funksjoner",
        path: "/funksjoner"
      },
      {
        name: ":rocket: Kom i gang",
        path: "/komIGang",
        highlight: true
      }
    ]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        transpileTemplateLiterals: false,
        displayName: false
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sekvens.`,
        lang: `no`,
        description: `En helhetlig løsning for trykksaker`,
        short_name: `Sekvens.`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `rgb(254, 218, 206)`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify"
  ]
};
