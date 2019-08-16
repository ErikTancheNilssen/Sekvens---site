import React from "react";
import { Heading, Flex, Card, Text } from "rebass";
import styled from "styled-components";
import MarkDown from "react-markdown";

const ImageBlock = styled(Card)`
  min-height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 50%;
`;

const TextBlock = styled(Text)`
  max-width: 400px;
`;

const Hero = ({ title, introduction, image }) => (
  <Flex
    backgroundColor="p4"
    pt={2}
    flexDirection={[
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row"
    ]}
  >
    <Flex
      justifyContent="flex-end"
      bg="p4_15"
      width={image ? [1, 1, 1, 0.5] : [1]}
    >
      <TextBlock textAlign="right" py={5} m={[4, 4, 5, 7]}>
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <MarkDown className="introduction" source={introduction} />
        )}
      </TextBlock>
    </Flex>
    <ImageBlock
      backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
      py={[4, 4, 5, 7]}
      width={[1, 1, 1, 0.5]}
    />
  </Flex>
);

export default Hero;
