import React from "react";
import { Heading, Card } from "rebass";
import { Grid, Column } from "./Grid.js";
import MarkDown from "react-markdown";

import styled from "styled-components";

const StyledImage = styled(Card)`
  min-height: 160px;
  background-repeat: no-repeat;
  background-size: auto 90%;
`;

const FunctionsList = ({ items }) => (
  <Grid>
    {items.map(({ title, description, image }, index) => (
      <Column columns={[2, 2, 6, 3]} p={3} key={index}>
        {!!image && (
          <StyledImage
            pb={3}
            alt={image.name}
            backgroundImage={`url(${
              image.publicURL ? image.publicURL : image
            })`}
            backgroundPosition={[
              "center center",
              "center center",
              "left center"
            ]}
          />
        )}
        <Heading my={3} fontSize={6} color="p3">
          {index + 1}
        </Heading>
        <h5>{title}</h5>
        {!!description && <MarkDown source={description} />}
      </Column>
    ))}
  </Grid>
);

export default FunctionsList;
