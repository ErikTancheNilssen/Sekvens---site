import React from "react";
import { Heading, Text, Card, Box, Flex } from "rebass";
import { Grid, Column } from "./Grid.js";
import Input from "./Input.js";
import Button from "./Button.js";

import styled from "styled-components";

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const PageBlock = styled(Flex)`
  min-height: 80vh;
`;

const TextBlock = styled(Box)`
  max-width: 400px;
`;

const Picture = styled(Card)`
  min-height: 50vh;
  padding: 3rem;
  position: relative;
  background-repeat: no-repeat;
`;

const Hero = ({ title, introduction, image, items, success, action }) => (
  <Flex
    mb={7}
    flexDirection={[
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row"
    ]}
  >
    <PageBlock
      justifyContent="center"
      alignItems="center"
      bg="p4_15"
      width={[1, 1, 1, 0.5]}
    >
      <TextBlock m={[2, 2, 3, 7]}>
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <LineBreaker className="introduction">{introduction}</LineBreaker>
        )}
        <form name={title} method="post" data-netlify="true" action={success}>
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
                  required
                />
              </Box>
            </Box>
          ))}
          <div hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
          <input type="hidden" name="form-name" value={title} />

          <Text textAlign="right">
            <Button as="button" type="submit">
              {action}
            </Button>
          </Text>
        </form>
      </TextBlock>
    </PageBlock>

    {!!image && (
      <Picture
        width={[1, 1, 1, 0.5]}
        backgroundSize={["70% auto", "70% auto", "70% auto", "70% 90%"]}
        backgroundPosition={[
          "center 10px",
          "center 10px",
          "center 10px",
          "70% 90%"
        ]}
        backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
      />
    )}
  </Flex>
);

export default Hero;
