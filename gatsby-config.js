/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.apomatix.com`,
    title: `Understand your risks. Reduce the impact. Protect your business - Apomatix`,
    defaultTitle: `Understand your risks. Reduce the impact. Protect your business - Apomatix`,
    titleTemplate: `Apomatix`,
    defaultDescription: `Apomatix`,
    twitterUsername: `Apomatix`,
    image: "/assets/meeting-meta.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/csv/`,
        name: `csv-files`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: settings.ga,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.apomatix.com",
        sitemap: "https://www.apomatix.com/sitemap-pages.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL ||
          `https://ax-uk-website.azurewebsites.net/blog/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
          timeout: 60000,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              activeEnv === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  3
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-103843527-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "GTM-5TLM485", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
  ],
}
