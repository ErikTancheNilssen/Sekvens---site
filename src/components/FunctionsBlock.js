import React from "react";
import { Flex, Box, Image, Heading } from "rebass";
import { Column } from "./Grid.js";

import styled from "styled-components";

const LineBreaker = styled.p`
  white-space: pre-line;
`;

const Bottom = styled(Flex)`
  z-index: -1;
  position: relative;
`;

const FunctionsBlock = ({ title, introduction, type, items, link }) => (
  <Column p={5} pt={0}>
    <Bottom mt={-7} p={5} flexWrap="wrap" bg="p4_15">
      {items.map(({ title, description, image }, index) => (
        <Box p={5} key={index} width={0.5}>
          {!!image && (
            <Image
              mb={3}
              height="160px"
              alt={image.name}
              src={image.publicURL}
            />
          )}
          <Heading color="p2" as="h4" mb={3}>
            {title}
          </Heading>
          {!!description && <LineBreaker>{description}</LineBreaker>}
        </Box>
      ))}
    </Bottom>
  </Column>
);

export default FunctionsBlock;
