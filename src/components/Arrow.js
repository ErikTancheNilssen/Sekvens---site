import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  display: inline-block;
  margin: 0 .5em;
  ${({ left }) => (left ? " transform: rotate(90deg);" : null)}
  ${({ right }) => (right ? " transform: rotate(-90deg);" : null)}
  ${({ up }) => (up ? "transform: rotate(180deg);" : null)}

  path {
  fill: ${({ fill, theme }) => (fill ? theme.colors[fill] : theme.colors[0])};
  }
`;

const Arrow = props => (
  <SVG width="1em" height="1.5em" viewBox="0 0 12 24" {...props}>
    <path
      d="M11.7 17.838a1 1 0 0 0-.924-.617H7.75a.249.249 0 0 1-.25-.25V1.5a1.5 1.5 0 0 0-3 0v15.471a.25.25 0 0 1-.25.25H1.222a1 1 0 0 0-.707 1.707l4.777 4.778a1 1 0 0 0 1.415 0l4.778-4.778a1 1 0 0 0 .215-1.09z"
      fill="#5D103F"
      fillRule="evenodd"
    />
  </SVG>
);

export default Arrow;
