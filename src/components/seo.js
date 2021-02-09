import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, article, seoImage }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  let url = pathname
    ? "https://www.apomatix.com" + pathname
    : "https://www.apomatix.com"

  //We dont want a slash on the end for the home page
  if (url == "https://www.apomatix.com/") {
    url = "https://www.apomatix.com"
  }

  title = "Apomatix - " + title

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    image,
  } = site.siteMetadata

  let metaImage

  if (seoImage) {
    metaImage = seoImage
  } else {
    metaImage = image
  }

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{title}</title>
      <link rel="alternate" href={url} hreflang="en-us" />
      <link rel="alternate" href={url} hreflang="en" />
      <link rel="alternate" href={url} hreflang="x-default" />
      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />

      {url && <meta property="og:url" content={url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {title && <meta property="og:title" content={title} />}

      {description && <meta property="og:description" content={description} />}

      {metaImage && <meta property="og:image" content={metaImage} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && <meta name="twitter:description" content={description} />}

      {metaImage && <meta name="twitter:image" content={metaImage} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        image
        twitterUsername
      }
    }
  }
`
