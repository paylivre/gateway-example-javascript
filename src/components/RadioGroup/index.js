import React from "react";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
// import { Container } from './styles';

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel({ defaultCheckedValue, ...props }) {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = defaultCheckedValue === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function UseRadioGroup({
  labelGroup,
  checkData = [],
  defaultCheckedValue,
  setChecked,
  direction,
}) {
  const validDirection = direction || "row";

  return (
    <>
      <FormLabel
        style={{ userSelect: "none", marginTop: -13 }}
        component="legend"
      >
        {labelGroup}
      </FormLabel>
      <RadioGroup
        defaultValue="first"
        name="use-radio-group"
        onChange={(event) => setChecked(event.target.value)}
        style={{ flexDirection: validDirection }}
      >
        {checkData.map((data) => (
          <MyFormControlLabel
            key={data.value}
            defaultCheckedValue={defaultCheckedValue}
            value={data.value}
            label={data.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </>
  );
}
