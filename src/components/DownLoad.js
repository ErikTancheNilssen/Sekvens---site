import React, { useState } from "react";
import { Text, Box } from "rebass";
import styled from "styled-components";
import Button from "./Button.js";
import { downloadExcel } from "../impleo/api.js";
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
          <Text mb="2">Company</Text>
          <Text>
            <StyledSelect onChange={e => setCompany(e.target.value)}>
              <option>Select a company</option>
              {companies.map(({ companyName, companyID }) => (
                <option key={companyID} value={companyID}>
                  {companyName}
                </option>
              ))}
            </StyledSelect>
          </Text>

          <Text mt="4">From</Text>
          <Box>
            <StyledPicker
              selected={start}
              dateFormat="dd/MM/yyyy"
              onChange={setStart}
            />
          </Box>
          <Text mt="4">To</Text>
          <Box>
            <StyledPicker
              selected={end}
              dateFormat="dd/MM/yyyy"
              onChange={setEnd}
            />
          </Box>
          {!!selectedCompany && (
            <Text flexGrow="1" textAlign="right">
              <Button
                onClick={() => downloadExcel(start, end, selectedCompany)}
              >
                Download
              </Button>
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DownLoad;
