import { createGlobalStyle } from "styled-components";
import React from "react";
import "./index.css";
const TypographyStyle = createGlobalStyle`


body {
    color:  ${({ theme: { colors } }) => colors.text};
    font-family: ${({ theme: { fonts } }) => fonts.mono};
    font-weight: normal;
    font-size:  ${({ theme: { fontSizes } }) => fontSizes[2] + "px"};
    line-height: 1.5;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
}
h1, h2, h3, h4, h5, h6, p, hr, ul {
  margin: 0 0  ${({ theme: { space } }) => space[4] + "px"} 0;
}
h1, h2, h3, h4, h5, h6{
  font-family: ${({ theme: { fonts } }) => fonts.sans};
}
h1{
    font-size: 6.25rem;
    line-height: 1em;
}
h2{
    font-size: 3.75rem;
    line-height: 1em;
}
h3{
    font-size: 3rem; 
    line-height: 3.125rem;
}
h4{
    font-size: 2.125rem; 
    line-height: 2.5rem;
}
h5{
    font-size: 1.5rem; 
    line-height: 2rem;
}
h6{
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: lighter;
    font-family: ${({ theme: { fonts } }) => fonts.mono};
}

a {
  padding-left: .5em;
  padding-right: .5em;
  color: ${({ theme: { colors } }) => colors.p1};
  text-decoration: none;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(${({
    theme: {
      colors: { p3_15 }
    }
  }) => `${p3_15}, ${p3_15}`}); 
  background-size: .05em 1px, .05em 1px, 1px 55%;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0 85%, 100% 85%, 0 85%;
  text-decoration: none
}
a:hover{
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(${({
    theme: {
      colors: { p3 }
    }
  }) => `${p3}, ${p3}`}); 
  background-position: 0 100%, 100% 100%, 0 100%;
}


ul {
  padding-left: ${({ theme: { space } }) => space[3]}px;
  li {
    margin-bottom: ${({ theme: { space } }) => space[2]}px;
  }
}

  .subtitle{
    font-size: 1rem;
    line-height: 1.75rem;
    color:  ${({ theme: { colors } }) => colors.subtext};
}

.subtitle2{
    font-size: .875rem; 
    line-height: 1.375rem;
    color:  ${({ theme: { colors } }) => colors.subtext};
}

.mute{
    font-size: .875rem; 
    line-height: 1.25rem;
    color:  ${({ theme: { colors } }) => colors.subtext};
}

.caption{
    font-size: .75rem;
}

.button{
    font-size: .875rem;
    text-decoration: none;
  text-transform: uppercase;
  background: none;
}

.overline {
    font-family: ${({ theme: { fonts } }) => fonts.mono};
    text-decoration: none;
    text-transform: uppercase;
    color:  ${({ theme: { colors } }) => colors.subtext};
}

  .color {
    color:  ${({ theme: { colors } }) => colors.p1};
  }

  .mono {
    font-family: ${({ theme: { fonts } }) => fonts.mono};
  }


`;

const FontFace = ({ theme }) => {
  return <TypographyStyle />;
};

export default FontFace;
