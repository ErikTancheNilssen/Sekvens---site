/*global Intercom */
import React from "react";
import { Heading, Text } from "rebass";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";
import Button from "./Button.js";

const LineBreaker = styled(Text)`
  max-width: 350px;
  margin: auto;
`;

const TextBlock = styled(Column)`
  text-align: center;
`;

const Hero = ({ title, introduction, items, success, action }) => (
  <Grid>
    <TextBlock
      my={4}
      p="5"
      gridColumn={["1/span 4", "1/span 4", "3/span 8"]}
      bg="p4"
    >
      <Heading mb={3} fontSize={[4, 4, 5]}>
        {title}
      </Heading>

      {!!introduction && <LineBreaker>{introduction}</LineBreaker>}

      <Button
        onClick={event => {
          if (Intercom) {
            Intercom("show");
            event.preventDefault();
          }
        }}
        mt={4}
        as="a"
        href={success}
      >
        {action}
      </Button>
    </TextBlock>
  </Grid>
);

export default Hero;
