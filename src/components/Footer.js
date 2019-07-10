import React from "react";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";
import Menu from "./Menu.js";

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

const Footer = ({ pages }) => (
  <Grid my={5}>
    <Column columns={[4, 4, 5]}>
      <Menu pages={pages} />
    </Column>
    <Column alignSelf="center" columns={[4, 4, 7]}>
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
