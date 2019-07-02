import React from "react";
import { Flex, Box, Heading, Image } from "rebass";
import { Grid, Column } from "./Grid.js";

import styled from "styled-components";

const LineBreaker = styled.p`
  white-space: pre-line;
`;

const FunctionsList = ({ title, introduction, type, items }) => (
  <Grid mt={6}>
    <Column>
      <h2>{title}</h2>
      {!!introduction && (
        <LineBreaker className="introduction">{introduction}</LineBreaker>
      )}
    </Column>
    <Column>
      <Flex>
        {items.map(({ title, description, image }, index) => (
          <Box>
            {!!image && (
              <Image
                mb={3}
                height="160px"
                alt={image.name}
                src={image.publicURL}
              />
            )}
            <Heading my={3} fontSize={6} color="p3">
              {index + 1}
            </Heading>
            <h5>{title}</h5>
            {!!description && <LineBreaker>{description}</LineBreaker>}
          </Box>
        ))}
      </Flex>
    </Column>
  </Grid>
);

export default FunctionsList;
