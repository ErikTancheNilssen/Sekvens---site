import React, { useState } from "react";
import { Heading, Flex, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import styled from "styled-components";

const LineBreaker = styled.p`
  white-space: pre-line;
`;

const FAQHeading = styled(Flex)`
  cursor: pointer;
  user-select: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme: { colors } }) => colors.b_20};
`;

const FunctionsList = ({ items }) => {
  const [ids, setOpen] = useState([]);
  const open = new Set(ids);

  return (
    <Grid my={5}>
      <Column gridColumn={["1/span 4", "2/span 8", "2/span 8"]}>
        {items.map(({ title, description, image }, index) => (
          <Box key={index}>
            <FAQHeading
              py={3}
              onClick={() => {
                open.has(index) ? open.delete(index) : open.add(index);
                setOpen(Array.from(open));
              }}
            >
              <Heading
                color="p1"
                mr={3}
                fontSize={6}
                lineHeight={0.6}
                fontWeight="100"
                width="1.5rem"
              >
                {open.has(index) ? "-" : "+"}
              </Heading>
              <Heading>{title}</Heading>
            </FAQHeading>
            {open.has(index) && (
              <Box mt={4}>
                {!!description && <LineBreaker>{description}</LineBreaker>}
              </Box>
            )}
          </Box>
        ))}
      </Column>
    </Grid>
  );
};

export default FunctionsList;
