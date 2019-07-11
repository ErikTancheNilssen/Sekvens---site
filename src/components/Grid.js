import React from "react";

import styled from "styled-components";
import { grid, layout, border, padding, background } from "styled-system";
import { Box } from "rebass";

const GridSection = styled(Box)`
  display: grid;
  grid-template-rows: auto;
  margin-left: auto; 
  margin-right: auto;
  padding: 0 ${({ theme: { space } }) => space[3] + "px"};

  ${layout}
  ${grid}
  ${border}
`;

const StyledBox = styled(Box)`
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: contain;
  ${grid}
  ${border}
  ${background}
`;

GridSection.defaultProps = {
  maxWidth: [1440],
  gridColumnGap: [4, 4, 5],
  gridRowGap: [4, 4, 5],
  gridTemplateColumns: ["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(12, 1fr)"]
};

export const Column = props => {
  const gridColumn =
    props.gridColumn || (props.columns || [12]).map(num => `span ${num}`);
  return <StyledBox {...props} gridColumn={gridColumn} />;
};

export const Grid = props => {
  return <GridSection {...props} />;
};

export default Grid;
