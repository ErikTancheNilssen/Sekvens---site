import React from "react";
import { Heading, Card, Box, Flex } from "rebass";
import styled from "styled-components";

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const PageBlock = styled(Flex)``;

const TextBlock = styled(Box)`
  max-width: 600px;
`;

const Picture = styled(Card)`
  min-height: 40vh;
  padding: 3rem;
  position: relative;
  background-repeat: no-repeat;
`;

const Hero = ({ title, introduction, image, items, success, action }) => (
  <Flex flexDirection={["column-reverse", "column-reverse", "row", "row"]}>
    <PageBlock
      justifyContent="center"
      alignItems="center"
      bg="success_bg"
      width={[1, 1, 0.5, 0.5]}
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <TextBlock p={4} m={[2, 2, 3, 6]}>
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <LineBreaker className="introduction">{introduction}</LineBreaker>
        )}
      </TextBlock>
    </PageBlock>

    {!!image && (
      <Picture
        width={[1, 1, 0.5, 0.5]}
        backgroundSize={["auto 70%", "auto 70%", "auto 400px", "60% 400px"]}
        backgroundPosition={"center center"}
        backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
      />
    )}
  </Flex>
);

export default Hero;
