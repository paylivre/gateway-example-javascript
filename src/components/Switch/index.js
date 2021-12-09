import { FormLabel, Switch } from "@mui/material";
import React from "react";

const InputSwitch = (props) => {
  const { name, checked, label, onChange } = props;

  return (
    <>
      <FormLabel
        style={{ userSelect: "none", marginTop: -13 }}
        component="legend"
      >
        {label}
      </FormLabel>
      <Switch
        checked={checked}
        onChange={(event) => onChange(event)}
        color="primary"
        name={name}
      />
    </>
  );
};

export default InputSwitch;
