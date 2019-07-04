import React from "react";
import { Grid, Column } from "./Grid.js";
import { Link } from "gatsby";
import { Heading, Flex } from "rebass";

import styled from "styled-components";

import Menu from "./Menu.js";

const ETN = styled.h5`
  font-size: 1rem;
  font-weight: 100;
  text-align: right;
`;

const Footer = ({ pages }) => (
  <Grid>
    <Column columns={[4, 4, 5]}>
      <Menu pages={pages} />
    </Column>
    <Column columns={[4, 4, 7]}>
      <ETN>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://etngrafisk.no/"
        >
          Et produkt av <strong>ETN Grafisk</strong>
        </a>
      </ETN>
    </Column>
  </Grid>
);

export default Footer;
