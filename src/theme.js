import { transparentize, hsl, darken } from "polished";
import gray from "gray-percentage";
import box_bg from "./images/solution_bg.svg";
import logo from "./images/logo.svg";
const p1 = "#5D103F";
const p2 = "#8A1F60";
const p3 = "#FEC2AD";
const p4 = "#FEDACE";

export default {
  fontSizes: [12, 14, 16, 21, 25, 32, 48, 50, 64],
  maxWidth: 1440,
  colors: {
    p1,
    p2,
    p3,
    p4,
    p1_15: transparentize(0.75, p1),
    p2_15: transparentize(0.75, p2),
    p3_15: transparentize(0.75, p3),
    p4_15: transparentize(0.75, p4),
    p1_d: darken(0.23, p1),
    p2_d: darken(0.23, p2),
    p3_d: darken(0.23, p3),
    p4_d: darken(0.23, p4),
    b_100: hsl(0, 0, 0),
    b_80: gray(20),
    b_60: gray(40),
    b_40: gray(60),
    b_30: gray(70),
    b_20: gray(80),
    b_7: gray(93),
    white: "#ffffff",
    lightgray: "#CCCCCC",
    gray: "#3A3A3A",
    text: "rgba(0, 0, 0, 0.85)",
    subtext: "rgba(0, 0, 0, 0.6)",
    none: "transprent",
    success_bg: "#C9E2D4",
    link: "black"
  },
  space: [0, 4, 8, 15, 30, 45, 60, 120, 256],
  fonts: {
    sans: "apercu, system-ui, sans-serif",
    mono: "apercu mono, Menlo, monospace"
  },
  images: { box_bg, logo },

  textarea: {
    outline: {
      backgroundColor: "transparent",
      border: "1px solid #D1D7DD",
      fontSize: "1em",
      padding: ".5em",
      borderRadius: "0.2em"
    }
  },
  inputs: {
    outline: {
      backgroundColor: "transparent",
      border: "1px solid #D1D7DD",
      fontSize: "1em",
      padding: ".5em",
      borderRadius: "0.2em",
      width: "100%",
      maxWidth: "500px"
    }
  },

  buttons: {
    primary: {
      color: "rgba(255,255,255,0.87)",
      fontFamily: "apercu, system-ui, sans-serif",
      backgroundColor: p1,
      borderRadius: "3em",
      padding: "1em 2em",
      lineHeight: 1,
      fontWeight: 400,
      cursor: "pointer",
      border: "5px solid white",
      letterSpacing: 1.25,
      "&:hover": {
        backgroundColor: darken(0.05, p1)
      }
    },
    disabled: {
      color: "rgba(255,255,255,0.87)",
      fontFamily: "apercu, system-ui, sans-serif",
      backgroundColor: gray(70),
      borderRadius: "3em",
      padding: "1em 2em",
      lineHeight: 1,
      fontWeight: 400,
      cursor: "default",
      letterSpacing: 1.25
    },
    hollow: {
      color: "black",
      fontFamily: "apercu, system-ui, sans-serif",
      backgroundColor: "transparent",
      borderRadius: "3em",
      border: `3px solid ${gray(90)}`,
      padding: "1em 2em",
      lineHeight: 1,
      fontWeight: 400,
      cursor: "pointer",
      letterSpacing: 1.25
    }
  }
};
