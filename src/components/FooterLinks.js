import React from "react";
import { Link } from "gatsby";
import { Flex, Box } from "rebass";
import styled from "styled-components";
import { withTheme } from "styled-components";
import useSiteMetadata from "./SiteMetadata";
import Emojione from "react-emoji-render";

const StyledFlex = styled(Flex)``;

const List = styled(Flex)`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

const Menu = props => {
  const { footerLinks } = useSiteMetadata();
  return (
    <StyledFlex
      flexDirection={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems={["start", "end"]}
    >
      <List flexDirection={["column", "row", "row"]} fontWeight="100" as="ul">
        {footerLinks.map(({ name, path, highlight }, index) => (
          <Box
            m={0}
            pt={[2, 5, 0]}
            pr={[5, 5, 0]}
            pl={[0, 0, 5]}
            as="li"
            key={path}
          >
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
