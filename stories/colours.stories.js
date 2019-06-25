import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { Grid, Column } from "../src/components/Grid.js";
import { Box } from "rebass";

import theme from "../src/theme.js";

import { Button, Welcome } from "@storybook/react/demo";
import SectionTitle from "../src/components/SectionTitle.js";
import Type from "../src/components/FontFace/FontFace.js";

storiesOf("Colors", module)
  .add("Primary colors", () => (
    <ThemeProvider theme={theme}>
      <Grid>
        <Type />
        <Column columns={[4, 4, 12]}>
          <SectionTitle>Primary colors</SectionTitle>
        </Column>
        <Column columns={[2, 2, 3]}>
          <Box color="white" bg="p1" p={4}>
            Primary 1
          </Box>
          <Box bg="p1_15" p={4}>
            Primary light 1
          </Box>
        </Column>
        <Column columns={[2, 2, 3]}>
          <Box color="white" bg="p2" p={4}>
            Primary 2
          </Box>
          <Box bg="p2_15" p={4}>
            Primary light 2
          </Box>
        </Column>
        <Column columns={[2, 2, 3]}>
          <Box bg="p3" p={4}>
            Primary 3
          </Box>
          <Box bg="p3_15" p={4}>
            Primary light 3
          </Box>
        </Column>
        <Column columns={[2, 2, 3]}>
          <Box bg="p4" p={4}>
            Primary 4
          </Box>
          <Box bg="p4_15" p={4}>
            Primary light 4
          </Box>
        </Column>
      </Grid>
    </ThemeProvider>
  ))
  .add("Grayscale", () => (
    <ThemeProvider theme={theme}>
      <Grid>
        <Type />
        <Column columns={[4, 4, 12]}>
          <SectionTitle>Primary colors</SectionTitle>
        </Column>
        <Column columns={[1]}>
          <Box color="white" bg="b_100" p={4}>
            Gray 100
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box color="white" bg="b_80" p={4}>
            Gray 80
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box bg="b_60" p={4}>
            Gray 60
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box bg="b_40" p={4}>
            Gray 40
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box bg="b_30" p={4}>
            Gray 30
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box bg="b_20" p={4}>
            Gray 20
          </Box>
        </Column>
        <Column columns={[1]}>
          <Box bg="b_7" p={4}>
            Gray 7
          </Box>
        </Column>
      </Grid>
    </ThemeProvider>
  ));
