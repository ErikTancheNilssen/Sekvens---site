import React from "react";
import { Heading, Text, Card, Box, Flex } from "rebass";
import Input from "./Input.js";
import Button from "./Button.js";
import styled from "styled-components";

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const PageBlock = styled(Flex)`
  min-height: calc(100vh - 110px);
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
      width={image ? [1, 1, 1, 0.5] : [1]}
    >
      <TextBlock m={[4, 4, 5, 7]}>
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <LineBreaker className="introduction">{introduction}</LineBreaker>
        )}
        <form name={title} method="post" data-netlify="true" action={success}>
          {(items || []).map(({ title, description, textarea, required }, index) => (
            <Box my={4} key={index}>
              <Box mb={2}>
                <Text as="label" htmlFor={index + title}>
                  {title}
                </Text>
              </Box>
              <Box>
                <Input
                  id={index + title}
                  name={title}
                  type="text"
                  textArea={textarea}
                  placeholder={description}
                  width={1}
                  required={required || required == null ? "required" : null}
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
        backgroundSize={["cover"]}
        backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
      />
    )}
  </Flex>
);

export default Hero;
