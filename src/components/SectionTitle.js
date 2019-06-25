import React from "react";

import styled from "styled-components";
import { color, space } from "styled-system";
import { Heading } from "rebass";

const Title = styled.h6`
  font-size: 0.75rem;
  display: inline-block;
  ${color}
  ${space}
`;

export const SectionTitle = props => {
  return (
    <Title
      bg="b_7"
      px={4}
      py={2}
      mt={2}
      mb={3}
      className="overline"
      {...props}
    />
  );
};

export default SectionTitle;
