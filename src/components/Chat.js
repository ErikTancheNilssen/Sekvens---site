import React from "react";
import { Heading, Text } from "rebass";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";
import Button from "./Button.js";
import { Link } from "gatsby";

const LineBreaker = styled(Text)`
  max-width: 350px;
  margin: auto;
`;

const Header = styled(Heading)`
  max-width: 650px;
  margin: auto;
`;

const TextBlock = styled(Column)`
  text-align: center;
`;

const Hero = ({ title, introduction, items, success, action }) => (
  <Grid>
    <TextBlock
      my={[5, 5, 7]}
      py="6"
      gridColumn={["1/span 4", "1/span 4", "2/span 10"]}
      bg="p4"
    >
      <Header mb={3} fontSize={[4, 4, 5]}>
        {title}
      </Header>

      {!!introduction && <LineBreaker>{introduction}</LineBreaker>}

      <Button mt={4} as={Link} href={success}>
        {action}
      </Button>
    </TextBlock>
  </Grid>
);

export default Hero;
