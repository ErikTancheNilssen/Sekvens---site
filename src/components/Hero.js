import React from "react";
import { Heading, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";
import MarkDown from "react-markdown";

const ImageBlock = styled(Column)`
  min-height: 50vh;
`;

const Hero = ({ title, introduction, image }) => (
  <Box bg="p4" mb={3} pt={[4, 4, 5, 7]}>
    <Grid>
      <Column
        gridColumn={["1/span 4", "1/span 4", "2/span 6"]}
        pt={[0, 0, 4]}
        px={[2, 2, 0]}
      >
        <Heading mb={3} fontSize={[5, 5, 8]}>
          {title}
        </Heading>

        {!!introduction && (
          <MarkDown className="introduction" source={introduction} />
        )}
      </Column>
      {!!image && (
        <ImageBlock
          columns={[4]}
          mt={[0, 0, -4]}
          backgroundImage={`url(${image.publicURL ? image.publicURL : image})`}
          backgroundPosition={["center", "center", " 100% 100%"]}
        />
      )}
    </Grid>
  </Box>
);

export default Hero;
