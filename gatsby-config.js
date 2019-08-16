var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "Sekvens.",
    description: "Endelig en helhetlig løsning for trykksaker",
    menuLinks: [
      {
        name: "Løsninger",
        path: "/losninger"
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
        name: "Løsninger",
        path: "/losninger"
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
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "UA-111431549-6",
        anonymize: true
      }
    },
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "cnz8lb75",
        skin: "sekvens website",
        background_color: "#FFF2ED",
        action_color: "#8A1F60",
        include_in_development: true
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
