import React from "react";
import { Heading, Image, Box } from "rebass";
import { Grid, Column } from "./Grid.js";

import styled from "styled-components";

const StyledImage = styled(Image)`
  min-height: 160px;
`;

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const ImageBlock = styled(Column)`
  min-height: 50vh;
`;

const Hero = ({ title, introduction, image }) => (
  <Box bg="p4" pt={7}>
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
          <LineBreaker className="introduction">{introduction}</LineBreaker>
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
