import React from "react";
import { Link } from "gatsby";
import { Text, Flex, Heading, Box } from "rebass";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  a {
    color: black;
    background: transparent;
    line-height: 2rem;
    white-space: nowrap;

    &:hover {
      color: ${({ theme: { colors } }) => colors.p1};
    }
  }
`;

const List = styled(Text)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Menu = props => {
  const { pages } = props;
  return (
    <StyledFlex justifyContent="space-between" alignItems="end">
      <Heading mr={4} mt="-.25rem" fontSize={5} fontWeight="400">
        <Link to="/">sekvens.</Link>
      </Heading>
      <List as="ul" textAlign="right">
        {pages.map(({ node: { frontmatter, fields } }, index) => (
          <Box m={0} pl={[3, 3, 4]} as="li" key={fields.slug + index}>
            <Link to={fields.slug || "/"}>{frontmatter.title}</Link>
          </Box>
        ))}
      </List>
    </StyledFlex>
  );
};

export default Menu;
