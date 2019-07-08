import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Grid, Column } from "../components/Grid.js";
import Blocks from "../components/Blocks.js";
import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Box } from "rebass";

export const PageTemplate = ({
  title,
  introduction,
  blocks = [],
  pages = []
}) => (
  <div>
    <Box bg="p4" mb={7}>
      <Grid>
        <Column columns={[4, 4, 12]}>
          <Menu pages={pages} />
        </Column>
      </Grid>
      <Grid>
        <Column>
          <h2>{title}</h2>
          {!!introduction && <h6>{introduction}</h6>}
        </Column>
      </Grid>
    </Box>
    <Blocks blocks={blocks} />
    <Footer pages={pages} />
  </div>
);

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
    allMarkdownRemark
  } = data;
  return (
    <Layout {...frontmatter}>
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
            introduction
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        introduction
        blocks {
          title
          introduction
          type
          compact
          link {
            link
            text
            ext
          }
          items {
            title
            introduction
            description
            image {
              id
              publicURL
              name
            }
          }
        }
      }
    }
  }
`;
