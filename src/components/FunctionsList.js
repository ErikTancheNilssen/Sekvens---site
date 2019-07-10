import React from "react";
import { Heading, Image } from "rebass";
import { Grid, Column } from "./Grid.js";

import styled from "styled-components";

const StyledImage = styled(Image)`
  min-height: 160px;
`;

const LineBreaker = styled.p`
  white-space: pre-line;
`;

const FunctionsList = ({ items }) => (
  <Grid>
    {items.map(({ title, description, image }, index) => (
      <Column columns={[2, 2, 6, 3]} p={3} key={index}>
        {!!image && (
          <StyledImage
            mb={3}
            alt={image.name}
            src={image.publicURL ? image.publicURL : image}
          />
        )}
        <Heading my={3} fontSize={6} color="p3">
          {index + 1}
        </Heading>
        <h5>{title}</h5>
        {!!description && <LineBreaker>{description}</LineBreaker>}
      </Column>
    ))}
  </Grid>
);

export default FunctionsList;
