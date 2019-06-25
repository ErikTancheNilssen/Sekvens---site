import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { Grid, Column } from "../src/components/Grid.js";
import Button from "../src/components/Button.js";
import Arrow from "../src/components/Arrow.js";

import theme from "../src/theme.js";

import SectionTitle from "../src/components/SectionTitle.js";

import Type from "../src/components/FontFace/FontFace.js";

storiesOf("Input", module).add("Buttons", () => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Type />
      <Column columns={[3, 3, 10]}>
        <div>
          <SectionTitle>Buttons</SectionTitle>
        </div>
        <Button>Button / Apercu Medium</Button>{" "}
        <Button>
          Button / Apercu Medium <Arrow fill="white" />
        </Button>{" "}
        <Button disabled>Button / Apercu Medium</Button>{" "}
        <Button hollow>
          Button / Apercu Medium <Arrow left />
        </Button>
      </Column>
    </Grid>
  </ThemeProvider>
));
