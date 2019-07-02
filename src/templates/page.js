import React from "react";

import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import { Grid, Column } from "../components/Grid.js";
import functionsList from "../components/FunctionsList.js";
import { Box, Text } from "rebass";

const blockTypes = { functionsList };

export const PageTemplate = ({
  title,
  introduction,
  blocks = [],
  pages = []
}) => (
  <div>
    <Box bg="p4">
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
          {!!introduction && <h6>{introduction}</h6>}
        </Column>
      </Grid>
    </Box>
    {(blocks || []).map(props => {
      const Item = blockTypes[props.type];
      return Item ? <Item {...props} /> : null;
    })}
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
          items {
            title
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
