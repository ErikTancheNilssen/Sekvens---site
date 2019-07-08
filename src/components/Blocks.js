import React from "react";
import { Grid, Column } from "./Grid.js";
import { Link } from "gatsby";
import { Heading } from "rebass";
import styled from "styled-components";
import functionsList from "../components/FunctionsList.js";
import functionsBlock from "../components/FunctionsBlock.js";
import solutions from "../components/Solutions.js";

const blockTypes = { functionsList, functionsBlock, solutions };

const LineBreaker = styled.p`
  white-space: pre-line;
`;

const Blocks = ({ blocks }) =>
  (blocks || []).map((props, index) => {
    const { title, introduction, type, link } = props;
    const Item = blockTypes[type] || React.Fragment;
    return (
      <React.Fragment key={index}>
        <Grid mt={7}>
          <Column columns={[3, 3, 5]}>
            <Heading fontSize={index === 0 ? [5, 5, 8] : [4, 4, 7]}>
              {title}
            </Heading>
            {!!introduction && (
              <LineBreaker className="introduction">{introduction}</LineBreaker>
            )}
          </Column>
          <Item {...props} />
        </Grid>
        <Grid>
          {!!link && link.link && (
            <Column mt={-3} mb={3} gridColumn={[-2]}>
              <h6>
                {link.ext ? (
                  <a rel="noopener noreferrer" target="_blank" href={link.link}>
                    {link.text}
                  </a>
                ) : (
                  <Link to={link.link}>{link.text}</Link>
                )}
              </h6>
            </Column>
          )}
        </Grid>
      </React.Fragment>
    );
  });

export default Blocks;
