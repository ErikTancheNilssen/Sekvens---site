import React, { useState } from "react";
import Layout from "../components/Layout";

import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";
import { Grid, Column } from "../components/Grid.js";
import { Box } from "rebass";
import Loginform from "../components/Loginform.js";
import Orders from "../components/Orders.js";
import { checkLogin } from "../impleo/api.js";

const Report = () => {
  const [loggedIn, setloggedIn] = useState(checkLogin());

  return (
    <Layout title="Report" introduction="Report of orders for Pasientreiser">
      <Box pt={5} pb={4} bg="p4">
        <Grid>
          <Column columns={[4, 4, 12]}>
            <Menu />
          </Column>
        </Grid>
      </Box>
      <Grid>
        <Column columns={[4, 3, 8]}>
          <Box my={5}>{!loggedIn && <Loginform onLogin={setloggedIn} />}</Box>
          <Box>{!!loggedIn && <Orders token={loggedIn} />}</Box>
        </Column>
      </Grid>
      <Footer />
    </Layout>
  );
};

export default Report;
