import React from "react";
import { Link } from "gatsby";
import { Text, Flex, Heading, Box } from "rebass";
import styled from "styled-components";
import { withTheme } from "styled-components";
import useSiteMetadata from "./SiteMetadata";
import Emojione from "react-emoji-render";

const StyledFlex = styled(Flex)``;

const List = styled(Text)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Menu = props => {
  const { theme } = props;
  const { footerLinks } = useSiteMetadata();
  return (
    <StyledFlex justifyContent="space-between" alignItems="end">
      <Heading mr={2} mt="-.25rem" fontSize={5} fontWeight="300">
        <Link to="/">
          <img alt="sekvens." src={theme.images.logo} />
        </Link>
      </Heading>
      <List fontWeight="100" as="ul" textAlign="right">
        {footerLinks.map(({ name, path, highlight }, index) => (
          <Box m={0} pl={[4, 4, 5]} as="li" key={path}>
            <Link activeClassName="active" to={path}>
              <Emojione text={name} />
            </Link>
          </Box>
        ))}
      </List>
    </StyledFlex>
  );
};

export default withTheme(Menu);
