import { createGlobalStyle } from "styled-components";
import React from "react";
import "./index.css";
const TypographyStyle = createGlobalStyle`


::selection {
  color: ${({ theme: { colors } }) => colors.p1};
  background:  ${({ theme: { colors } }) => colors.p4};
}
::-moz-selection {
  color: black;
  background:  ${({ theme: { colors } }) => colors.p3_15};
}



body {
    background: ${({ theme: { colors } }) => colors.p4};
    padding: 0;
    margin: 0;
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
#___gatsby{
  background: ${({ theme: { colors } }) => colors.white};
}

h1, h2, h3, h4, h5, h6, p, hr, ul {
  margin: 0 0  ${({ theme: { space } }) => space[4] + "px"} 0;
}
h1, h2, h3, h4, h5, h6{
  font-family: ${({ theme: { fonts } }) => fonts.sans};
}
h1{
    font-size: 6.25rem;
    line-height: 1.2em;
}
h2{
    font-size: 3.75rem;
    line-height: 1.19em;
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
h6, .introduction{
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: lighter;
    font-family: ${({ theme: { fonts } }) => fonts.mono};
}

a {

color: ${({ theme: { colors } }) => colors.link};
  text-decoration: none;
}

p > a, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a {
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.black};
  transition: top .1s ease-in-out;
  position: relative; 
  top: 0px;

&:hover{
    border-bottom-color: transparent;
    border-bottom: 4px solid transparent;
    position: relative; 
    top: -2px;
  }

}

a.active{
  color:  ${({ theme: { colors } }) => colors.p1};
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
    letter-spacing: 1.25;
}

.overline {
    font-family: ${({ theme: { fonts } }) => fonts.mono};
    text-decoration: none;
    text-transform: uppercase;
    color:  ${({ theme: { colors } }) => colors.subtext};
}

  .color {
    color:  ${({ theme: { colors } }) => colors.p3};
  }

  .mono {
    font-family: ${({ theme: { fonts } }) => fonts.mono};
  }


`;

const FontFace = ({ theme }) => {
  return <TypographyStyle />;
};

export default FontFace;
