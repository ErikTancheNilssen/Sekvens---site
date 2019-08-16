/*global Intercom */
import React from "react";
import { Heading, Flex, Text } from "rebass";
import styled from "styled-components";
import Button from "./Button.js";

const LineBreaker = styled(Text)`
  max-width: 350px;
`;

const PageBlock = styled(Flex)`
  text-align: center;
`;

const TextBlock = styled(Flex)`
  max-width: 800px;
`;

const Hero = ({ title, introduction, items, success, action }) => (
  <Flex flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
    <PageBlock justifyContent="center" alignItems="center" width={1}>
      <TextBlock
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        bg="p4"
        p={6}
        my={[6]}
        mx={[3, 3, 3, 6]}
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
    </PageBlock>
  </Flex>
);

export default Hero;
