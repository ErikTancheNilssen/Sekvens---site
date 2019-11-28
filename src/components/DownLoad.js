import React, { useState } from "react";
import { Text, Box, Flex } from "rebass";
import styled from "styled-components";
import Button from "./Button.js";
import { downloadAddresses, downloadOrders, pasientrapport } from "../impleo/api.js";
import { startOfWeek, endOfWeek, startOfYesterday } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledPicker = styled(DatePicker)`
  border: 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[3]}px;
  margin: 0.5rem 0 0;
  padding: 0.5rem;
`;

const StyledSelect = styled.select`
  border: 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[3]}px;
  padding: 0.5rem;
`;
const Toggle = styled(Text)`
  cursor: pointer;
`;

const DownLoad = ({ companies }) => {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(
    startOfWeek(startOfYesterday(), { weekStartsOn: 1 })
  );
  const [end, setEnd] = useState(
    endOfWeek(startOfYesterday(), { weekStartsOn: 1 })
  );

  const [selectedCompany, setCompany] = useState(false);

  return (
    <Box>
      <Toggle
        textAlign="right"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "-" : "+"} Print
      </Toggle>
      {!!open && (
        <Box mt="6" p="4" bg="p4">
          <Text mb="2">Firma</Text>
          <Text>
            <StyledSelect onChange={e => setCompany(e.target.value)}>
              <option>Velg firma</option>
              {companies.map(({ companyName, companyID }) => (
                <option key={companyID} value={companyID}>
                  {companyName}
                </option>
              ))}
            </StyledSelect>
          </Text>
          <Flex flexDirection={["column", "column", "row"]} flexWrap="wrap">
            <Box mr={4}>
              <Text mt="4">Fra</Text>
              <Box>
                <StyledPicker
                  selected={start}
                  dateFormat="dd/MM/yyyy"
                  onChange={setStart}
                />
              </Box>
            </Box>
            <Box>
              <Text mt="4">Til</Text>
              <Box>
                <StyledPicker
                  selected={end}
                  dateFormat="dd/MM/yyyy"
                  onChange={setEnd}
                />
              </Box>
            </Box>
          </Flex>

          {!!selectedCompany && (
            <Text flexGrow="1">
              <Text mb="2" mt="4">
                Last ned
              </Text>
              <Button
                mr="2"
                onClick={() => downloadAddresses(start, end, selectedCompany)}
              >
                Adresser
              </Button>
              <Button
                ml="2"
                onClick={() => downloadOrders(start, end, selectedCompany)}
              >
                Produkter
              </Button>
              <Button
                ml="2"
                onClick={() => pasientrapport(start, end, selectedCompany)}
              >
                Pasientreiser
              </Button>
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DownLoad;
