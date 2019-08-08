import React from "react";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks.js";
import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Grid, Column } from "../components/Grid.js";
import { Box, Text } from "rebass";

import { graphql } from "gatsby";

const NotFoundPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout
    title="Pasientreiser"
    introduction="Bestill reiseregningsskjema, konvolutter, veiledninger og annet
    informasjonsmateriell for pasientreiser. Dette er en kostnadsfri tjeneste, du
    betaler verken for materiell eller porto"
  >
    <Box pt={5} pb={4} bg="p4">
      <Grid>
        <Column columns={[4, 4, 12]}>
          <Menu pages={[]} />
        </Column>
      </Grid>
    </Box>
    <Grid>
      <Column columns={[4, 4, 12]}>
        <Box my={7}>
          <Text>
            <h1>404.</h1>

            <p>
              <a href="/">Tilbake til forsiden</a>
            </p>
          </Text>
        </Box>
      </Column>
    </Grid>
  </Layout>
);

export const pageQuery = graphql`
  query PageQuery {
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
  }
`;

export default NotFoundPage;
