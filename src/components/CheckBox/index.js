import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup({ isChecked, setChecked, label }) {
  return (
    <FormControl sx={{ m: 0, mr: 3 }} component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          style={{ userSelect: 'none' }}
          label={label || ''}
          control={<Checkbox checked={isChecked} onChange={(event) => setChecked(event.target.checked)} name="gilad" />}
        />
      </FormGroup>
    </FormControl>
  );
}
