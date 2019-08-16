import React, { useState, useEffect } from "react";
import { Heading, Text, Box } from "rebass";
import { Grid, Column } from "./Grid.js";

import { getProfile, getCompanies } from "../impleo/api.js";

const Loginform = ({ token }) => {
  const [{ fullName }, setProfile] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getProfile().then(profile => setProfile(profile));
    getCompanies().then(companies =>
      setCompanies(
        (companies || [])
          .filter(({ companyName }) => !!companyName)
          .sort(({ companyName: a }, { companyName: b }) =>
            a < b ? -1 : a > b ? 1 : 0
          )
      )
    );
  }, [token]);

  return (
    <Grid overflow="hidden" py={5}>
      <Column>
        <Heading>You are logged in {!!fullName && `as ${fullName}`}</Heading>
      </Column>
      <Column>
        {companies.map(({ companyID, companyName }) => (
          <Box key={companyID} py={2}>
            <Text>{companyName}</Text>
          </Box>
        ))}
      </Column>
    </Grid>
  );
};

export default Loginform;
