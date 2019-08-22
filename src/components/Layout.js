import React from "react";
import Helmet from "react-helmet";
import { Card } from "rebass";
import useSiteMetadata from "./SiteMetadata";
import BG from "../images/bg.svg";

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

      <Card background={`fixed no-repeat url(${BG})`}>{children}</Card>
    </>
  );
};

export default TemplateWrapper;
