import React, { useState, useEffect } from "react";
import { Heading } from "rebass";
import { Grid, Column } from "./Grid.js";
import Company from "./Company.js";

import { getProfile, getCompanies } from "../impleo/api.js";

const Companies = ({ token }) => {
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
        {companies.map(company => (
          <Company key={company.companyID} {...company} />
        ))}
      </Column>
    </Grid>
  );
};

export default Companies;
