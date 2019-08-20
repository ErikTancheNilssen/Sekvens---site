import React, { useState, useEffect } from "react";
import { Heading, Text, Box } from "rebass";
import { Grid, Column } from "./Grid.js";
import Orders from "./Orders.js";

import { getUsers } from "../impleo/api.js";

const Company = ({ companyID, companyName }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(companyID).then(users =>
      setUsers(
        (users || []).sort(({ lastName: a }, { lastName: b }) =>
          a < b ? -1 : a > b ? 1 : 0
        )
      )
    );
  }, [companyID]);

  return (
    <Grid my={4}>
      <Column gridColumn={["1/span 4", "1/span 4", "1/span 12"]}>
        <Heading>
          {companyName} {companyID}
        </Heading>

        {users.map(({ fullName, personID, userName }) => (
          <Box ml="3" key={personID}>
            <Text mt="3">
              {fullName} - {userName}
            </Text>

            <Orders personID={personID} />
          </Box>
        ))}
      </Column>
    </Grid>
  );
};

export default Company;
