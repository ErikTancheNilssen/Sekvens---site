import React from "react";
import { Button as Base } from "rebass";
import styled from "styled-components";

const ThemedButton = styled(Base)`
  text-transform: uppercase;
  align-items: center;
  display: inline-flex;

  &:focus,
  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

ThemedButton.defaultProps = {
  variant: "primary",
  fontFamily: "sans"
};

const Button = props => {
  let { variant } = props;

  variant = props.disabled ? "disabled" : variant;
  variant = props.hollow ? "hollow" : variant;

  return (
    <ThemedButton
      className="button"
      fontFamily="sans"
      variant={variant}
      {...props}
    />
  );
};

export default Button;
