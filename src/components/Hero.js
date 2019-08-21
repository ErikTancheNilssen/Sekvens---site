import React from "react";
import { Heading, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";
import MarkDown from "react-markdown";

const ImageBlock = styled(Column)`
  min-height: 400px;
`;

const Hero = ({ title, introduction, image }) => (
  <Box bg="p4">
    <Grid>
      <Column
        order={[2, 2, 1]}
        mt={[0, 0, 7]}
        mb="5"
        gridColumn={["1/span 4", "1/span 4", "1/span 4"]}
      >
        <Heading mt={[3, 3, 5]} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <MarkDown className="introduction" source={introduction} />
        )}
      </Column>
      {!!image && (
        <ImageBlock
          my={[0, 0, 5]}
          p={[2, 2, "18rem"]}
          order={[1, 1, 2]}
          gridColumn={["1/span 4", "1/span 4", "6/span 7"]}
          backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
          backgroundPosition={["center", "center", " 100% 100%"]}
          backgroundSize="contain"
        />
      )}
    </Grid>
  </Box>
);

export default Hero;
