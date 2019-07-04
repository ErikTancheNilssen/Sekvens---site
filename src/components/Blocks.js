import React from "react";
import { Grid, Column } from "./Grid.js";
import { Link } from "gatsby";

import styled from "styled-components";
import functionsList from "../components/FunctionsList.js";
import functionsBlock from "../components/FunctionsBlock.js";

const blockTypes = { functionsList, functionsBlock };

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
          <Column columns={[3, 3, 7]}>
            <h2>{title}</h2>
            {!!introduction && (
              <LineBreaker className="introduction">{introduction}</LineBreaker>
            )}
          </Column>
          <Item {...props} />
        </Grid>
        <Grid>
          {!!link && (
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
