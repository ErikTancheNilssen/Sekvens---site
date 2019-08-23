import React, { useState, useEffect } from "react";
import { Heading, Text, Box, Flex } from "rebass";
import { Grid, Column } from "./Grid.js";
import Orders from "./Orders.js";
import styled from "styled-components";
import { getUserInfo } from "../impleo/api.js";
const Toggle = styled(Flex)`
  cursor: pointer;
  user-select: none;
`;

const User = props => {
  const {
    companyID,
    user: { fullName, userName, personID }
  } = props;

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (open) getUserInfo(companyID, personID).then(setUser);
  }, [companyID, personID, open]);

  return (
    <Box mt={2} ml="5">
      <Toggle
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Text fontWeight="bold" fontSize="1" color="p1" width="1.5rem">
          {open ? "-" : "+"}
        </Text>
        <Text mr="2" fontWeight="700" key={personID}>
          {personID}
        </Text>
        <Text fontWeight="700" key={personID}>
          {fullName || userName}
        </Text>
      </Toggle>

      {!!open && (
        <Box mt="3" mx="5" mb="5">
          {user.title && <Text>{user.title}</Text>}
          {user.email && <Text>{user.email}</Text>}
          {user.phone && <Text>{user.phone}</Text>}
          {user.mobile && <Text>{user.mobile}</Text>}
          <Orders personID={personID} />
        </Box>
      )}
    </Box>
  );
};

export default User;
