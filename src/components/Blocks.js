import React from "react";
import { Grid, Column } from "./Grid.js";
import { Link } from "gatsby";
import { Heading, Box, Image } from "rebass";
import styled from "styled-components";
import FunctionsList from "../components/FunctionsList.js";
import FunctionsBlock from "../components/FunctionsBlock.js";
import Solutions from "../components/Solutions.js";
import Hero from "../components/Hero.js";
import Form from "../components/Form.js";
const blockTypes = { FunctionsList, FunctionsBlock, Solutions, Hero, Form };

const LineBreaker = styled.h6`
  white-space: pre-line;
`;

const ColourBlock = styled(Box)`
  overflow: hidden;
`;

const TextBox = styled(Grid)`
  position: relative;
`;

const ImageBlock = styled(Column)`
  min-height: 50vh;
`;

const Blocks = ({ blocks }) =>
  (blocks || []).map((props, index) => {
    const { title, introduction, type, link, image, full } = props;
    const Item = blockTypes[type] || React.Fragment;

    return (
      <React.Fragment key={index}>
        {!full && (
          <TextBox mt={7}>
            <Column columns={[4, 4, 6]}>
              <Heading fontSize={index === 0 ? [5, 5, 8] : [4, 4, 7]}>
                {title}
              </Heading>
            </Column>
            <Column gridColumn="1/span 4">
              {!!introduction && (
                <LineBreaker className="introduction">
                  {introduction}
                </LineBreaker>
              )}
            </Column>
          </TextBox>
        )}

        <Item {...props} />
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
