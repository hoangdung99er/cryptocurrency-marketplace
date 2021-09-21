import React from "react";
import { Input as InputMui } from "@mui/material";

function Input(props) {
  const ariaLabel = { "aria-label": "description" };
  return (
    <InputMui
      onChange={props.onChange}
      placeholder="Search coins"
      inputProps={ariaLabel}
    />
  );
}

export default Input;
