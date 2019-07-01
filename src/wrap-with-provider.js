import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";
import Type from "./components/FontFace/FontFace.js";

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <Type />
      {element}
    </>
  </ThemeProvider>
);
