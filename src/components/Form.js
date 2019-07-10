import React from "react";
import { Heading, Text, Image, Box, Flex } from "rebass";
import { Grid, Column } from "./Grid.js";
import Input from "./Input.js";
import Button from "./Button.js";

import styled from "styled-components";

const StyledImage = styled(Image)`
  min-height: 160px;
`;

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const PageBlock = styled(Flex)`
  min-height: 80vh;
`;

const TextBlock = styled(Box)`
  max-width: 400px;
`;

const Hero = ({ title, introduction, image, items, success, action }) => (
  <Flex>
    <PageBlock
      justifyContent="center"
      alignItems="center"
      bg="p4_15"
      width={0.5}
    >
      <TextBlock m={7}>
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <LineBreaker className="introduction">{introduction}</LineBreaker>
        )}
        <form action={success}>
          {items.map(({ title, description }, index) => (
            <Box my={4} key={index}>
              <Box mb={2}>
                <Text as="label" for={index + title}>
                  {title}
                </Text>
              </Box>
              <Box>
                <Input
                  id={index + title}
                  name={title}
                  type="text"
                  placeholder={description}
                  width={1}
                />
              </Box>
            </Box>
          ))}
          <Text textAlign="right">
            <Button as="input" type="submit" value={action} />
          </Text>
        </form>
      </TextBlock>
    </PageBlock>
    <PageBlock justifyContent="center" alignItems="center">
      {!!image && (
        <PageBlock
          columns={[4]}
          mt={[0, 0, -4]}
          backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
          backgroundPosition={["center", "center", " 100% 100%"]}
        />
      )}
    </PageBlock>
  </Flex>
);

export default Hero;
