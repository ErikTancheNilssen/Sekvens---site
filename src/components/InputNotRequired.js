import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

const ThemedInput = styled(Box)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

ThemedInput.defaultProps = {
  variant: "primary",
  fontFamily: "sans",
  p: 3
};

const InputNotRequired = props => {
  return (
    <ThemedInput
      fontSize={3}
      as={props.textArea ? "textarea" : "input"}
      fontFamily="sans"
      {...props}
    />
  );
};

export default InputNotRequired;
