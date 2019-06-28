import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Grid, Column } from "../components/Grid.js";
import { Box, Text, Link } from "rebass";

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  pages
}) => (
  <div>
    <Box bg="p3">
      <Grid>
        <Column columns={[1, 1, 3]}>
          <h6>
            <Link href="/">sekvens.</Link>
          </h6>
        </Column>
        <Column columns={[3, 3, 9]}>
          <Text textAlign="right">
            {pages.map(({ node: { frontmatter, fields } }) => (
              <Link key={fields.slug} href={fields.slug || "/"}>
                {frontmatter.title}
              </Link>
            ))}
          </Text>
        </Column>
      </Grid>
      <Grid>
        <Column>
          <h2>{title}</h2>
        </Column>
      </Grid>
    </Box>
  </div>
);

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
    allMarkdownRemark
  } = data;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        pages={allMarkdownRemark.edges}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { hide: { ne: true } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title

        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
