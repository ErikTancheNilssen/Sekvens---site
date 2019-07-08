import React from "react";
import { Image, Heading } from "rebass";
import { Grid, Column } from "./Grid.js";
import Checklist from "./Checklist.js";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ShadowBox = styled(Column)`
position relative;
  &:after {
    z-index: -1;
    content: "";
    bottom: 0;
    position: absolute;
    background: red;
    margin-right: 2rem;
    margin-bottom: -2rem;
    width: 100%;
    height: 100%;
  }
`;

const Solutions = ({ items, compact }) => (
  <Column>
    <Grid>
      {items.map(({ title, introduction, description, image }, index) => (
        <ShadowBox
          border="3px solid"
          borderColor="p3"
          key={index}
          p={4}
          columns={[4]}
        >
          <Heading fontSize={[4, 4, 5]} mt={4} mb={5}>
            {title}
          </Heading>
          {!!introduction && (
            <Heading color="p1" fontWeight="400" fontSize={[2, 2, 3]} mb={4}>
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
  </Column>
);

export default Solutions;
