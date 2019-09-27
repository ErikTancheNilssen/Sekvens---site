import React, { useState } from "react";
import { Heading, Text, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import Input from "./Input.js";
import Button from "./Button.js";
import styled from "styled-components";
import { login } from "../impleo/api.js";
import "formdata-polyfill";

const Link = styled.a`
  color: ${({ theme: { colors } }) => colors.white};
`;

const ShadowBox = styled(Column)`
position relative;
overflow: visible;
  &:after {
    content: "";
    bottom: 0;
    right: 0;
    position: absolute;
    background: transparent url(${({ theme: { images } }) =>
      images.box_bg}) 100% 100% no-repeat;
    margin-right: -2rem;
    margin-bottom: -2rem;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const Loginform = ({ onLogin }) => {
  const [error, setError] = useState(false);
  const [updating, isUpdating] = useState(false);
  return (
    <Grid overflow="hidden" py={5}>
      <ShadowBox
        mr={[4, 4, 4, 0]}
        gridColumn={["1/span 4", "1/span 4", "2/span 9"]}
      >
        <Grid bg="p1">
          <Column
            color="white"
            py={[4, 4, 5, 7]}
            gridColumn={["1/span 4", "1/span 4", "2/span 10", "3/span 8"]}
          >
            <Heading mb={3} fontSize={[5, 5, 8]}>
              Innlogging
            </Heading>
            {!!error && <Heading color="p3">{error.Message}</Heading>}

            <form
              onSubmit={async e => {
                const data = new FormData(e.target);
                e.preventDefault();
                isUpdating(true);
                debugger;
                const { token, error } = await login(data);
                onLogin(token);
                setError(error);
                isUpdating(false);
              }}
            >
              <Box my={4}>
                <Box mb={2}>
                  <Text as="label" htmlFor="Brukernavn">
                    Brukernavn
                  </Text>
                </Box>
                <Box>
                  <Input
                    id="Brukernavn"
                    name="username"
                    type="text"
                    placeholder="maria@NHO.no"
                    width={1}
                    required
                  />
                </Box>
              </Box>
              <Box my={4}>
                <Box mb={2}>
                  <Text
                    as="label"
                    htmlFor="Password"
                    placeholder="maria@NHO.no"
                  >
                    Passord
                  </Text>
                </Box>
                <Box>
                  <Input
                    id="Password"
                    name="password"
                    type="password"
                    width={1}
                    required
                  />
                </Box>
              </Box>

              <Text textAlign="right">
                {!updating && (
                  <Button variant="outline" as="button" type="submit">
                    Logg inn
                  </Button>
                )}
                {!!updating && (
                  <Button variant="disabled" as="button">
                    Logging in...
                  </Button>
                )}
              </Text>
            </form>
            <Link href="https://print.sekvens.app/login.aspx">
              Glemt passord?
            </Link>
          </Column>
        </Grid>
      </ShadowBox>
    </Grid>
  );
};

export default Loginform;
