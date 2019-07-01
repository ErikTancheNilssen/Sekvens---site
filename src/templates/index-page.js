import React from "react";

import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import { Grid, Column } from "../components/Grid.js";
import { Box, Text } from "rebass";

export const PageTemplate = ({
  title,
  heading,
  subheading,
  introduction,
  pages
}) => (
  <div>
    <Box bg="p3">
      <Grid>
        <Column columns={[1, 1, 3]}>
          <h6>
            <Link to="/">sekvens.</Link>
          </h6>
        </Column>
        <Column columns={[3, 3, 9]}>
          <Text textAlign="right">
            {pages.map(({ node: { frontmatter, fields } }) => (
              <Link key={fields.slug} to={fields.slug || "/"}>
                {frontmatter.title}
              </Link>
            ))}
          </Text>
        </Column>
      </Grid>
      <Grid>
        <Column>
          <h2>{title}</h2>
          <p>{introduction}</p>
        </Column>
      </Grid>
    </Box>
    <Grid>
      <Column columns={[1, 1, 2]}>
        <img alt="" src="" />
        <h5 className="color">1</h5>
        <p>
          Velg produkt du ønsker å trykke opp eller last opp ditt eget dokument.
        </p>
      </Column>
      <Column columns={[1, 1, 2]}>
        <img alt="" src="" />
        <h5 className="color">1</h5>
        <p>
          Velg produkt du ønsker å trykke opp eller last opp ditt eget dokument.
        </p>
      </Column>
      <Column columns={[1, 1, 2]}>
        <img alt="" src="" />
        <h5 className="color">1</h5>
        <p>
          Velg produkt du ønsker å trykke opp eller last opp ditt eget dokument.
        </p>
      </Column>
      <Column columns={[1, 1, 2]}>
        <img alt="" src="" />
        <h5 className="color">1</h5>
        <p>
          Velg produkt du ønsker å trykke opp eller last opp ditt eget dokument.
        </p>
      </Column>
    </Grid>
  </div>
);

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
    allMarkdownRemark
  } = data;
  return (
    <Layout>
      <PageTemplate {...frontmatter} pages={allMarkdownRemark.edges} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query PageByID($id: String!) {
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        introduction
      }
    }
  }
`;
