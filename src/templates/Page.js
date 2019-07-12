import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageTemplate from "./PageTemplate.js";

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
        menuColor
        blocks {
          title
          introduction
          type
          compact
          full
          success
          action
          link {
            link
            text
            ext
          }
          image {
            id
            publicURL
            name
          }
          items {
            title
            introduction
            description
            active
            textarea
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
