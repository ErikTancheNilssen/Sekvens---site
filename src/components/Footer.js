import React from "react";
import { Grid, Column } from "./Grid.js";
import { Flex, Box } from "rebass";
import styled from "styled-components";
import Menu from "./FooterLinks.js";

const ETN = styled.h5`
  font-size: 1rem;
  font-weight: 100;
  text-align: right;
  line-height: 2rem;
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
      <Flex flexWrap="wrap" mt={7} mb={3}>
        <Box mb={5}>
          <Menu pages={pages} />
        </Box>

        <MadeByETN flexGrow={1}>
          <ETN>
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
