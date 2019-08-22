import React, { useState, useEffect } from "react";
import { Heading, Text, Box, Flex } from "rebass";
import { Grid, Column } from "./Grid.js";
import Orders from "./Orders.js";
import styled from "styled-components";
import { getUsers } from "../impleo/api.js";

const CompanyHeading = styled(Flex)`
  cursor: pointer;
  user-select: none;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme: { colors } }) => colors.b_20};
`;

const Company = ({ companyID, companyName }) => {
  const [users, setUsers] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && !users)
      getUsers(companyID).then(users =>
        setUsers(
          (users || []).sort(({ lastName: a }, { lastName: b }) =>
            a < b ? -1 : a > b ? 1 : 0
          )
        )
      );
  }, [companyID, open]);

  return (
    <Grid my={4}>
      <Column gridColumn={["1/span 4", "1/span 4", "1/span 12"]}>
        <CompanyHeading
          py={3}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Heading
            color="p1"
            mr={3}
            fontSize={6}
            lineHeight={0.6}
            fontWeight="100"
            width="1.5rem"
          >
            {open ? "-" : "+"}
          </Heading>

          <Heading>
            {companyName} {companyID}
          </Heading>
        </CompanyHeading>
        {!!open &&
          !!users &&
          users.map(({ fullName, personID, userName }) => (
            <Box m="3" key={personID}>
              <Text>
                {fullName} - {userName}
              </Text>

              <Orders personID={personID} />
            </Box>
          ))}

        {!!open && !users && (
          <Box m="3">
            <Text>Loading</Text>
          </Box>
        )}
        {!!open && users && !users.length && (
          <Box m="3">
            <Text>No users</Text>
          </Box>
        )}
      </Column>
    </Grid>
  );
};

export default Company;
