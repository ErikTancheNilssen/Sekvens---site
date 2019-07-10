import React from "react";
import { Heading, Card } from "rebass";
import { Grid, Column } from "./Grid.js";

import styled from "styled-components";

const StyledImage = styled(Card)`
  min-height: 160px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 90%;
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
            pb={3}
            alt={image.name}
            backgroundImage={`url(${
              image.publicURL ? image.publicURL : image
            })`}
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
