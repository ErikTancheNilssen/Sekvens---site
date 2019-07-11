import React from "react";
import Helmet from "react-helmet";

import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ title, introduction, children }) => {
  const { siteTitle, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="no" />
        <title>{`${title} : ${siteTitle}`}</title>
        <meta name="description" content={introduction || description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
      </Helmet>

      <div>{children}</div>
    </>
  );
};

export default TemplateWrapper;
