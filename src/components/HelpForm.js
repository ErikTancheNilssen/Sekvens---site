import React from "react";
import { Heading, Text, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import Input from "./Input.js";
import Button from "./Button.js";
import styled from "styled-components";

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const ShadowBox = styled(Column)`
position relative;
overflow: visible;
  &:after {
    content: "";
    bottom: 0;
    right: 0;
    position: absolute;
    background: transparent url(${({ theme: { images } }) =>
      images.box_bg}) 100% 100% no-repeat;
    margin-right: -2rem;
    margin-bottom: -2rem;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const Hero = ({ title, introduction, image, items, success, action }) => (
  <Grid overflow="hidden" py={5}>
    <ShadowBox
      mr={[4, 4, 4, 0]}
      gridColumn={["1/span 4", "1/span 4", "2/span 9"]}
    >
      <Grid bg="p1">
        <Column
          color="white"
          py={[4, 4, 5, 7]}
          gridColumn={["1/span 4", "1/span 4", "2/span 10", "3/span 8"]}
        >
          <Heading mb={3} fontSize={[5, 5, 8]}>
            {title}
          </Heading>

          {!!introduction && (
            <LineBreaker className="introduction">{introduction}</LineBreaker>
          )}
          <form name={title} method="post" data-netlify="true" action={success}>
            {(items || []).map(({ title, description, textarea }, index) => (
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
                    textArea={textarea}
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
        </Column>
      </Grid>
    </ShadowBox>
  </Grid>
);

export default Hero;
