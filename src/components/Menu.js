import React from "react";
import { Link } from "gatsby";
import { Text, Flex, Heading } from "rebass";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  a {
    color: black;
    background: transparent;
    &:hover {
      color: ${({ theme: { colors } }) => colors.p1};
    }
  }
`;

const Menu = props => {
  const { pages } = props;
  return (
    <StyledFlex justifyContent="space-between" alignItems="baseline">
      <Heading fontSize={5} fontWeight="400">
        <Link to="/">sekvens.</Link>
      </Heading>
      <Text textAlign="right">
        {pages.map(({ node: { frontmatter, fields } }) => (
          <Link key={fields.slug} to={fields.slug || "/"}>
            {frontmatter.title}
          </Link>
        ))}
      </Text>
    </StyledFlex>
  );
};

export default Menu;
