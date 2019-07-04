import React from "react";
import Helmet from "react-helmet";

import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ title, introduction, children }) => {
  const { siteTitle, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`${title} : ${siteTitle}`}</title>
        <meta name="description" content={introduction || description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Helmet>

      <div>{children}</div>
    </>
  );
};

export default TemplateWrapper;
