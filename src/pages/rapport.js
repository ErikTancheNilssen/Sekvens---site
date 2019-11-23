import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Grid, Column } from "../components/Grid.js";
import { Box, Text, Heading } from "rebass";
import Loginform from "../components/LoginForm.js";
import Companies from "../components/Companies.js";
import { checkLogin, logout, getProfile } from "../impleo/api.js";
import styled from "styled-components";

const Link = styled.a`
  font-weight: bold;
  cursor: pointer;
`;

const Report = () => {
  const [loggedIn, setloggedIn] = useState(checkLogin());
  const [{ firstName }, setProfile] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      getProfile().then(profile => setProfile(profile));
    }
  }, [loggedIn]);

  return (
    <Layout title="Rapport" introduction="Generer rapporter">
      <Box pt={5} pb={4} bg="p4">
        <Grid>
          <Column columns={[4, 4, 12]}>
            <Menu />
          </Column>
        </Grid>
      </Box>
      <Grid>
        <Column columns={[4, 3, 12]}>
          <Box>{!loggedIn && <Loginform onLogin={setloggedIn} />}</Box>

          {!!loggedIn && (
            <Box>
              <Text color="b_60" as="p" mt="5" fontSize="1" textAlign="right">
                Logget inn som {firstName}. Ikke deg?{" "}
                <Link
                  onClick={e => {
                    logout();
                    setloggedIn(false);
                    window.location.reload();
                  }}
                >
                  Logg ut
                </Link>
                .
              </Text>

              <Grid mt={[5, 5, 6, 7]}>
                <Column columns={[4, 4, 10]}>
                  <Heading fontSize="8">Rapport</Heading>
                </Column>

                <Column gridColumn={["1/span 4", "1/span 4", "3/span 8"]}>
                  {!!loggedIn && <Companies token={loggedIn} />}
                </Column>
              </Grid>
            </Box>
          )}
        </Column>
      </Grid>
      <Footer />
    </Layout>
  );
};

export default Report;
