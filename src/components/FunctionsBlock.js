import React from "react";
import { Image, Heading } from "rebass";
import { Grid, Column } from "./Grid.js";

import styled from "styled-components";

const LineBreaker = styled.p`
  white-space: pre-line;
  margin: 0;
`;

const FunctionsBlock = ({
  title,
  introduction,
  type,
  items,
  link,
  compact
}) => (
  <Grid>
    <Column p={[0, 0, 5]}>
      <Grid mt={[0, 0, -2, -7]} py={[3, 3, 7]} px={[3, 3, 6]} bg="p4_15">
        {items.map(({ title, description, image }, index) => (
          <Column key={index} columns={compact ? [4, 4, 4] : [4, 4, 6]}>
            {!!image && (
              <Image
                mb={3}
                height="160px"
                alt={image.name}
                src={image.publicURL}
              />
            )}
            <Heading
              color="p2"
              fontSize={compact ? [2, 2, 3] : [3, 3, 4]}
              mb={compact ? 2 : 3}
            >
              {title}
            </Heading>
            {!!description && <LineBreaker>{description}</LineBreaker>}
          </Column>
        ))}
      </Grid>
    </Column>
  </Grid>
);

export default FunctionsBlock;
