import React from "react";
import { Grid, Column } from "./Grid.js";
import { Flex, Box, Text } from "rebass";
import styled from "styled-components";
import Menu from "./FooterLinks.js";

const ETN = styled(Text)`
  font-size: 1rem;
  font-weight: 100;
  a {
    color: black;
    background: transparent;
    &:hover {
      color: ${({ theme: { colors } }) => colors.p1};
    }
  }
`;

const MadeByETN = styled(Box)`
  flex-grow: 1;
`;

const Footer = ({ pages }) => (
  <Grid>
    <Column>
      <Flex
        flexDirection={["column", "column", "row"]}
        flexWrap="wrap"
        mt={6}
        mb={3}
      >
        <Box mb={5}>
          <Menu />
        </Box>

        <MadeByETN mb={4} flexGrow={1}>
          <ETN textAlign={["left", "left", "right"]}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://etngrafisk.no/"
            >
              Et produkt av <strong>ETN Grafisk</strong>
            </a>
          </ETN>
        </MadeByETN>
      </Flex>
    </Column>
  </Grid>
);

export default Footer;
