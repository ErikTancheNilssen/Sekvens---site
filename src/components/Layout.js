import React from "react";
import Helmet from "react-helmet";

import useSiteMetadata from "./SiteMetadata";
import Type from "./FontFace/FontFace.js";
import { ThemeProvider } from "styled-components";
import theme from "../theme.js";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

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
        <Type />
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
