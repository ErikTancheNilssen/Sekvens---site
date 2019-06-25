import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  padding-left: 0;
  list-style-type: none;
  li {
    display: flex;
    flex-start: cross-start;
  }
  li:before {
    content: "✓";
    font-size: 2em;
    line-height: 1em;
    font-weight: 400;
    font-family: ${({ theme: { fonts } }) => fonts.sans};
    margin-right: ${({ theme: { space } }) => space[2]}px;
    color: ${({ theme: { colors } }) => colors.p1};
  }
`;

const CheckList = props => <UL {...props} />;

export default CheckList;
