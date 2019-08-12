import React from "react";
import { Heading } from "rebass";
import { Grid, Column } from "./Grid.js";
import Checklist from "./Checklist.js";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ShadowBox = styled(Column)`
position relative;

  &:after {
    content: "";
    bottom: 0;
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

const Solutions = ({ items, compact }) => (
  <Grid p={[1, 1, 5]}>
    {items.map(({ title, introduction, description, image, active }, index) => (
      <ShadowBox
        border="3px solid"
        borderColor="p3"
        key={index}
        p={4}
        mr={4}
        columns={[4, 4, 6, 4]}
        bg={active ? "p4_15" : "white"}
        mb={4}
      >
        <Heading fontSize={[4, 4, 5]} mt={4} mb={5}>
          {title}
        </Heading>
        {!!introduction && (
          <Heading color="p1" fontWeight="400" fontSize={[1, 1, 2]} mb={4}>
            {introduction}
          </Heading>
        )}
        {!!description && (
          <Checklist>
            <ReactMarkdown source={description} />
          </Checklist>
        )}
      </ShadowBox>
    ))}
  </Grid>
);

export default Solutions;
