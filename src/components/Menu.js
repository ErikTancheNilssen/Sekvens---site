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
  justify-content: flex-end;
  .highlight {
    color: ${({ theme: { colors } }) => colors.p2};
  }
`;

const Menu = props => {
  const { theme } = props;
  const { menuLinks } = useSiteMetadata();
  return (
    <StyledFlex
      justifyContent="space-between"
      alignItems={["start", "end"]}
      flexDirection={["column", "column", "row"]}
    >
      <Heading mr={2} mt="-.25rem" fontSize={5} fontWeight="300">
        <Link to="/">
          <img alt="sekvens." src={theme.images.logo} />
        </Link>
      </Heading>
      <List fontWeight="100" as="ul" textAlign="right">
        {menuLinks.map(({ name, path, highlight, ext }, index) => (
          <Box
            m={0}
            pt={[3, 3, 0]}
            pr={[5, 5, 0]}
            pl={[0, 0, 5]}
            as="li"
            key={path}
          >
            {ext ? (
              <a
                className={highlight ? "highlight" : ""}
                target="_blank"
                rel="noopener noreferrer"
                href={path}
              >
                <Emojione text={name} />
              </a>
            ) : (
              <Link
                className={highlight ? "highlight" : ""}
                activeClassName="active"
                to={path}
              >
                <Emojione text={name} />
              </Link>
            )}
          </Box>
        ))}
      </List>
    </StyledFlex>
  );
};

export default withTheme(Menu);
