import React from "react";
import { InputCustom } from "./styles";

function Input({ label, value, setValue }) {
  return (
    <InputCustom
      value={value}
      id="outlined-basic"
      label={label}
      size="small"
      variant="outlined"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
