import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import { Grid, Column } from "../src/components/Grid.js";

import theme from "../src/theme.js";

import SectionTitle from "../src/components/SectionTitle.js";

import Checklist from "../src/components/Checklist.js";

import Type from "../src/components/FontFace/FontFace.js";

storiesOf("Typography", module)
  .add("Typoscale", () => (
    <ThemeProvider theme={theme}>
      <Grid>
        <Type />
        <Column columns={[3, 3, 10]}>
          <SectionTitle>Typoscale</SectionTitle>

          <h1>H1 / Apercu Bold</h1>
          <hr />
          <h2>H2 / Apercu Bold</h2>
          <hr />
          <h3>H3 / Apercu Bold</h3>
          <hr />
          <h4>H4 / Apercu Bold</h4>
          <hr />
          <h5>H5 / Apercu Bold</h5>
          <hr />
          <h6>H6 / Apercu Bold</h6>
          <hr />
          <p>Body 1 / Apercu Mono Regular</p>
          <hr />
          <p className="mute">Body 2 / Apercu Mono Regular</p>
          <hr />
          <h4 className="subtitle">Subtitle 1 / Apercu Mono Regular</h4>
          <hr />
          <h5 className="subtitle2">Subtitle 2 / Apercu Mono Regular</h5>
          <hr />
          <p>
            <a href="#" className="button">
              Button / Apercu Medium
            </a>{" "}
            <a href="#">Link / Apercu Medium</a>
          </p>
          <hr />
          <h5 className="caption">Caption / Apercu Regular</h5>
          <hr />
          <h6 className="overline">Overline / Apercu Medium</h6>
        </Column>
      </Grid>
    </ThemeProvider>
  ))

  .add("Sections", () => (
    <ThemeProvider theme={theme}>
      <Grid>
        <Type />
        <Column columns={[3, 3, 4]}>
          <SectionTitle>page/section heading + ingress</SectionTitle>
          <h2>Funksjoner</h2>
          <p className="introduction">
            Visittkort, profilartikler, brevark, rollups, bannere, beachflagg
            konvolutter & brosjyrer.
          </p>
        </Column>
        <Column columns={[3, 3, 4]}>
          <SectionTitle>text block (feature)</SectionTitle>
          <h3 className="color">Konsistent visuell profil</h3>
          <h6>
            Bestillingsportalen kan inne- holde både dine lagervarer og
            produkter med variabelt innhold - som visittkort, plakater, rollup
            og banner.
          </h6>
          <h6>
            Vi lager maler slik at designet blir konsistent selv om mange ulike
            personer bestiller trykksaker med ulikt innhold.
          </h6>
        </Column>
        <Column columns={[3, 3, 4]}>
          <SectionTitle>text block compact (feature)</SectionTitle>
          <h4 className="color">Konsistent visuell profil</h4>

          <p>
            Vi lager maler slik at designet blir konsistent selv om mange ulike
            personer bestiller trykksaker med ulikt innhold.
          </p>
        </Column>
      </Grid>
    </ThemeProvider>
  ))

  .add("List", () => (
    <ThemeProvider theme={theme}>
      <Grid>
        <Type />
        <Column columns={[3, 3, 4]}>
          <SectionTitle>List</SectionTitle>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
            <li>Cras ornare tristique elit.</li>
            <li>Vivamus vestibulum ntulla nec ante.</li>
            <li>Praesent placerat risus quis eros.</li>
            <li>Fusce pellentesque suscipit nibh.</li>
            <li>Integer vitae libero ac risus egestas placerat.</li>
            <li>Vestibulum commodo felis quis tortor.</li>
            <li>Ut aliquam sollicitudin leo.</li>
            <li>Cras iaculis ultricies nulla.</li>
            <li>Donec quis dui at dolor tempor interdum.</li>
          </ul>
        </Column>
        <Column columns={[3, 3, 4]}>
          <SectionTitle>Checklist</SectionTitle>
          <Checklist>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
            <li>Cras ornare tristique elit.</li>
            <li>Vivamus vestibulum ntulla nec ante.</li>
            <li>Praesent placerat risus quis eros.</li>
            <li>Fusce pellentesque suscipit nibh.</li>
            <li>Integer vitae libero ac risus egestas placerat.</li>
            <li>Vestibulum commodo felis quis tortor.</li>
            <li>Ut aliquam sollicitudin leo.</li>
            <li>Cras iaculis ultricies nulla.</li>
            <li>Donec quis dui at dolor tempor interdum.</li>
          </Checklist>
        </Column>
      </Grid>
    </ThemeProvider>
  ));
