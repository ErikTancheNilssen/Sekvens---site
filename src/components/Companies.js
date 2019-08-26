import React, { useState, useEffect } from "react";
import { Grid, Column } from "./Grid.js";
import Company from "./Company.js";

import { getCompanies } from "../impleo/api.js";

const Companies = ({ token }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
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
    <Grid p="0" overflow="hidden" py={5}>
      <Column>
        {companies.map((company, index) => (
          <Company key={company.companyID + "_" + index} {...company} />
        ))}
      </Column>
    </Grid>
  );
};

export default Companies;
